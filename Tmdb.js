import { scryRenderedComponentsWithType } from "react-dom/test-utils";

const API_KEY = 'e575fee99ef43d31d36b278d002a9290';
const API_BASE = 'https://api.themoviedb.org/3';
const API_URL = `https://api.themoviedb.org/3/search/tv?api_key=`;
const API_URL_SEARCH = 'https://api.themoviedb.org/3/search/multi?api_key=';
//${API_KEY}&query=${query}


const basicFecht = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFecht(`/discover/tv?language=pt-BR&with_watch_providers=8&watch_region=BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFecht(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await basicFecht(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFecht(`/discover/movie?with_genres=28?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'adventure',
                title: 'Aventura',
                items: await basicFecht(`/discover/movie?with_genres=12?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFecht(`/discover/movie?with_genres=27?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFecht(`/discover/movie?with_genres=10749?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentário',
                items: await basicFecht(`/discover/movie?with_genres=99?language=pt-BR&api_key=${API_KEY}`)
            }
        ]

    },
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if (movieId) {
            switch (type) {
                case 'movie':
                    info = await basicFecht(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                    break;
                case 'tv':
                    info = await basicFecht(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                    break;
                default:
                    info = null;
                    break;
            }
        }
        return info;
    },
    getCast: async (movieId, type) => {
        let info = {};
        if (movieId) {
            switch (type) {
                case 'movie':
                    info = await basicFecht(`/movie/${movieId}/credits?api_key=${API_KEY}`);
                    break;
                case 'tv':
                    info = await basicFecht(`/tv/${movieId}/credits?api_key=${API_KEY}`);
                    break;
                default:
                    info = null;
                    break;
            }
        }
        return info;
    },
    getMoviesSearchByName: async (query) => {
        const req = await fetch(`${API_URL}${API_KEY}&query=${query}`);
        const json = await req.json();
        return json;
    }
}