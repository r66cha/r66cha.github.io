export const languages = ['ru', 'en'] as const;
export type Lang = (typeof languages)[number];

const pluralRu = (n: number, [one, few, many]: [string, string, string]) => {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few;
  return many;
};

export const ui = {
  ru: {
    locale: 'ru-RU',
    name: 'Руслан Чукавин',
    bio: 'Создаю и развиваю продукты, пишу на Python, Solidity, Swift и TypeScript, проектирую игры и уровни.',
    nav: { projects: 'Проекты', blog: 'Колонка', about: 'Обо мне' },
    navLabel: 'Разделы',
    menu: 'Меню',
    theme: 'Сменить тему',
    langLabel: 'Язык',
    contactsLabel: 'Контакты',
    contacts: { email: 'Почта', telegram: 'Telegram', github: 'GitHub' },
    contactTips: {
      email: { type: 'почта', text: 'Напишите мне: проекты, сотрудничество или просто привет.', action: 'Написать →' },
      telegram: { type: 'telegram', text: 'Мой канал в Telegram.', action: 'Открыть канал →' },
      github: { type: 'github', text: 'Мой GitHub: код и проекты.', action: 'Открыть GitHub →' },
    },
    projectTypes: { app: 'приложение', web: 'веб', web3: 'web3', game: 'игра', level: 'уровень' },
    filters: { all: 'Все', app: 'Приложения', web: 'Веб', web3: 'Web3', game: 'Игры', level: 'Уровни' },
    filterLabel: 'Тип проекта',
    details: 'Подробнее →',
    projects: {
      title: 'Проекты',
      summary: (n: number) =>
        `${n} ${pluralRu(n, ['проект', 'проекта', 'проектов'])}: приложения, веб, web3, игры и уровни`,
      back: '← Все проекты',
      other: 'Другие проекты',
      facts: { type: 'Тип', role: 'Роль', stack: 'Стек', status: 'Статус' },
    },
    blog: {
      title: 'Колонка',
      intro: 'Заметки о продуктах, разработке и геймдизайне.',
      back: '← Колонка',
      next: 'Следующая статья',
      minutes: 'мин',
      topicLabel: 'Тема',
      topics: { product: 'Продукт', dev: 'Разработка', web3: 'Web3', gamedesign: 'Геймдизайн' },
    },
    about: {
      title: 'Обо мне',
      lead: 'Создаю и развиваю продукты, пишу код и проектирую игры и уровни.',
      paragraphs: [
        'Как Technical Product Owner веду продукт от идеи до релиза: формулирую, что и зачем строим, и сам разбираюсь в том, как это устроено технически.',
        'Пишу на Python, Solidity, Swift и TypeScript. Помимо продуктов занимаюсь Level- и Game-дизайном: придумываю игры и уровни к ним.',
      ],
      facts: [
        ['Роль', 'Technical Product Owner'],
        ['Продукт', 'Управление и создание продуктов'],
        ['Код', 'Python, Solidity, Swift, TypeScript'],
        ['Игры', 'Level-дизайн, Game-дизайн'],
      ],
    },
  },
  en: {
    locale: 'en-US',
    name: 'Ruslan Chukavin',
    bio: 'I build and grow products, write Python, Solidity, Swift and TypeScript, and design games and levels.',
    nav: { projects: 'Projects', blog: 'Writing', about: 'About' },
    navLabel: 'Sections',
    menu: 'Menu',
    theme: 'Toggle theme',
    langLabel: 'Language',
    contactsLabel: 'Contacts',
    contacts: { email: 'Email', telegram: 'Telegram', github: 'GitHub' },
    contactTips: {
      email: { type: 'email', text: 'Write to me: projects, collaboration or just say hi.', action: 'Write →' },
      telegram: { type: 'telegram', text: 'My Telegram channel.', action: 'Open channel →' },
      github: { type: 'github', text: 'My GitHub: code and projects.', action: 'Open GitHub →' },
    },
    projectTypes: { app: 'app', web: 'web', web3: 'web3', game: 'game', level: 'level' },
    filters: { all: 'All', app: 'Apps', web: 'Web', web3: 'Web3', game: 'Games', level: 'Levels' },
    filterLabel: 'Project type',
    details: 'Details →',
    projects: {
      title: 'Projects',
      summary: (n: number) => `${n} ${n === 1 ? 'project' : 'projects'}: apps, web, web3, games and levels`,
      back: '← All projects',
      other: 'Other projects',
      facts: { type: 'Type', role: 'Role', stack: 'Stack', status: 'Status' },
    },
    blog: {
      title: 'Writing',
      intro: 'Notes on products, development and game design.',
      back: '← Writing',
      next: 'Next article',
      minutes: 'min',
      topicLabel: 'Topic',
      topics: { product: 'Product', dev: 'Development', web3: 'Web3', gamedesign: 'Game design' },
    },
    about: {
      title: 'About',
      lead: 'I build and grow products, write code and design games and levels.',
      paragraphs: [
        'As a Technical Product Owner I take products from idea to release: I define what we build and why, and I dig into how it works under the hood.',
        'I write Python, Solidity, Swift and TypeScript. Beyond products, I do level and game design: I come up with games and the levels for them.',
      ],
      facts: [
        ['Role', 'Technical Product Owner'],
        ['Product', 'Product management and building products'],
        ['Code', 'Python, Solidity, Swift, TypeScript'],
        ['Games', 'Level design, game design'],
      ],
    },
  },
} as const;

/** Путь страницы на нужном языке: русский без префикса, английский под /en. */
export const localePath = (lang: Lang, path: string) => (lang === 'ru' ? path : `/en${path}`);

/** Та же страница на другом языке - для переключателя RU / EN. */
export const alternatePath = (pathname: string, lang: Lang) =>
  lang === 'ru' ? `/en${pathname}` : pathname.replace(/^\/en(?=\/|$)/, '') || '/';

export const formatDate = (d: Date, lang: Lang) => {
  const text = new Intl.DateTimeFormat(ui[lang].locale, { day: 'numeric', month: 'long', year: 'numeric' }).format(d);
  return lang === 'ru' ? text.replace(/\s?г\.$/, '') : text;
};
