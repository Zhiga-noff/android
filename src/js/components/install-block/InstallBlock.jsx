import React, { useState } from 'react';
import style from '../../../scss/modules/InstallBlock.module.scss';
import label from '../../../img/star-logo.svg';
import { MouseIcon } from '../mouse-icon/MouseIcon';
import { InstallInstructionItem, Tab } from './components';
import { imageInstruction } from '../../data/instruction-images';
import { TitleTemplate } from '../title-template/TitleTemplate';

export const InstallBlock = ({ installBlockRef, broadcastRef }) => {
  const [typeInstall, setTypeInstall] = useState('browser');

  const linkProgram = {
      Rustor:'https://www.rustore.ru/catalog/app/ru.infolio.zvezdatv',
      AppGallery: 'https://appgallery.huawei.ru/app/C109571413',
      GetApps: 'https://global.app.mi.com/details?lo=RU&la=ru&id=ru.infolio.zvezdatv'
  }

  const title = `Приложение «Звезда» доступно бесплатно в магазине приложений вашего смартфона, в <a href="${linkProgram.Rustor}" target="_blank">RuStore</a>,
<a href="${linkProgram.AppGallery}" target="_blank">AppGallery</a> (Huawei), <a href="${linkProgram.GetApps}" target="_blank">GetApps</a> (Xiaomi).
  Если вы не нашли приложение в магазине вашего смартфона,  то его можно установить вручную`

  return (
    <section className={style.main} ref={installBlockRef}>
      <TitleTemplate
        color={false}
        image={label}
        title={'Установка приложения'}
        subtitle={
          title
        }
      />

      <nav className={style.tabsContainer}>
        <Tab typeInstall={typeInstall} setType={setTypeInstall} type={'browser'}>
            Rustore
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
        <a href="https://tvzvezda.ru/zvezda_androidtv.apk" download={'zvezda_android_tv.apk'} className={`button ${style.button}`}>Скачать приложение</a>
      <MouseIcon color={'#33353F'} reference={broadcastRef} />
    </section>
  );
};
