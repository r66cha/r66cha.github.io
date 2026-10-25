export const languages = ['ru', 'en'] as const;
export type Lang = (typeof languages)[number];

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
    contacts: { email: 'Почта', telegram: 'Telegram', github: 'GitHub', leetcode: 'LeetCode' },
    contactTips: {
      email: { type: 'почта', text: 'Напишите мне: проекты, сотрудничество или просто привет.', action: 'Написать →' },
      telegram: { type: 'telegram', text: 'Мой канал в Telegram.', action: 'Открыть канал →' },
      github: { type: 'github', text: 'Мой GitHub: код и проекты.', action: 'Открыть GitHub →' },
      leetcode: { type: 'leetcode', text: 'Решаю алгоритмические задачи в свободное время.', action: 'Открыть профиль →' },
    },
    projectTypes: { app: 'приложение', web: 'веб', web3: 'web3', game: 'игра', level: 'уровень' },
    filters: { all: 'Все', app: 'Приложения', web: 'Веб', web3: 'Web3', game: 'Игры', level: 'Уровни' },
    filterLabel: 'Тип проекта',
    details: 'Подробнее →',
    /** Плитка-замок будущего проекта. */
    soon: { type: 'скоро', name: 'Новый проект', text: 'Здесь будут новые проекты.' },
    /** Строка на вкладке фильтра, где пока нет готовых проектов. */
    emptyType: {
      app: 'Здесь будут новые приложения.',
      web: 'Здесь будут новые веб-проекты.',
      web3: 'Здесь будут новые web3-проекты.',
      game: 'Здесь будут новые игры.',
      level: 'Здесь будут новые уровни.',
    },
    projects: {
      title: 'Проекты',
      summary: 'Shum уже работает, остальное готовится: игры, уровни, веб и web3',
      back: '← Все проекты',
      other: 'Другие проекты',
    },
    blog: {
      title: 'Колонка',
      intro: 'Заметки о продуктах, разработке и геймдизайне.',
      back: '← Колонка',
      next: 'Следующая статья',
      minutes: 'мин',
      topicLabel: 'Тема',
      topics: { product: 'Продукт', dev: 'Разработка', web3: 'Web3', gamedesign: 'Геймдизайн', thoughts: 'Мысли вслух' },
      empty: {
        title: 'Первые статьи скоро.',
        text: 'Здесь буду писать о том, как делаю проекты: решения, ошибки и выводы.',
      },
    },
    about: {
      title: 'Обо мне',
      lead: 'Создаю и развиваю продукты, пишу код и проектирую игры и уровни.',
      paragraphs: [
        'Веду продукт от идеи до релиза: формулирую, что и зачем строим, и сам разбираюсь в том, как это устроено технически.',
        'Пишу на Python, Solidity, Swift и TypeScript. Помимо продуктов занимаюсь Level- и Game-дизайном: придумываю игры и уровни к ним.',
      ],
      facts: [
        ['Роль', 'Technical Product Owner | Founder'],
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
    contacts: { email: 'Email', telegram: 'Telegram', github: 'GitHub', leetcode: 'LeetCode' },
    contactTips: {
      email: { type: 'email', text: 'Write to me: projects, collaboration or just say hi.', action: 'Write →' },
      telegram: { type: 'telegram', text: 'My Telegram channel.', action: 'Open channel →' },
      github: { type: 'github', text: 'My GitHub: code and projects.', action: 'Open GitHub →' },
      leetcode: { type: 'leetcode', text: 'I solve algorithm problems in my spare time.', action: 'Open profile →' },
    },
    projectTypes: { app: 'app', web: 'web', web3: 'web3', game: 'game', level: 'level' },
    filters: { all: 'All', app: 'Apps', web: 'Web', web3: 'Web3', game: 'Games', level: 'Levels' },
    filterLabel: 'Project type',
    details: 'Details →',
    soon: { type: 'soon', name: 'New project', text: 'New projects are coming here.' },
    emptyType: {
      app: 'New apps are coming here.',
      web: 'New web projects are coming here.',
      web3: 'New web3 projects are coming here.',
      game: 'New games are coming here.',
      level: 'New levels are coming here.',
    },
    projects: {
      title: 'Projects',
      summary: 'Shum is live, more is on the way: games, levels, web and web3',
      back: '← All projects',
      other: 'Other projects',
    },
    blog: {
      title: 'Writing',
      intro: 'Notes on products, development and game design.',
      back: '← Writing',
      next: 'Next article',
      minutes: 'min',
      topicLabel: 'Topic',
      topics: { product: 'Product', dev: 'Development', web3: 'Web3', gamedesign: 'Game design', thoughts: 'Thinking out loud' },
      empty: {
        title: 'First articles soon.',
        text: 'I will write about how I build projects: decisions, mistakes and takeaways.',
      },
    },
    about: {
      title: 'About',
      lead: 'I build and grow products, write code and design games and levels.',
      paragraphs: [
        'I take products from idea to release: I define what we build and why, and I dig into how it works under the hood.',
        'I write Python, Solidity, Swift and TypeScript. Beyond products, I do level and game design: I come up with games and the levels for them.',
      ],
      facts: [
        ['Role', 'Technical Product Owner | Founder'],
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
