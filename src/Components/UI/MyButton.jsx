import React from "react";
import styles from "../UI/MyButton.module.css";

const MyButton = () => {
  return (
    <div className={styles.button}>
      <button className={styles.first_screen_button}>Все услуги</button>
    </div>
  );
};

export default MyButton;
