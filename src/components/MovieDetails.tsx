import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../services/api';
import { MovieDetails } from '../types/movie';
import { Box, Typography, CardMedia } from '@mui/material';

const MovieDetail: React.FC = () => {
    const { movieId } = useParams<{ movieId: string }>();
    const [movie, setMovie] = useState<MovieDetails | null>(null);

    useEffect(() => {
        const getMovieDetails = async () => {
            if (movieId) {
                const data = await fetchMovieDetails(parseInt(movieId));
                setMovie(data);
            }
        };
        getMovieDetails();
    }, [movieId]);

    if (!movie) return <div>Loading...</div>;

    return (
        <Box>
            <CardMedia
                component="img"
                alt={movie.nameRu}
                height="500"
                image={movie.posterUrl}
                title={movie.nameRu}
            />
            <Typography variant="h3">{movie.nameRu}</Typography>
            <Typography variant="body1">{movie.description}</Typography>
            <Typography variant="body2">Rating: {movie.ratingKinopoisk}</Typography>
            <Typography variant="body2">Release Date: {movie.year}</Typography>
            <Typography variant="body2">
                Genres: {movie.genres.map(genre => genre.genre).join(', ')}
            </Typography>
        </Box>
    );
};

export default MovieDetail;
