import React from 'react';
import style from "@/scss/modules/BroadcastsBlock.module.scss";

export const GridContainer = ({broadcastImage}) => {
    return (
        <div className={style.gridContainer}>
            {broadcastImage.map((item, index) => (
                <div key={index} className={style.imageItem}>
                    <img src={item} alt=""/>
                </div>
            ))}
        </div>
    );
};
