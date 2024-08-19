import React, { useEffect, useState } from 'react';
import style from '../../../scss/modules/BroadcastsBlock.module.scss';
import { TitleTemplate } from '../title-template/TitleTemplate';
import { broadcastImage } from '../../data/broadcast-image';
import { sliderConfig } from '../../data/sliderConfig';
import { GridContainer } from '@/js/components/broadcasts-block/grid-container/GridContainer';
import { SliderContainer } from '@/js/components/broadcasts-block/slider-container/SliderContainer';

export const BroadcastsBlock = ({ broadcastRef }) => {
  const [windowWeight, setWindowWight] = useState(window.innerWidth);
  const [adaptiveFlag, setAdaptiveFlag] = useState(false);

  useEffect(() => {
    if (windowWeight <= 992) {
      setAdaptiveFlag(true);
    }
  }, []);

  const actualDate = new Date().getFullYear();

  return (
    <section className={style.main} ref={broadcastRef}>
      <TitleTemplate
        color={true}
        title={'Все самое интересное!'}
        subtitle={
          'Смотрите прямой эфир, фильмы, трансляции и новые выпуски программ первыми'
        }
      />
      {!adaptiveFlag ? (
        <GridContainer broadcastImage={broadcastImage} />
      ) : (
        <SliderContainer broadcastImage={broadcastImage} config={sliderConfig} />
      )}
      <a
        href="#"
        // download={''}
        className={`button ${style.button}`}
      >
Установить
      </a>
      <p className={style.description}>{`© ${actualDate} ОАО «ТРК ВС РФ «ЗВЕЗДА»`}</p>
      <a
        href="https://tvzvezda.ru/about/202311221354-42QDz.html"
        target="_blank"
        className={style.politics}
      >
        Политика конфиденциальности
      </a>
    </section>
  );
};
