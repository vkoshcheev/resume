export interface WorkplaceData {
  companyName: string;
  occupation: string;
  responsibilities: string;

  duration: string;
  startDate: string;
  finishDate: string;
  sortOrder: number;
}

export const workplacesList: WorkplaceData[] = [
  {
    companyName: 'Этнамед',
    occupation: 'Frontend разработчик (React)',
    responsibilities: `Разработка с нуля нескольких сайтов лендинга компании и их развитие.
    Разработка веб-агрегатора медицинских услуг от разных поставщиков (онлайн консультации, планирование диеты, онлайн и оффлайн тренировки, и т.п.).
    Адаптивная и кроссбраузерная верстка.
    Работа над поисковой оптимизацией веб-сайтов (SEO).
    Верстка писем (HTML) с поддержкой разных почтовых клиентов (gmail, yandex, rambler, etc.)

    Компания занимается продажей медицинских услуг и услуг связанных со здоровым образом жизни, таких как консультации с медицинскими специалистами и тренерами, разработка планов питания, онлайн тренировки, и т.п.
    
    Размер команды: 4-7.
    
    Технологии: React, Redux, Redux-toolkit, Apollo, GraphQL, Rest API, Typescript, Sass.
    
    Инструменты: Git, Gitlab, Gitlab CI, ESLint, Prettier, Figma.`,
    startDate: 'Январь 2025',
    finishDate: 'Сентябрь 2025',
    duration: '9 месяцев',
    sortOrder: 2,
  },


  {
    companyName: 'Этнамед',
    occupation: 'Технический писатель',
    responsibilities: `Создание/поддержание документации по запросам REST API и экшенам GraphQL бэкэнда проекта в полуавтоматическом режиме.

    Автоматическое подтягивание структуры данных по запросам и информации о коммитах которые с ними связаны, после чего оно сразу же вносится в Gitlab Wiki проекта.`,
    startDate: 'Ноябрь 2024',
    finishDate: 'Декабрь 2024',
    duration: '2 месяца',
    sortOrder: 1,
  },

  {
    companyName: 'Trial Interactive',
    occupation: 'Frontend разработчик (React)',
       
    startDate: 'Июнь 2024',
    finishDate: 'Сентябрь 2024',
    duration: '4 месяца',

    responsibilities: `Работа над административным веб-ресурсом для менеджмента контента мобильного клиента.
    - новые роуты, модальные окна с настройками, связанные с ними запросы и хуки (пример: роут с настройками доступов юзеров для мобильного приложения).
    - покрытие кода тестами
    - рефакторинг (в том числе классовых компонентов)
    
    Основной стек: React, Redux (toolkit, thunks), Webpack, Sass`,
    sortOrder: 0,
  },
];
