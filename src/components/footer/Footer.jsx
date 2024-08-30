import React from 'react';
import '../footer/Footer.css'; // Certifique-se de que o caminho está correto

const Footer = () => {
    return (
        <footer>
            <hr className='horizontal-row' />
            <div className="container-footer">
                <div className="footer-wrapper">
                    <ul className="nav-footer">
                        <li className="nav-li"><a href="#" className="nav-footer-link">Perguntas Frequentes</a></li>
                        <li className="nav-li"><a href="#" className="nav-footer-link">Central de Ajuda</a></li>
                        <li className="nav-li"><a href="#" className="nav-footer-link">Termos de Uso</a></li>
                        <li className="nav-li"><a href="#" className="nav-footer-link">Privacidade</a></li>
                        <li className="nav-li"><a href="#" className="nav-footer-link">Preferência de cookies</a></li>
                        <li className="nav-li"><a href="#" className="nav-footer-link">Informações corporativas</a></li>
                    </ul>
                </div>

                <div className='copryght'>
                    <p>Todos direitos reservados a &copy;<strong>Netflix</strong></p>
                    <p>Dados tirados do site <a href="https://www.themoviedb.org/">The MovieDB</a></p>
                    <p className="call">Dúvidas? Ligue 4002 8922</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
