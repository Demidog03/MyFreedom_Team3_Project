import React from 'react';
import styles from "../App.module.css";
import MyCard from "./MyCard.jsx";
import MyButton from "./UI/MyButton.jsx";

const Section2 = () => {
    return (
        <div className={styles.sevices_item}>
            <div className={styles.sevices_container}>
                <div className={styles.information_about_company}>
                    <h2 className={styles.header}>
                        Мы создаем мобильные приложения для крупных корпораций
                    </h2>
                    <p className={styles.paragraph}>
                        Lorem Ipsum - это текст-"рыба", часто используемый в печати и
                        вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
                        латинице с начала XVI векa.
                    </p>
                </div>
                <div className={styles.card_container}>
                    <MyCard
                        title="Создание сайтов"
                        description='Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.'
                    />
                    <MyCard
                        title="Создание сайтов"
                        description='Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.'
                    />
                    <MyCard
                        title="Создание сайтов"
                        description='Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.'
                    />
                </div>
                <MyButton/>
            </div>
        </div>
    );
};

export default Section2;
