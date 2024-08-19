import React from 'react';
import style from '../../../../../scss/modules/InstallBlock.module.scss'

export const Tab = ({children, typeInstall, setType, type}) => {
    return (
        <div className={style.tab} onClick={() => setType(type)}>
            <div className={style.circleStroke}>
                <div style={{opacity: typeInstall === type ? 1 : 0}}/>
            </div>
            <p>{children}</p>
        </div>
    );
};

