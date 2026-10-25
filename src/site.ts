export const site = {
  name: 'Руслан Чукавин',
  role: 'Technical Product Owner',
  description:
    'Руслан Чукавин — Technical Product Owner. Создаю и развиваю продукты, пишу на Python, Solidity, Swift и TypeScript, проектирую игры и уровни.',
  // TODO: заменить почту и Telegram на настоящие
  contacts: [
    { label: 'Почта', href: 'mailto:hello@example.com' },
    { label: 'Telegram', href: 'https://t.me/username' },
    { label: 'GitHub', href: 'https://github.com/r66cha' },
  ],
};

export const projectTypes = {
  app: 'приложение',
  web: 'веб',
  web3: 'web3',
  game: 'игра',
  level: 'уровень',
} as const;

export const projectFilters = [
  { key: 'all', label: 'Все' },
  { key: 'app', label: 'Приложения' },
  { key: 'web', label: 'Веб' },
  { key: 'web3', label: 'Web3' },
  { key: 'game', label: 'Игры' },
  { key: 'level', label: 'Уровни' },
] as const;

export const postTopics = {
  product: 'Продукт',
  dev: 'Разработка',
  web3: 'Web3',
  gamedesign: 'Геймдизайн',
} as const;

/** Неразрывный дефис внутри слов, чтобы «смарт-контракт» не переносился по дефису. */
export const nbh = (s: string) => s.replace(/([А-Яа-яЁёA-Za-z0-9])-([А-Яа-яЁёA-Za-z])/g, '$1‑$2');

/** Русское склонение: plural(10, ['проект', 'проекта', 'проектов']) → «проектов». */
export const plural = (n: number, [one, few, many]: [string, string, string]) => {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few;
  return many;
};

export const formatDate = (d: Date) =>
  new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })
    .format(d)
    .replace(/\s?г\.$/, '');
