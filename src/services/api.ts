import axios from 'axios';

const API_URL = 'https://kinopoisk.dev/api/v2.2/films';
const API_KEY = process.env.REACT_APP_API_KEY;

if (!API_KEY) {
    console.error('API key is missing! Please set REACT_APP_API_KEY in your environment variables.');
}

export const fetchMovies = async (page: number, filters: any) => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                page,
                ...filters
            },
            headers: {
                'X-API-KEY': API_KEY,
            }
        });
        console.log('API response:', response.data);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            console.error('Network Error:', error.message);
            if (error.response) {
                console.error('Axios error response data:', error.response.data);
            }
        } else if (error instanceof Error) {
            console.error('Error:', error.message);
        } else {
            console.error('Unexpected error:', error);
        }
        throw error;
    }
};

export const fetchMovieDetails = async (movieId: number) => {
    try {
        const response = await axios.get(`${API_URL}/${movieId}`, {
            headers: {
                'X-API-KEY': API_KEY,
            }
        });
        console.log('API response:', response.data);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            console.error('Network Error:', error.message);
            if (error.response) {
                console.error('Axios error response data:', error.response.data);
            }
        } else if (error instanceof Error) {
            console.error('Error:', error.message);
        } else {
            console.error('Unexpected error:', error);
        }
        throw error;
    }
};

