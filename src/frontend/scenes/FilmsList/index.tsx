import { ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, FilmCard } from "./styles";
import { BaseLayout } from "../../components/BaseLayout";

export function FilmsList(): ReactElement {
  const [filmsList, setFilmsList] = useState<
    Array<{ id: string; title: string }>
  >([]);

  useEffect(() => {
    const getFilms = async () => {
      await fetch("http://localhost:4000/films-list", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => setFilmsList(data.list));
    };

    getFilms();
  }, []);

  return (
    <BaseLayout title={"Choose a film you want"}>
      <Container>
        {filmsList.map(({ id, title }) => (
          <Link to={`/films/${id}`}>
            <FilmCard>{title}</FilmCard>
          </Link>
        ))}
      </Container>
    </BaseLayout>
  );
}
