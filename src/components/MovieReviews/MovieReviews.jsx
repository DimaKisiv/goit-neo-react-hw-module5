import { useParams } from "react-router";
import { useEffect, useState } from "react";
import movieApiService from "../../services/movie-api.service";
import { Loader } from "../Loader/Loader";
import styles from "./MovieReviews.module.css";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchReviews() {
      setLoading(true);
      setError(null);
      try {
        const data = await movieApiService.getMovieReviews(movieId);
        setReviews(data.results || []);
      } catch {
        setError("Failed to fetch reviews.");
      } finally {
        setLoading(false);
      }
    }
    fetchReviews();
  }, [movieId]);

  return (
    <div className={styles.reviewsWrapper}>
      <h3>Reviews</h3>
      {loading && <Loader />}
      {error && <div className={styles.error}>{error}</div>}
      {!loading && !error && (
        reviews.length === 0 ? (
          <div>No reviews found.</div>
        ) : (
          <ul className={styles.reviewsList}>
            {reviews.map((review) => (
              <li key={review.id} className={styles.reviewItem}>
                <strong>{review.author}</strong>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        )
      )}
    </div>
  );
}
