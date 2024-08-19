import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import style from "@/scss/modules/BroadcastsBlock.module.scss";

export const SliderContainer = ({broadcastImage, config}) => {
    return (
        <Slider className={style.slider} {...config} >
            {broadcastImage.map((item, index) => (
                <div key={index} className={style.imageItem}>
                    <img src={item} alt=""/>
                </div>
            ))}
        </Slider>
    );
};

