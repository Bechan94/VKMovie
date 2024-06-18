// Filters.tsx
import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

interface FiltersProps {
    onFilterChange: (filters: {
        genres: string;
        ratingFrom: number;
        ratingTo: number;
        yearFrom: number;
        yearTo: number;
    }) => void;
}

const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
    const [genre, setGenre] = useState<string>('');
    const [ratingRange, setRatingRange] = useState<[number, number]>([0, 10]);
    const [yearRange, setYearRange] = useState<[number, number]>([1990, new Date().getFullYear()]);

    const handleApplyFilters = () => {
        onFilterChange({
            genres: genre,
            ratingFrom: ratingRange[0],
            ratingTo: ratingRange[1],
            yearFrom: yearRange[0],
            yearTo: yearRange[1]
        });
    };

    return (
        <Box display="flex" flexDirection="column" gap={2} mb={3}>
            <TextField
                label="Genres"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                placeholder="Comma separated genres"
                variant="outlined"
                fullWidth
            />
            <TextField
                label="Rating Range"
                value={`${ratingRange[0]},${ratingRange[1]}`}
                onChange={(e) => {
                    const values = e.target.value.split(',').map(Number);
                    if (values.length === 2) {
                        setRatingRange([values[0], values[1]]);
                    }
                }}
                placeholder="Min,Max"
                variant="outlined"
                fullWidth
            />
            <TextField
                label="Year Range"
                value={`${yearRange[0]},${yearRange[1]}`}
                onChange={(e) => {
                    const values = e.target.value.split(',').map(Number);
                    if (values.length === 2) {
                        setYearRange([values[0], values[1]]);
                    }
                }}
                placeholder="1990,2024"
                variant="outlined"
                fullWidth
            />
            <Button variant="contained" color="primary" onClick={handleApplyFilters}>
                Apply Filters
            </Button>
        </Box>
    );
};

export default Filters;
