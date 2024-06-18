import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import MovieCard from '../components/MovieCard';
import { Movie } from '../types/movie';

const FavoritesPage: React.FC = () => {
    const [favorites, setFavorites] = useState<Movie[]>([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    return (
        <Grid container spacing={3}>
            {favorites.map(movie => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={movie.kinopoiskId}>
                    <MovieCard movie={movie} />
                </Grid>
            ))}
        </Grid>
    );
};

export default FavoritesPage;
