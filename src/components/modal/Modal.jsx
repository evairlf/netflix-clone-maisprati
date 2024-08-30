import { useState, useEffect, useCallback } from 'react';
import Tmdb from '../../../Tmdb';
import "../modal/Modal.css"; // Para os estilos do modal

const Modal = ({ isOpen, onClose, movie }) => {
    const [movieInfo, setMovieInfo] = useState([]);
    const [dateMovie, setDateMovie] = useState(0);

    /*const loadActors = async () => {
        let item;
        if (movie.release_date) {
            item = await Tmdb.getCast(movie.id, 'movie');
            setDateMovie(new Date(movie.release_date).getFullYear());
        } else {
            item = await Tmdb.getCast(movie.id, 'tv');
            setDateMovie(new Date(movie.first_air_date).getFullYear());
        }
        setMovieInfo(item.cast);
    };

    useEffect(() => {
        loadActors();
    }, [movie]); // Adicione 'movie' como dependência para recarregar quando `movie` mudar
    
    useEffect(() => {
    }, [movieInfo]); // Este efeito será executado quando `movieInfo` for atualizado
    */

    const loadActors = useCallback(async () => {
        let item;
        if (movie.release_date) {
            item = await Tmdb.getCast(movie.id, 'movie');
            setDateMovie(new Date(movie.release_date).getFullYear());
        } else {
            item = await Tmdb.getCast(movie.id, 'tv');
            setDateMovie(new Date(movie.first_air_date).getFullYear());
        }
        setMovieInfo(item.cast);
    }, [movie]); // 'movie' é uma dependência de loadActors
    
    useEffect(() => {
        loadActors();
    }, [loadActors]); // 'loadActors' agora é estável e pode ser uma dependência segura

    if (!isOpen){
        return null;
    } 
    
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <span className="close" onClick={onClose}>&times;</span>
                <h2 className='tx-center'>{movie.name || movie.original_name || movie.original_title}</h2>
                <div className='modal--description'>
                    <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="" />
                    <p className='movie--overview'>{movie.overview}</p>
                </div>
                <div className='info--movie'>
                    <p className="average">{movie.vote_average.toFixed(1)}</p>
                    <p>{dateMovie}</p>
                </div>
                <h4>Elenco</h4>
                {movieInfo.length > 0 && movieInfo.slice(0, 5).map((item, index) => (
                    <p key={index}>{item.name}</p>
                ))}
                {/* Adicione mais detalhes conforme necessário */}
            </div>
        </div>
    );
};

export default Modal;
