import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import styles from "./../Login/Login.module.css";

import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import logoDark from "../../assets/images/logo2SinBg.png"

import ServiceUnavailable from "../Errors/ServiceUnavailable/ServiceUnavailable";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [isServiceUnavailable, setIsServiceUnavailable] = useState(false);

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    setIsServiceUnavailable(false);

    axios
      .post(
        "http://localhost:8000/api/login",
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      )

      .then((res) => {
        console.log(res);
        if (res.data.error) {
          setErrors(res.data.message);
        } else {
          navigate("/dashboard");
          document.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response && err.response.status === 503) {
          setIsServiceUnavailable(true); 
        } else {
          setErrors("Error al intentar iniciar sesión, por favor intente nuevamente.");
        }
      });
  };

  if (isServiceUnavailable) {
    return <ServiceUnavailable />; 
  }

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={`${styles.box} ${styles.announce}`}>
        <img className={styles.menu__logo} src={logoDark}></img>
          <h2 className={styles.title}>Hola!</h2>
          <p className={styles.paragraph}>
            Registra tus datos para acceder al sistema.
          </p>
          <Link to="/register" className={`${styles.button}`}>
            REGISTRARSE
          </Link>
        </div>
        <div className={`${styles.box} ${styles.enter}`}>
          <h2 className={styles.title}>Iniciar Sesión</h2>
          <form onSubmit={login} className={styles.form}>
            <div className={styles.control}>
              <EmailIcon className={styles.icon} />
              <input
                className={styles.input}
                type="email"
                name="emailLogin"
                id="emailLogin"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* {errors.email !== "" ? <span>{errors.email}</span> : null} */}
            <div className={styles.control}>
              <LockIcon className={styles.icon} />
              <input
                className={styles.input}
                type="password"
                name="passwordLogin"
                id="passwordLogin"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* {errors.password !== "" ? <span>{errors.password}</span> : null} */}
            {errors !== "" ? (
              <span className={styles.errors}>{errors}</span>
            ) : null}
            <input
              type="submit"
              value="INICIAR SESIÓN"
              className={`${styles.button} ${styles.submit}`}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
