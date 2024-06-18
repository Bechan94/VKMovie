import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import MovieDetail from './components/MovieDetails';

const App: React.FC = () => (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/movie/:movieId" element={<MovieDetail />} />
        </Routes>
    </Router>
);

export default App;




