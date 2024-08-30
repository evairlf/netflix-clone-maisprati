import { useState, useEffect } from 'react';
import Tmdb from '../../../Tmdb';

const SearchBar = ({ onResponse }) => {
    const [query, setQuery] = useState('');

    useEffect(() => {
        const searchMovies = async () => {
            if(query !== ''){
                let response = await Tmdb.getMoviesSearchByName(query);
                console.log(response)
                onResponse(response.results);
            }else{
                onResponse([]);
            }
        }
    

        const delayDebounceFn = setTimeout(() => {
            searchMovies();
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [query]);

    return (
        <input 
            type='text'
            placeholder='Search'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className='search-bar'
        />
    )
}

export default SearchBar