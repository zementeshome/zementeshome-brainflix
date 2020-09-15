import React from 'react';
import uploadIcon from './../../assets/Icons/SVG/Icon-upload.svg'


function UploadButton() {
    return (
        <div>
            <button className="app__header-button" type="button">UPLOAD</button>
            <img className="app__header-buttonicon"src={uploadIcon} alt="plus sign" />
        </div>
    )
}

export default UploadButton