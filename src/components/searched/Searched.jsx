import React, { useState } from "react";
import Modal from "../modal/Modal";
import '../searched/Searched.css';

export default ({ title, items }) => {

    //modal
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (item) => {
        setSelectedMovie(item);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedMovie(null);
    };

    return (
        <div className="searchedRow">
            <div className="movieRow--listarea">
                <div className="movieRow--list"
                    >
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} key={item.id} className="movie-item" onClick={() => openModal(item)}></img>
                        </div>
                    ))}
                </div>
            
            </div>

            <Modal 
                isOpen={isModalOpen} 
                onClose={closeModal} 
                movie={selectedMovie} 
            />
        </div>
    );
}