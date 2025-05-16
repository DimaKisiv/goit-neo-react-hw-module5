import {
  useParams,
  Outlet,
  Link,
  useLocation,
  useNavigate,
} from "react-router";
import { useEffect, useState, useRef } from "react";
import movieApiService from "../../services/movie-api.service";
import { MovieImage } from "../../components/MovieImage/MovieImage";
import { Loader } from "../../components/Loader/Loader";
import styles from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const backLinkRef = useRef(location.state?.from || "/movies");

  useEffect(() => {
    async function fetchDetails() {
      setLoading(true);
      setError(null);
      try {
        const details = await movieApiService.getMovieDetails(movieId);
        setMovie(details);
      } catch {
        setError("Failed to fetch movie details.");
      } finally {
        setLoading(false);
      }
    }
    fetchDetails();
  }, [movieId]);

  const handleGoBack = () => {
    navigate(backLinkRef.current, { replace: true });
  };

  return (
    <div className={styles.page}>
      <button onClick={handleGoBack} className={styles.backBtn}>Go back</button>
      {loading && <Loader />}
      {error && <div className={styles.error}>{error}</div>}
      {!loading && !error && movie && (
        <>
          <h1 className={styles.title}>{movie.title}</h1>
          <MovieImage
            image={movie}
            pathKey="poster_path"
            altKey="title"
            size="w500"
          />
          <div className={styles.info}>
            <div>
              <strong>Release:</strong> {movie.release_date}
            </div>
            <div>
              <strong>Rating:</strong> {movie.vote_average}
            </div>
            <div>
              <strong>Overview:</strong> {movie.overview}
            </div>
          </div>
          <nav className={styles.nav}>
            <Link to="cast" state={{ from: backLinkRef.current }}>
              Cast
            </Link>
            <Link to="reviews" state={{ from: backLinkRef.current }}>
              Reviews
            </Link>
          </nav>
          <Outlet />
        </>
      )}
    </div>
  );
}
