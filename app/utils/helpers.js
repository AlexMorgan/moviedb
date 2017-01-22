import axios from 'axios';

const API_ID = '306bd1f9dda87b11475c98f9d47e3862'

export function getMoviesList(page) {
    const API_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_ID}&page=${page}`

    return axios.get(API_URL)
        .then((response) => response.data.results)
        .catch((error) => console.warn('Error in getMoviesList:', error));
}

function getMovieDetails(id) {
    const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_ID}`

    return axios.get(API_URL)
        .then((response) => response.data)
        .catch((error) => console.warn('Error in getMovieDetails:', error));
}

function getMovieReviews(id) {
    const API_URL = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_ID}&language=en-US&page=1`

    return axios.get(API_URL)
        .then((response) => response.data)
        .catch((error) => console.warn('Error in getMovieReviews:', error));
}

export async function movieInfo(id) {
    const movie = getMovieDetails(id)
    const reviews = getMovieReviews(id)
    return await Promise.all([movie, reviews])
}
