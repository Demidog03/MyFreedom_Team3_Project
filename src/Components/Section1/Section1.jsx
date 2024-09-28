import React from 'react';
import css from './Section1.module.css'

const Section1 = () => {
    return (
        <div className={css.container}>
            <div className={css.nav}>
                <a>Главная</a>
                <a>Наши проекты</a>
                <a>Услуги</a>
                <a>Новости</a>
                <a>Контакты</a>
            </div>
            <p>Передовая IT студия</p>
            <h1 className={css.heading}>Мы создаем легкие решения сложных задач и проблем</h1>
            <button className={css.button}>Наши проекты</button>
        </div>
    );
};

export default Section1;
