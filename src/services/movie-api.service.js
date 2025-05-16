import axios from 'axios';
import { Movie } from '../models/movie.model';
import { MovieCredits } from '../models/movie-credits.model';

const API_URL = 'https://api.themoviedb.org/3';
const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTE5OGU5ZjU5YTgwZTU3YTdlOGNiNWVhYWZkNmYyOCIsIm5iZiI6MTc0NzQwNjY2MC4zMzcsInN1YiI6IjY4Mjc0ZjQ0NGI0OTUzN2ZkMmExN2FhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tNBhc8Hry_R7nWq0ZCxsNYILsIQFrcKI8XypByMI5DM'; 

class MovieApiService {
    constructor() {
        this.axiosInstance = axios.create({
            baseURL: API_URL,
            headers: {
                Authorization: `Bearer ${API_TOKEN}`,
            },
        });
    }

    async getTrendingMovies() {
        const res = await this.axiosInstance.get('/trending/movie/day');
        return res.data.results.map(movie => new Movie(movie));
    }

    async searchMovies(query) {
        const res = await this.axiosInstance.get('/search/movie', { params: { query } });
        return res.data.results.map(movie => new Movie(movie));
    }

    async getMovieDetails(movieId) {
        const res = await this.axiosInstance.get(`/movie/${movieId}`);
        return new Movie(res.data);
    }

    async getMovieCredits(movieId) {
        const res = await this.axiosInstance.get(`/movie/${movieId}/credits`);
        return new MovieCredits(res.data);
    }

    async getMovieReviews(movieId) {
        const res = await this.axiosInstance.get(`/movie/${movieId}/reviews`);
        return res.data;
    }
}

const movieApiService = new MovieApiService();
export default movieApiService;