import { useParams } from "react-router";
import { useEffect, useState } from "react";
import movieApiService from "../../services/movie-api.service";
import { MovieImage } from "../MovieImage/MovieImage";
import { Loader } from "../Loader/Loader";
import styles from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCast() {
      setLoading(true);
      setError(null);
      try {
        const credits = await movieApiService.getMovieCredits(movieId);
        setCast(credits.cast);
      } catch {
        setError("Failed to fetch cast.");
      } finally {
        setLoading(false);
      }
    }
    fetchCast();
  }, [movieId]);

  return (
    <div className={styles.castWrapper}>
      <h3>Cast</h3>
      {loading && <Loader />}
      {error && <div className={styles.error}>{error}</div>}
      {!loading && !error && (
        cast.length === 0 ? (
          <div>There is no cast.</div>
        ) : (
          <ul className={styles.castList}>
            {cast.map((member) => (
              <li key={member.creditId} className={styles.castItem}>
                <MovieImage
                  image={member}
                  pathKey="profilePath"
                  altKey="name"
                  size="w185"
                />
                <div>
                  <strong>{member.name}</strong> as {member.character}
                  <div>Popularity: {member.popularity}</div>
                </div>
              </li>
            ))}
          </ul>
        )
      )}
    </div>
  );
}
