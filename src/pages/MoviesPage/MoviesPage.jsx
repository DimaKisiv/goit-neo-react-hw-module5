import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import movieApiService from "../../services/movie-api.service";
import { MovieList } from "../../components/MovieList/MovieList";
import { Loader } from "../../components/Loader/Loader";
import styles from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const search = searchParams.get("query") || "";
    setQuery(search);
    if (search) {
      setLoading(true);
      setError(null);
      movieApiService
        .searchMovies(search)
        .then(setMovies)
        .catch(() => setError("Failed to fetch movies."))
        .finally(() => setLoading(false));
    } else {
      setMovies([]);
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setSearchParams({ query });
    setLoading(true);
    setError(null);
    try {
      const results = await movieApiService.searchMovies(query);
      setMovies(results);
    } catch {
      setError("Failed to fetch movies.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Search Movies</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={query}
          placeholder="Enter movie name"
          onChange={(e) => setQuery(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Search</button>
      </form>
      {loading && <Loader />}
      {error && <div className={styles.error}>{error}</div>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
