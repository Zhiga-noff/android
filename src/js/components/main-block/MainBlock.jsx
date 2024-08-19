import React from 'react';
import style from '../../../scss/modules/MainBlock.module.scss';

import logo from '../../../img/logo-zvezda.svg';
import TVApp from '../../../img/tvzprograms_poster.png';
import { MouseIcon } from '../mouse-icon/MouseIcon';
import { smoothScroll } from '@/js/modules/smoothScroll';

export const MainBlock = ({ installBlockRef }) => {
  return (
    <section className={style.main}>
      <header>
        <a href="https://tvzvezda.ru">
          <img src={logo} alt="Звезда" />
        </a>
      </header>

      <div className={style.row}>
        <div className={style.containerLeft}>
          {/*<h1 className={`title ${style.title}`}>*/}
          {/*    Приложение «Звезда» для СМАРТ ТВ*/}
          {/*</h1>*/}
            <h1 className={`title ${style.description}`}>Прямой эфир, программы, новости, документальные циклы и фильмы, стримы ведущих телеканала "ЗВЕЗДА" в вашем смартфоне</h1>
          <p className={style.subtitle}>
              Приложение для смартфонов на базе операционной системы Android
          </p>
          <a className={`button`} href={'#'} /*onClick={() => smoothScroll(installBlockRef)}*/>
              Установить
          </a>
        </div>
        <div className={style.image}>
          <img src={TVApp} alt="Приложение для Smart-TV, Звезда" />
        </div>
      </div>

      <MouseIcon color={'#ffffff'} reference={installBlockRef} />
    </section>
  );
};
