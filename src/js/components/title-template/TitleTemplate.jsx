import React from 'react';
import style from "../../../scss/modules/TitleTemplate.module.scss";

export const TitleTemplate = ({color, image, title, subtitle}) => {
    return (
        <>
            <div className={`${style.line} ${color && style.white}`}/>
            <h2 className={`title ${style.title} ${color && style.white}`}>{title}</h2>
            {image ? <div className={style.label}>
                <img src={image} alt=""/>
            </div> : <></>}

            <p className={`${style.subtitle} ${color && style.white}`}>{subtitle}</p>
        </>
    );
};
