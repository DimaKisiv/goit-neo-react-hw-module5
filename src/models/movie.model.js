export class Movie {
  constructor(data) {
    this.backdrop_path = data.backdrop_path;
    this.id = data.id;
    this.title = data.title;
    this.original_title = data.original_title;
    this.overview = data.overview;
    this.poster_path = data.poster_path;
    this.media_type = data.media_type;
    this.adult = data.adult;
    this.original_language = data.original_language;
    this.genre_ids = data.genre_ids;
    this.popularity = data.popularity;
    this.release_date = data.release_date;
    this.video = data.video;
    this.vote_average = data.vote_average;
    this.vote_count = data.vote_count;
  }
}
