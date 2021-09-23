import React from 'react';
import "./MyButton.scss";


const MyButton = (props) => {
    return (
        <button {...props} className="my-button">{props.name}</button>
    );
};

export default MyButton;