import React from 'react';
import LeftsideMenu from "../Menu/LeftsideMenu";

const Header = () => {
    return (
        <div className='Header'>
            <p className='logo'>
                <img  src="/header-img/KinoPoisk.png" alt="kino"/>
            </p>
            <LeftsideMenu />
            <h1 className='Header-text'>ОНИ ДОЛЖНЫ ЧТО-ТО ЗНАТЬ</h1>
        </div>
    );
};

export default Header;