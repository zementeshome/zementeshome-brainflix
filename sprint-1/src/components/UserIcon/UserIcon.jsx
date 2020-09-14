import React from 'react';
import userImage from './../../assets/Images/Mohan-muruge.jpg'


function UserIcon() {
    return <img className ="header__user-icon" src={userImage} alt="user profile circle" />;
}

export default UserIcon