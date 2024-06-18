export interface Movie {
  kinopoiskId: number;
  nameRu: string;
  year: number;
  ratingKinopoisk: number;
  posterUrl: string;
  genres: { genre: string }[];
}

export interface ApiResponse {
  items: Movie[];
  total: number;
}




export interface MovieDetails extends Movie {
  description: string;
  filmLength: number;
  countries: { country: string }[];
}
