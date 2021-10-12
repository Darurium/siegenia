import React from 'react';

import "./AddList.scss";
import arrow_down from "./arrow_down.png";


const AddList = ({title}) => {
    return (
        <div className="addList">
            <h2 className="addList__title">{title}</h2>
            <h2 className="addList__descr">Выберите параметры и нажмите "Добавить"</h2>
            <div className="addList__arrow_down">
                <img src={arrow_down} alt="Стрелка вниз" />
            </div>
        </div>
    );
};

export default AddList;