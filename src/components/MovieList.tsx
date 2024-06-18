import React, { useEffect, useState } from 'react';
import { Grid, Pagination } from '@mui/material';
import { fetchMovies } from '../services/api';
import MovieCard from './MovieCard';
import { Movie, ApiResponse } from '../types/movie';

interface MovieListProps {
    filters: {
        genres?: string;
        ratingFrom?: number;
        ratingTo?: number;
        yearFrom?: number;
        yearTo?: number;
    };
}

const MovieList: React.FC<MovieListProps> = ({ filters }) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const data: ApiResponse = await fetchMovies(page, filters);
                console.log('Full API response:', data);
                if (data && data.items) {
                    setMovies(data.items);
                    const total = Math.ceil((data.total || 0) / 50);
                    setTotalPages(total > 0 ? total : 1);
                } else {
                    setMovies([]);
                    setTotalPages(1);
                }
            } catch (error) {
                console.error('Error fetching movies:', error);
                setMovies([]);
                setTotalPages(1);
            }
        };
        getMovies();
    }, [page, filters]);

    return (
        <div>
            <Grid container spacing={3}>
                {movies.length > 0 ? (
                    movies.map(movie => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={movie.kinopoiskId}>
                            <MovieCard movie={movie} />
                        </Grid>
                    ))
                ) : (
                    <p style={{marginLeft:25}}>No movies found</p>
                )}
            </Grid>
            <Pagination
                count={totalPages}
                page={page}
                onChange={(_, value) => setPage(value)}
                color="primary"
            />
        </div>
    );
};

export default MovieList;






