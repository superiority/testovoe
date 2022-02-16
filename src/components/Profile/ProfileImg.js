import React from 'react';
import '../../style/ProfileImg.css';

const ProfileImg = () => {
    return (
        <div>
            <p className='Profile-Garri'>
                <img src="/profile-img/Garri.png" alt="Garri"/>
            </p>
            <h3 className='Profile-text'>
                Для примера мы показали вам его лицо.  В первой серии он прячется в подвале
                за мониторами, и пусть борода не собьёт вас с толку. Найдите героя и нажмите  на паузу —
                ему не терпится отдать вам промокод.
            </h3>
        </div>
    );
};

export default ProfileImg;