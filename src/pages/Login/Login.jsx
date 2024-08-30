import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.png";
import Footeer from "../../components/footer/Footer";
import "../Login/Login.css";
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const re = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateEmail(email)) {
            navigate('/home');
        } else {
            setEmailError('Por favor, insira um endereço de e-mail válido.');
        }
    };

    const handleChange = (e) => {
        setEmail(e.target.value);

        if (emailError) {
            setEmailError('');
        }
    };

    return (
        <div className="app-container">
            <div className="background-opacity">
                <div className="header">
                    <img src={logo} ></img>
                </div>
                <div className="container">
                    <div className="title">Entrar</div>
                    <form className="form" onSubmit={handleSubmit}>
                        <input
                            className='input'
                            id="email"
                            type="email"
                            placeholder='Email'
                            value={email}
                            onChange={handleChange}
                            required
                        />
                        {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
                        <input className="input" type="password" placeholder="Senha" required></input>
                        <button className="button" type="submit">Entrar</button>
                        <p className="text">OU</p>
                        <button className="button-sign-in">Usar um código de acesso</button>
                        <div className="text-link" to="/home">Esqueceu a senha?</div>
                    </form>
                    <label className="container-checkbox">
                        <input className="checkbox" type="checkbox" name="option1" value="value1"></input>
                        <div className="label">Lembre-se de mim</div>
                    </label>
                    <div className="text-subscribe-now">Novo por aqui? <div className="span-link"><b>Assine agora.</b></div></div>
                    <div className="text-protect">Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <div className="span-more">Saiba mais</div></div>
                </div>
                <Footeer />
            </div>

        </div>

    );
}

export default Login
