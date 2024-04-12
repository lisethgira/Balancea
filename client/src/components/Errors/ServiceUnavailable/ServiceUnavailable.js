import React from "react";
import Lottie from 'react-lottie';
import animationData from '../../../assets/Animation - 1700709719956.json';
import {useNavigate, Link} from "react-router-dom";
import "./ServiceUnavailable.css"

const ServiceUnavailable = () => {
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
            <h1>404 - Página no encontrada</h1>
            <p>Lo sentimos, la página que buscas no existe.</p>
            <Link to="/" className="button">Iniciar Sesión</Link>
        </div>
    );
}

export default ServiceUnavailable;