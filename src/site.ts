export const site = {
  role: 'Technical Product Owner',
  contacts: [
    { key: 'email', href: 'mailto:r66cha@gmail.com', handle: 'r66cha@gmail.com' },
    { key: 'telegram', href: 'https://t.me/r_chukavin', handle: '@r_chukavin' },
    { key: 'github', href: 'https://github.com/r66cha', handle: 'github.com/r66cha' },
  ],
} as const;

/**
 * Типографика: дефис внутри слова не переносится («смарт-контракт»),
 * а дефис между словами не уходит в начало строки («Руслан Чукавин - Technical…»).
 */
export const nbh = (s: string) =>
  s.replace(/([А-Яа-яЁёA-Za-z0-9])-([А-Яа-яЁёA-Za-z])/g, '$1‑$2').replace(/ - /g, ' - ');
