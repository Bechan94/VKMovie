import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Movie } from '../types/movie';

interface MovieCardProps {
    movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => (
    <Card>
        {movie.posterUrl ? (
            <CardMedia
                component="img"
                alt={movie.nameRu}
                height="300"
                image={movie.posterUrl}
                title={movie.nameRu}
            />
        ) : (
            <CardMedia
                component="img"
                alt="No Image Available"
                height="300"
                image="https://via.placeholder.com/300x450?text=No+Image"
                title="No Image Available"
            />
        )}
        <CardContent>
            <Typography variant="h5" component="div">
                {movie.nameRu}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {movie.year}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Rating: {movie.ratingKinopoisk}
            </Typography>
        </CardContent>
    </Card>
);

export default MovieCard;
