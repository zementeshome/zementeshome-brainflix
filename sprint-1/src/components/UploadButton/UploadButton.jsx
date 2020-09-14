import React from 'react';
import uploadIcon from './../../assets/Icons/SVG/Icon-upload.svg'


function UploadButton() {
    return (
        <div>
            <button className="header__button" type="button">UPLOAD</button>
            <img className="header__button-icon"src={uploadIcon} alt="plus sign" />
        </div>
    )
}

export default UploadButton