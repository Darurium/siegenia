import React from 'react';

import "./About.scss";
import arrow from "./arrow.png"


const About = () => {
    return (
        <div className="about">
            <div className="about__container">
                <div className="about__wrapper">
                    <h2 className="about__title">Добро пожаловать</h2>
                    <p className="about__choise">Тут вы можете просчитать комплектацию фурнитуры Siegenia</p>
                    <div className="about__arrow">
                        <img src={arrow} alt="стрелка" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;