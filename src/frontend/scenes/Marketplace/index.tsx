import React, { ReactElement, useCallback, useEffect, useState } from "react";
import {
  CardTitle,
  Container,
  Description,
  Input,
  InputContainer,
} from "./styles";

import { Card } from "antd";

import cityView from "./assets/city1.jpg";

type CityItem = {
  id: number;
  description: string;
  name: string;
};

export function Marketplace(): ReactElement {
  const [items, setItems] = useState<CityItem[]>([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const getFilms = async () => {
      await fetch("http://localhost:4000/city-items", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => setItems(data.items));
    };

    getFilms();
  }, []);

  const onInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
      const value = event.target.value;
      setInputValue(value);

      const filtered = items.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase()),
      );
      setItems(filtered);
    },
    [items],
  );

  return (
    <>
      <InputContainer>
        <Input
          id="cityName"
          value={inputValue}
          placeholder="Type city name"
          onChange={onInputChange}
        />
      </InputContainer>
      <Container>
        {items.map((value, index) => (
          <Card
            key={`${value.name}_${index}`}
            cover={<img draggable={false} alt="example" src={cityView} />}
          >
            <CardTitle>{value.name}</CardTitle>
            <Description>{value.description}</Description>
          </Card>
        ))}
      </Container>
    </>
  );
}
