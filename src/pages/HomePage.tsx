// HomePage.tsx
import React, { useState } from 'react';
import Filters from '../components/Filteres';
import MovieList from '../components/MovieList';

const HomePage: React.FC = () => {
    const [filters, setFilters] = useState({
        genres: '',
        ratingFrom: 0,
        ratingTo: 10,
        yearFrom: 1990,
        yearTo: new Date().getFullYear()
    });

    return (
        <div>
            <Filters onFilterChange={setFilters} />
            <MovieList filters={filters} />
        </div>
    );
};

export default HomePage;


