export interface WorkplaceData {
  companyName: string;
  occupation: string;
  responsibilities: string;

  duration: string;
  startDate: string;
  finishDate: string;
}

export const workplacesList: WorkplaceData[] = [
  {
    companyName: 'Этнамед',
    occupation: 'Frontend разработчик (React)',
    responsibilities: `Разработка с нуля сайта лендинга компании и его развитие.
    Адаптивная вёрстка, кроссбраузерная вёрстка.

    Компания занимается продажей медицинских услуг и услуг связанных со здоровым образом жизни, таких как консультации с медицинскими специалистами и тренерами, разработка планов питания, онлайн тренировки, и т.п.
    
    Размер команды: 4-7.
    
    Технологии: React, Redux, Redux-toolkit, Apollo, GraphQL, Rest API, Typescript, Sass.
    
    Инструменты: Git, Gitlab, Gitlab CI, ESLint, Prettier, Figma.`,
    startDate: 'Апрель 2024',
    finishDate: 'Октябрь 2024',
    duration: '7 месяцев',
  },


  {
    companyName: 'Этнамед',
    occupation: 'Технический писатель',
    responsibilities: `Создание/поддержание документации по запросам REST API и экшенам GraphQL бэкэнда проекта в полуавтоматическом режиме.

    Автоматическое подтягивание структуры данных по запросам и информации о коммитах которые с ними связаны, после чего оно сразу же вносится в Gitlab Wiki проекта.`,
    startDate: 'Октябрь 2023',
    finishDate: 'Март 2024',
    duration: '6 месяцев',
  },
  
  {
    companyName: 'IceRockDev',
    occupation: 'Frontend разработчик (React-Native)',
    responsibilities: `Добавление нового функционала в iOS/Android приложение заказчика, Frontend, React-Native. Интеграция взаимодействия с сервисом ЕСИА/Госуслуги.

    Размер команды: 5-8.
    
    Технологии: React Native, Typescript, Redux, Redux-toolkit, Thunks.
    Инструменты: Git, Gitlab, Gitlab CI, ESLint, Prettier, Jira, Confluence.`,
    startDate: 'Март 2023',
    finishDate: 'Июль 2023',
    duration: '5 месяцев',
  },

  {
    companyName: 'Trial Interactive',
    occupation: 'Frontend разработчик (React-Native)',
       
    startDate: 'Сентябрь 2021',
    finishDate: 'Март 2023',
    duration: '1 год 7 месяцев',

    responsibilities: `Разработка приложений для iOS/Android с высоконагруженной бизнес логикой и стабильной производительностью, продумывание и создание архитектуры для отдельных элементов функционала (фич), покрытие кода тестами, рефакторинг. Работа в крупных командах, взаимодействие с разными командами напрямую для быстрого решения проблем.

    Последние проекты были связаны с аутсорсом для зарубежной медицинской компании, занимающейся услугами цифровизации медицинских учреждений.

    1) Административный веб-ресурс для менеджмента контента мобильного клиента.

    Моими обязанностями были:
    - внедрение пользовательского интерфейса для административного конфигурирования;
    - рефакторинг.

    Платформа: web
    Базы данных: LocalStorage
    Технологии: React, TS, Redux, Redux-toolkit, thunks, TinyMCE
    Инструменты: Git, Gitlab CI, ESLint, Sass, Webpack
    Third party tools: Bugsnag, Internal proxy communication service

    Размер команды: 2-4.

    2) Мобильная (iOS/Android) облачная платформа для клинических исследований. Разнообразная работа с документами, запросы, распространение документов, добавление документов с помощью их фотографирования на камеру с последующим прохождением рабочего процесса (workflow) где пользователи с различными ролями могут вносить изменения в эти документы или метадату. Идентификация пользователей с помощью биометрии.

    Моими обязанностями были:
    - проектирование и разработка архитектуры для отдельных элементов функционала (фич);
    - внедрение пользовательского интерфейса и бизнес-логики в соответствии с нуждами бизнеса;
    - покрытие кода тестами.

    Платформы: iOS, Android
    Базы данных: AsyncStorage, Keychain secure storage
    Технологии: React Native, TypeScript, Redux, Redux-toolkit, Redux-sagas, Redux Persist, NativeBase, react-native-router-flux
    Инструменты: Gitlab CI, Fastlane, ESLint, TestFlight
    Third party tools: Bugsnag, Applanga, Mixpanel, Scanbot

    Размер команды: 15.

    3) Мобильное приложение для системы менеджмента клинических исследований. Предназначено для управления всей возможной активностью, связанной с такими исследованиями - планированием, подготовкой, проведением, отслеживанием, завершением, и отчётностью.

    Моими обязанностями были:
    - проектирование и разработка архитектуры для приложения;
    - внедрение пользовательского интерфейса и бизнес-логики;
    - внедрение функционала синхронизации для отчётности;
    - покрытие кода тестами.

    Платформы: iOS, Android
    Базы данных: AsyncStorage
    Технологии: React Native, TypeScript, Redux, Redux-toolkit, Redux-sagas, Redux Persist, react-native-router-flux
    Инструменты: Gitlab CI, Fastlane, ESLint
    Third party tools: Bugsnag

    Размер команды: 2`,
  },
];
