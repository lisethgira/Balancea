import {Link} from "react-router-dom";
import React from "react";

//Components
import ButtonLogout from "./ButtonLogOut/ButtonLogout";

//Styles
import styles from "./../menu/Menu.module.css"

//Assets
import logoLight from "../../assets/images/logoSinBg.png"
import logoDark from "../../assets/images/logo2SinBg.png"

//Material Icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import DiscountIcon from '@mui/icons-material/Discount';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';


import { useContext } from "react";
import ThemeContext from './../../context/ThemeContext';

const Menu = () => {

    const { theme } = useContext(ThemeContext);
    return (
        
        <div className={styles.menu}>
            <div className={styles.menu__brand}>
                <img className={styles.menu__logo} src={theme==="light"?logoLight:logoDark}></img>
                {/* <h3 className={styles.menu__title}>Balancea</h3>  */}
            </div>
            
            <ul className={styles.menu__list}>
                <li className={styles.menu__item}>
                    <DashboardIcon className={styles.menu__icon}></DashboardIcon>
                    {/* <img className={styles.menu__icon} src={DashboardIcon}></img> fontSize="medium*/}
                    <Link to="/dashboard" className={styles.menu__link}>Inicio</Link>
                </li>
                <li className={styles.menu__item}>
                    <ReceiptIcon className={styles.menu__icon}></ReceiptIcon>
                    <Link to="/transactions" className={styles.menu__link}>Transacciones</Link>
                </li>
                <li className={styles.menu__item}>
                    <DiscountIcon className={styles.menu__icon}></DiscountIcon>
                    <Link to="/categories" className={styles.menu__link}>Categorías</Link>
                    </li>
                {/* <li className={styles.menu__item}>
                    <EqualizerIcon className={styles.menu__icon}></EqualizerIcon>
                    <a href="#" className={styles.menu__link}>Reportes</a>
                </li> */}
                <li className={styles.menu__item}>
                    <PersonIcon className={styles.menu__icon}></PersonIcon>
                    <Link to="/profile" className={styles.menu__link}>Perfil</Link>
                </li>
                {/* <li className={styles.menu__item}>
                    <SettingsIcon className={styles.menu__icon}></SettingsIcon>
                    <a href="#" className={styles.menu__link}>Configuración</a>
                </li> */}
            </ul>
            <ButtonLogout></ButtonLogout>
        </div>
    )
}

export default Menu;