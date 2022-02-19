import React from 'react';
import '../../style/LeftsideMenu.css';

const LeftsideMenu = () => {
    return (
        <div>
            <p className='menu'>
                <img src="/profile-img/Menu.png" alt="menu"/>
            </p>
            <p>
                <h3 className='menu__left'>03 Подсказки</h3>
                <img className='menu-img__left' src="/profile-img/Path 3.png" alt="Left"/>
            </p>
            <p className='left-img'>
                <img src="/profile-img/01.png" alt="01"/>
            </p>
            <p className='left-img__2'>
                <img src="/profile-img/01.png" alt="01"/>
            </p>
            <p className='left-img__3'>
                <img src="/profile-img/01.png" alt="01"/>
            </p>
            <p>
            <button className='menu-arrow__text'>
                Скрольте вниз
            </button>
                <img className='menu-arrow__left' src="/profile-img/Arrow2.png" alt="Arrow"/>
            </p>
        </div>
    );
};

export default LeftsideMenu;