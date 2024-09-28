import React from "react";
import styles from "../Components/MyCard.module.css";
import projectImage from "../assets/project.png";

const MyCard = ({ title, description }) => {
  return (
    <div className={styles.card_item}>
      <div className={styles.container}>
        <div className={styles.outer_circle}>
          <div className={styles.inner_circle}>
            <img
              src={projectImage}
              alt=""
              style={{ width: "40px", height: "40px" }}
              className={styles.card_image}
            />
          </div>
        </div>
      </div>

      <div className={styles.MyCard_text}>
        <h3 className={styles.card_title_text}>{title}</h3>
        <p className={styles.card_description_text}>{description}</p>
      </div>
    </div>
  );
};

export default MyCard;
