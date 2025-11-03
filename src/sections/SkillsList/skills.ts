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
      "Typescript",
      "Javascript",
      "Node.js",
    ],
  },

  {
    skillSetName: "Работа со стейтом и хранение данных",
    skills: [
      "react-redux (redux-thunk, redux-sagas, redux-toolkit, redux-persist)",
      ["local storage", "localStorage"],
      ["session storage", "sessionStorage"],
      ["cookies", "куки"],
      ["context (useContext)", "контекст"]
    ],
  },

  {
    skillSetName: "Навигация",
    skills: [
      "react-router-dom",
      "react-navigation",
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
      ["Material UI", "MUI"],
      ["CSS", "styles", "стили"],
      ["Sass, SCSS", "styles", "стили"],
      ["Less", "styles", "стили"],
    ],
  },

  {
    skillSetName: "Другие библиотеки и внутренние инструменты",
    skills: [
      ["ESLint, TSLint, prettier", "линтеры"],
      "lodash",
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