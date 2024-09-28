import React from 'react';
import css from './Section4.module.css'
import Section4Card from "./Section4Card.jsx";

const Section4 = () => {
    return (
        <div className={css.container}>
            <div className={css.wrapper}>
                <div className={css.top}>
                    <h1>Наши работы, на которых
                        мы специализируемся</h1>
                    <button className={css.button}>Все услуги</button>
                </div>
                <div className={css.cardContainer}>
                    <div><Section4Card/></div>
                    <div><Section4Card/></div>
                    <div><Section4Card/></div>
                </div>
            </div>
        </div>
    );
};

export default Section4;
