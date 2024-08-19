import React from 'react';
import style from '../../../../../scss/modules/InstallBlock.module.scss'

export const InstallInstructionItem = ({image, index, description,optional}) => {
    return (
        <li className={style.instructionElement}>
            <div className={style.instructionImageContainer}>
                <div className={style.index}>
                    <p>{index}</p>
                </div>
                <div className={style.image}>
                    <img src={image} alt=""/>
                </div>
            </div>
            <p className={style.description} dangerouslySetInnerHTML={{ __html: description }}/>
            {optional && <p className={`${style.description} ${style.optional}`}>{optional}</p>}
        </li>

    );
};
