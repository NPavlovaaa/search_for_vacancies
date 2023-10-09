import styles from "./Header.module.scss";
import {Link, NavLink} from "react-router-dom";
import React from "react";
import Icon from "../../assets/icon.png"

const Header = () => {
    return(
        <div className={styles.main_block}>
            <Link to="/">
                <div className={styles.main_block__logo}>
                    <img src={Icon} alt="slider image"/>
                </div>
            </Link>
            <div className={styles.main_block__menu}>
                <ul className={styles.main_block__menu__ul}>
                    <li className={styles.main_block__menu__ul__li}>
                        <NavLink to="/citizens" style={({isActive}) => ({color: isActive ? 'blue' : 'inherit'})}>
                            Гражданам
                        </NavLink>
                    </li>
                    <li className={styles.main_block__menu__ul__li}>
                        <NavLink to="/employers" style={({isActive}) => ({color: isActive ? 'blue' : 'inherit'})}>
                            Работодателям
                        </NavLink>
                    </li>

                </ul>
            </div>

        </div>
    )
}

export default Header;