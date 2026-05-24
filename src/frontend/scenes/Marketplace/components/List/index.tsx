import React, { ReactElement } from "react";
import { CityItem } from "../..";
import { Card } from "antd";
import { CardTitle, Description } from "./styles";

import cityView from "../../assets/city1.jpg";

type ListProps = {
  itemsToRender: CityItem[];
};

export function List({ itemsToRender }: ListProps): ReactElement {
  return (
    <>
      {itemsToRender.map((value, index) => (
        <Card
          key={`${value.name}_${index}`}
          cover={<img draggable={false} alt="example" src={cityView} />}
        >
          <CardTitle>{value.name}</CardTitle>
          <Description>{value.description}</Description>
        </Card>
      ))}
    </>
  );
}
