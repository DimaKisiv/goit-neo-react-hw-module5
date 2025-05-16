import { Link, useLocation } from "react-router";
import { MovieImage } from "../MovieImage/MovieImage";
import styles from "./MovieList.module.css";

export function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={styles.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={styles.item}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <MovieImage
              image={movie}
              pathKey="poster_path"
              altKey="title"
              size="w200"
            />
          </Link>
          <div className={styles.info}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }} className={styles.title}>
              <strong>{movie.title}</strong>
            </Link>
            <div>Release: {movie.release_date}</div>
            <div>Rating: {movie.vote_average}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}
