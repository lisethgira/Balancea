
import React from "react";
import Lottie from 'react-lottie';
import animationData from '../../../assets/Animation - 1712877973367.json';
import {useNavigate, Link} from "react-router-dom";
import "./AuthenticationError.css"

const AuthenticationError = () => {
    const navigate = useNavigate();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="dashboard">
            <Lottie options={defaultOptions} height={500} width={500} />
            <p>Por favor, inicia sesión</p>
            <Link to="/" className="button">Iniciar Sesión</Link>
        </div>
    );
}

export default AuthenticationError;