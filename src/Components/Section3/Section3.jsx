import React from 'react';
import css from './Section3.module.css'
import image from '../../assets/images/section-3-img.png'

const Section3 = () => {
    return (
        <div className={css.container}>
            <div className={css.wrapper}>
                <div className={css.left}>
                    <h1>Высокие стандарты разработки</h1>
                    <p className={css.description}>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является
                        стандартной "рыбой" для текстов на латинице с начала XVI века. стандартной "рыбой" для текстов
                        на
                        латинице с начала XVI века. </p>
                    <a href="" className={css.link}>Подробнее о компании</a>
                </div>
                <img src={image} width={500} height={400}/>
            </div>
        </div>
    );
};

export default Section3;
