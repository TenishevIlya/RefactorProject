import { ReactElement, useCallback, useEffect, useState } from "react";
import { Seats } from "../../components/Seats";

type FilmHallProps = {
  filmId: number;
};

export function FilmHall({ filmId }: FilmHallProps): ReactElement {
  const [seats, setSeats] = useState([]);

  const fetchFilm = useCallback(async () => {
    await fetch(`http://localhost:4000/film/taken-seats/${filmId}`, {
      method: "GET",
    }).then(async (res) => {
      const parsed = await res.json();

      if (!res.ok) {
        throw new Error(parsed.message);
      }

      setSeats(parsed.seats);
    });
  }, []);

  useEffect(() => {
    const callFetchFilm = async () => {
      await fetchFilm();
    };

    callFetchFilm();
  }, []);

  return <Seats filmId={filmId} refetchSeats={fetchFilm} takenSeats={seats} />;
}
