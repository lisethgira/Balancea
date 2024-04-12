import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import logoDark from "../../assets/images/logo2SinBg.png"
import styles from "./../Register/Register.module.css";

import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

import LockIcon from "@mui/icons-material/Lock";

import ServiceUnavailable from "../Errors/ServiceUnavailable/ServiceUnavailable";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isServiceUnavailable, setIsServiceUnavailable] = useState(false);

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    setIsServiceUnavailable(false);

    axios
      .post(
        "http://localhost:8000/api/register",
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
          profilePictureURL: "profilePictureDefault.jpg",
          cellphone: "",
          location: "",
          postalCode: "",
          // transactions:[],
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        navigate("/dashboard");
        document.location.reload();
      })
      .catch((err) => {
        setErrors(err.response.data.errors);
        console.log(err);
        if (err.response && err.response.status === 503) {
            setIsServiceUnavailable(true); 
          } else {
            setErrors("Error al realizar el registro, por favor intente nuevamente.");
          }
      });
  };

  if (isServiceUnavailable) {
    return <ServiceUnavailable />; 
  }
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={`${styles.box} ${styles.enter}`}>
          <h2 className={styles.title}>Registro</h2>
          <form onSubmit={register} className={styles.form}>
            <div className={styles.control}>
              <PersonIcon className={styles.icon}></PersonIcon>
              {/* <label htmlFor="firstName">First Name</label> */}
              <input
                className={styles.input}
                type="text"
                name="firstName"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Nombre"
              />
            </div>
            {errors.firstName ? (
              <span className={styles.errors}>{errors.firstName.message}</span>
            ) : null}
            <div className={styles.control}>
              {/* <label htmlFor="lastName">Last Name</label> */}
              <PersonIcon className={styles.icon}></PersonIcon>
              <input
                className={styles.input}
                type="text"
                name="lastName"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Apellido"
              />
            </div>
            {errors.lastName ? (
              <span className={styles.errors}>{errors.lastName.message}</span>
            ) : null}
            <div className={styles.control}>
              {/* <label htmlFor="email">E-mail</label> */}
              <EmailIcon className={styles.icon}></EmailIcon>
              <input
                className={styles.input}
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            {errors.email ? (
              <span className={styles.errors}>{errors.email.message}</span>
            ) : null}
            <div className={styles.control}>
              {/* <label htmlFor="password">Password</label> */}
              <LockIcon className={styles.icon}></LockIcon>
              <input
                className={styles.input}
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
              />
            </div>
            {errors.password ? (
              <span className={styles.errors}>{errors.password.message}</span>
            ) : null}
            <div className={styles.control}>
              {/* <label htmlFor="confirmPassword">Confirm Password</label> */}
              <LockIcon className={styles.icon}></LockIcon>
              <input
                className={styles.input}
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirmar Contraseña"
              />
            </div>
            {errors.confirmPassword ? (
              <span className={styles.errors}>
                {errors.confirmPassword.message}
              </span>
            ) : null}
            <input
              type="submit"
              value="Registrar"
              className={`${styles.button} ${styles.submit}`}
            />
          </form>
        </div>
        <div className={`${styles.box} ${styles.announce}`}>
        <img className={styles.menu__logo} src={logoDark}></img>
          <h2 className={styles.title}>Bienvenido!</h2>
          <p className={styles.paragraph}>
          Estamos contentos de verte.
          </p>
          <Link to="/" className={`${styles.button}`}>
            Iniciar Sesión
          </Link>
        </div>
      </div>
      {/* <p>If you have an account</p><Link to="/">Login</Link> */}
    </div>
  );
};

export default Register;
