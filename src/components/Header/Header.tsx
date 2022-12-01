import React from "react";
import style from './Header.module.scss'
import imgLogo from '../../utils/img/logo.png'


const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.imgPosition}>
                <img  className={style.logo} src={imgLogo} />
            </div>
            
        </div>
    )
}

export default Header