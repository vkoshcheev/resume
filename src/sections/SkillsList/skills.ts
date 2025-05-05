export interface SkillSet {
  skillSetName: string;
  skills: Array<string | string[]>;
}

export const skillSets: SkillSet[] = [
  {
    skillSetName: "Платформы",
    skills: [
      ["Web (кроссбраузерная, кроссплатформенная, адаптивная вёрстка)", "веб", "cross browser compatibility", "cross platform compatibility", "adaptive design"],
      ["Android", "Андроид"],
      ["iOS", "apple", "iphone", "mac", "мак", "айфон", ],
    ],
  },

  {
    skillSetName: "Стек",
    skills: [
      ["React", "Реакт"],
      ["Next.JS", "Next", "Некст"],
      ["React Native", "Реакт Нейтив"],
      "Typescript",
      "Javascript",
      "Node.js",
    ],
  },

  {
    skillSetName: "Работа со стейтом и хранение данных",
    skills: [
      "local storage",
      ["cookies", "куки"],
      "react-redux (redux-thunk, redux-sagas, redux-toolkit, redux-persist)",
      "react-native-async-storage",
      "react-native-encrypted-storage",
    ],
  },

  {
    skillSetName: "Навигация",
    skills: [
      "react-router-dom",
      "react-navigation",
      "react-native-navigation",
      "react-native-router-flux",
    ],
  },

  {
    skillSetName: "Запросы",
    skills: [
      ["REST API", "requests", "запросы"],
      ["Axios", "requests", "запросы"],
      ["GraphQL", "graph ql"],
      ["Apollo", "graphql", "graph ql"],
      ["Hasura", "graphql", "graph ql", "Хасура"],
    ],
  },

  {
    skillSetName: "Инструменты сборки",
    skills: [
      "Webpack",
      "Parcel",
      "Expo",
    ],
  },

  {
    skillSetName: "Стили",
    skills: [
      ["CSS", "styles", "стили"],
      ["Sass, SCSS", "styles", "стили"],
      ["Less", "styles", "стили"],
    ],
  },

  {
    skillSetName: "Другие библиотеки и внутренние инструменты",
    skills: [
      "Lodash",
      ["ESLint, TSLint, prettier", "линтеры"],
      "react-hook-form",
      "fluent-ffmpeg (в т.ч. работа с видеопотоками)",
      "Notifee",
      "moment.js",
      "express",
    ],
  },

  {
    skillSetName: "Внешние инструменты",
    skills: [
      ["Atlassian (Jira, Confluence, Trello)", "жира", "трелло", "конфлюенс"],
      ["GitHub, GitLab, GitLab CI/CD", "гитхаб", "гитлаб"],
      ["Figma", "Фигма"],
    ],
  },

  {
    skillSetName: "Тестирование",
    skills: [
      "Jest",
      "React Testing Library",
      "React Native Testing Library",
      ["юнит-тесты", "unit-tests"],
    ],
  },

  {
    skillSetName: "Консоль:",
    skills: [
      "npm",
      "Yarn",
      ["Git", "Гит"],
    ],
  },

  {
    skillSetName: "Разное",
    skills: [
      "Поисковая оптимизация (Search Engine Optimization, SEO)",
      ["Работа с нативными модулями (камера, сканер отпечатков пальцев)", "native modules", "camera", "fingerprints"],
      "Firebase",
    ],
  },
];

export const skillsWithSynonyms = Object.values(skillSets).reduce((result: string[][], item) => {
  const skillsFromSet = item.skills.reduce((arrInner: string[][], skillItem) => {
    if (typeof skillItem === 'string') {
      arrInner.push([skillItem]);
    }
    else {
      arrInner.push(skillItem);
    }
    return arrInner;
  }, []);

  result.push(...skillsFromSet);
  return result;
}, []);