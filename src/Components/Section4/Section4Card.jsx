import React from 'react';
import img from '../../assets/images/section-4-img.png'
import css from './Section4.module.css';

const Section4Card = () => {
    return (
        <div className={css.card}>
            <img src={img} alt="Section4" />
            <p style={{ fontWeight: 'bold' }}><span style={{ color: '#4985FF' }}>01.</span> Исследование и упаковка</p>
            <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
            <a href="" style={{ color: '#4985FF' }}>Подробнее</a>
        </div>
    );
};

export default Section4Card;
