import React, { useState } from 'react';
import style from '../../../scss/modules/InstallBlock.module.scss';
import label from '../../../img/star-logo.svg';
import { MouseIcon } from '../mouse-icon/MouseIcon';
import { InstallInstructionItem, Tab } from './components';
import { imageInstruction } from '../../data/instruction-images';
import { TitleTemplate } from '../title-template/TitleTemplate';

export const InstallBlock = ({ installBlockRef, broadcastRef }) => {
  const [typeInstall, setTypeInstall] = useState('browser');

  return (
    <section className={style.main} ref={installBlockRef}>
      <TitleTemplate
        color={false}
        image={label}
        title={'Простая установка'}
        subtitle={
          'Приложение «Звезда» доступно бесплатно в магазине приложений вашего смартфона,  в RuStore, AppGallery (Huawei), GetApps (Xiaomi). Если вы не нашли приложение в магазине вашего смартфона,  то его можно установить вручную.'
        }
      />

      <nav className={style.tabsContainer}>
        <Tab typeInstall={typeInstall} setType={setTypeInstall} type={'browser'}>
            Rustore и аналоги
        </Tab>
        <Tab typeInstall={typeInstall} setType={setTypeInstall} type={'flashcard'}>
            Установить вручную
        </Tab>
      </nav>

      <div className={style.rowInstructions}>
        {imageInstruction.map(({ id, index, type, image, description ,optional}) => {
          if (type === typeInstall || type === 'all') {
            return (
              <InstallInstructionItem
                key={id}
                image={image}
                index={index}
                description={description}
                optional={optional}
              />
            );
          }
        })}
      </div>
        {/*<a href="https://tvzvezda.ru/zvezda_androidtv.apk" download={'zvezda_android_tv.apk'} className={`button ${style.button}`}>Скачать приложение</a>*/}
      <MouseIcon color={'#33353F'} reference={broadcastRef} />
    </section>
  );
};
