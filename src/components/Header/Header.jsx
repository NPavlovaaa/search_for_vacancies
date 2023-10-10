import styles from "./Header.module.scss";
import {Link, NavLink} from "react-router-dom";
import React from "react";
import Icon from "../../assets/icon.png"
import LoginIcon from "../Icons/LoginIcon";

const Header = () => {
    return(
        <div className={styles.main_block}>
            <Link to="/">
                <div className={styles.main_block__logo}>
                    <img src={Icon} height={60} alt="slider image"/>
                </div>
            </Link>
            <div className={styles.main_block__menu}>
                <ul className={styles.main_block__menu__ul}>
                    <li className={styles.main_block__menu__ul__li}>
                        <NavLink to="/vacancies" style={({isActive}) => ({color: isActive ? '#0D6EFD' : 'inherit'})}>
                            <p>Вакансии</p>
                        </NavLink>
                    </li>
                    <li className={styles.main_block__menu__ul__li}>
                        <NavLink to="/employers" style={({isActive}) => ({color: isActive ? '#0D6EFD' : 'inherit'})}>
                            <p>Работодателям</p>
                        </NavLink>
                    </li>
                    <li className={styles.main_block__menu__ul__li}>
                        <NavLink to="/service" style={({isActive}) => ({color: isActive ? '#0D6EFD' : 'inherit'})}>
                            <p>Служба занятости</p>
                        </NavLink>
                    </li>
                    <li className={styles.main_block__menu__ul__li}>
                        <NavLink to="/news" style={({isActive}) => ({color: isActive ? '#0D6EFD' : 'inherit'})}>
                            <p>Новости</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className={styles.main_block__account}>
                <LoginIcon width={30} height={30}/>
                <p>Войти</p>
            </div>
        </div>
    )
}

export default Header;