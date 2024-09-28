import React from 'react';
import css from './Footer.module.css';
import rightArrow from '../../assets/images/right-arrow.svg';
import FooterNavEl from "./FooterNavEl.jsx";

const data = [
    {
        title: 'Контактная информация',
        link: ['test@test.ru', '+8 777 555 66 99', 'Москва, Бульвар Ленина 33']
    },
    {
        title: 'Основные ссылки',
        link: ['Главная', 'Наши проекты', 'Наши услуги', 'Контакты']
    },
    {
        title: 'Наши проекты',
        link: ['РосНано', 'Сколково', 'Проект “Восток”', 'ТЭЦ Калининграда']
    },
    {
        title: 'Социальные сети',
        link: ['VK.com', 'Instagram', 'Facebook', 'Twitter']
    },
]

const Footer = () => {
    return (
        <footer className={css.container}>
            <div className={css.wrapper}>
                {data.map(d => (
                    <FooterNavEl title={d.title} links={d.link}/>
                ))}
                <div className={css.line}></div>
                <p className={css.caption}>(с) 2019. Все права защищены.</p>
            </div>
        </footer>
    );
};

export default Footer;
