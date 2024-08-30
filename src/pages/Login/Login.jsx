import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.png";
import Footeer from "../../components/footer/Footer";
import "../Login/Login.css";

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      
      if (e.target.checkValidity()) {
        navigate('/home');
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
                        <input className="input" type="email" placeholder="Email ou número de celular" required></input>
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
                <Footeer/>
            </div>
            
        </div>
        
    );
}

export default Login
