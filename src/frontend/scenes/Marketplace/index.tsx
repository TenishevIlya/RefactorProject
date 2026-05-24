import React, {
  ReactElement,
  useCallback,
  useEffect,
  useState,
  useTransition,
} from "react";
import { Container } from "./styles";

import { Spin } from "antd";

import { List } from "./components/List";
import { SearchInput } from "./components/SearchInput";

export type CityItem = {
  id: number;
  description: string;
  name: string;
};

export function Marketplace(): ReactElement {
  const [items, setItems] = useState<CityItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<CityItem[]>([]);
  const [isInProgress, setIsInProgress] = useTransition();

  const handleLongAction = useCallback((action: () => void) => {
    setIsInProgress(() => action());
  }, []);

  useEffect(() => {
    const getFilms = async () => {
      await fetch("http://localhost:4000/city-items", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => handleLongAction(() => setItems(data.items)));
    };

    getFilms();
  }, []);

  const filterItems = useCallback(
    (filterValue: string) => {
      handleLongAction(() => {
        if (!filterValue) return setFilteredItems(items);
        const filtered = items.filter((item) =>
          item.name.toLowerCase().includes(filterValue.toLowerCase()),
        );
        setFilteredItems(filtered);
      });
    },
    [items],
  );
  const itemsToRender = filteredItems?.length > 0 ? filteredItems : items;

  return (
    <>
      <SearchInput onChangeCallback={filterItems} />
      <Container $isLoading={isInProgress}>
        {isInProgress ? (
          <Spin description="Items are loading..." size="large" />
        ) : (
          <List itemsToRender={itemsToRender} />
        )}
      </Container>
    </>
  );
}
