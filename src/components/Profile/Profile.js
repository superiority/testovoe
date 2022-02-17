import React from 'react';
import ProfileImg from "./ProfileImg";

const Profile = () => {
    return (
        <div className='Profile'>
            <h2 className='Profile-title'>1/8</h2>
            <ProfileImg/>
            <p className='Profile-button'>
                <button className='button'>
                    Искать промокод
                    <img className='Profile-arrow' src="/profile-img/Arrow.png" alt="Arrow"/>
                </button>
            </p>
        </div>
    );
};

export default Profile;