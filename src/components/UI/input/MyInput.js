import React from 'react';
import "./MyInput.scss"

const MyInput = (props) => {
    return (
        <input {...props} className="my-input" />
    );
};

export default MyInput;