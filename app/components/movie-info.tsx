import styles from "../../styles/movie-info.module.css";
import { API_URL } from "../constants";
import Link from "next/link";

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`, {
    cache: "force-cache",
  });
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        alt={movie.title}
        className={styles.poster}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>★{movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target="_blank">
          ▶Hompage
        </a>
        <Link
          href={`/movies/${movie.id}/videos`}
          className={styles.button}
        ></Link>
      </div>
    </div>
  );
}
