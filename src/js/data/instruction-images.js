import IMAGE_1 from '../../img/instuctions/instructions-01.png'
import IMAGE_2 from '../../img/instuctions/instructions-02.png'
import IMAGE_3 from '../../img/instuctions/instructions-03.png'
import IMAGE_4 from '../../img/instuctions/instructions-04.png'
import IMAGE_5 from '../../img/instuctions/instructions-05.png'
import IMAGE_6 from '../../img/instuctions/instructions-06.png'

const linkProgram = {
    Rustor:'https://www.rustore.ru/catalog/app/ru.infolio.zvezdatv',
    AppGallery: 'https://appgallery.huawei.ru/app/C109571413',
    GetApps: 'https://global.app.mi.com/details?lo=RU&la=ru&id=ru.infolio.zvezdatv'
}


export const imageInstruction = [
    {
        id: 1,
        index: '1',
        type: 'browser',
        image: IMAGE_5,
        description: `Запустите магазин приложений (<a href="${linkProgram.Rustor}" target="_blank">RuStore</a>,
<a href="${linkProgram.AppGallery}" target="_blank">AppGallery</a> или <a href="${linkProgram.GetApps}" target="_blank">GetApps</a>)
— нажмите кнопку Поиск и введите <span>«Звезда», «Звезда тв»</span> или <span>«Звезда телеканал»</span>`,
        optional: ''
    },
    {
        id: 2,
        index: '2',
        type: 'browser',
        image: IMAGE_6,
        description: 'Выберите приложение <span>Телеканал «Звезда»</span> и скачайте его',
        optional: ''
    },
    {
        id: 5,
        index: '3',
        type: 'browser',
        image: IMAGE_3,
        description: 'Подтвердите установку приложения «Звезда», а после завершения процесса <span>откройте приложение</span>',
        optional:''
    },
    {
        id: 7,
        index: '4',
        type: 'browser',
        image: IMAGE_4,
        description: 'Воспользуйтесь разделами внизу экрана, чтобы найти интересующее вас видео',
        optional:''
    },{
        id: 1,
        index: '1',
        type: 'flashcard',
        image: IMAGE_1,
        description: 'Нажмите на этой странице кнопку <span>«Скачать приложение»</span>. Согласитесь загрузить файл',
        optional: ''
    },
    {
        id: 2,
        index: '2',
        type: 'flashcard',
        image: IMAGE_2,
        description: 'После сообщения, что файл скачан, <span>перейдите в Загрузки</span> своего браузера и нажмите на скаченный файл',
        optional: ''
    },
    {
        id: 5,
        index: '3',
        type: 'flashcard',
        image: IMAGE_3,
        description: 'Подтвердите установку приложения «Звезда», а после завершения процесса <span>откройте приложение</span>',
        optional:''
    },
    {
        id: 7,
        index: '4',
        type: 'flashcard',
        image: IMAGE_4,
        description: 'Воспользуйтесь разделами внизу экрана, чтобы найти интересующее вас видео',
        optional:''
    },


]
