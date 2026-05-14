import { ReactElement } from "react";
import { FilmHall } from "../FilmHall";

export function Film(): ReactElement {
  const id = window.location.pathname.split("/")[2];

  return <FilmHall filmId={Number(id)} />;
}
