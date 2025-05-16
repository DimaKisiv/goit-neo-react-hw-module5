import { useEffect, useState } from "react";
import movieApiService from "../../services/movie-api.service";
import { MovieList } from "../../components/MovieList/MovieList";
import { Loader } from "../../components/Loader/Loader";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTrending() {
      setLoading(true);
      setError(null);
      try {
        const trending = await movieApiService.getTrendingMovies();
        setMovies(trending);
      } catch {
        setError("Failed to fetch trending movies.");
      } finally {
        setLoading(false);
      }
    }
    fetchTrending();
  }, []);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Trending Movies</h1>
      {loading && <Loader />}
      {error && <div className={styles.error}>{error}</div>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
