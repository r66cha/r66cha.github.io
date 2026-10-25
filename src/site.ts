export const site = {
  role: 'Technical Product Owner | Founder',
  contacts: [
    { key: 'email', href: 'mailto:r66cha@gmail.com', handle: 'r66cha@gmail.com' },
    { key: 'telegram', href: 'https://t.me/r_chukavin', handle: '@r_chukavin' },
    { key: 'github', href: 'https://github.com/r66cha', handle: 'github.com/r66cha' },
    { key: 'leetcode', href: 'https://leetcode.com/u/r66cha/', handle: 'leetcode.com/u/r66cha' },
  ],
} as const;

/**
 * Типографика: дефис внутри слова не переносится («смарт-контракт»),
 * а разделитель «|» между словами не уходит в начало строки («Руслан Чукавин | Technical…»).
 */
export const nbh = (s: string) =>
  s.replace(/([А-Яа-яЁёA-Za-z0-9])-([А-Яа-яЁёA-Za-z])/g, '$1‑$2').replace(/ ([-|]) /g, ' $1 ');
