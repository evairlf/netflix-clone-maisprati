import React from "react";
import Footer from "../../components/footer/Footer"
import "../SearchPage/SearchPage.css";

export default () => {
  
    return (
        <div className='tudinho'>
       
  
        <ul>
          {results.map((show) => (
            <li key={show.id} onClick={() => openModal(show)}>
              {show.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w200${show.poster_path}`}
                  alt={show.name}
                  style={{ cursor: 'pointer' }}
                />
              )}
            </li>
          ))}
        </ul>
  
     
        
      </div>
    );
};

const Modal = ({ show, onClose }) => {
    return (
      <div className='modal'>
        <div className='modal-content'>
          <span className='close' onClick={onClose}>&times;</span>
          {show.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
              alt={show.name}
            />
          )}
          <p>{show.overview}</p>
          <p><strong>Data de Lançamento:</strong> {show.first_air_date}</p>
        </div>
      </div>
    );
  };