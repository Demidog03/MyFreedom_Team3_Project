import React from 'react';
import css from "./Footer.module.css";
import rightArrow from "../../assets/images/right-arrow.svg";

const FooterNavEl = ({ title, links }) => {
    return (
        <div className={css.navEl}>
            <h1>{title}</h1>
            {links.map(l => (
                <p className={css.navLink}><img src={rightArrow}/><span>{l}</span></p>
            ))}
        </div>
    );
};

export default FooterNavEl;
