// Пиктограммы проектов (viewBox 0 0 40 40). Цвет берётся из currentColor:
// плитка рисуется цветом текста, а рисунок - цветом фона, поэтому в тёмной теме всё инвертируется.
const S = 'stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"';
const F = 'fill="currentColor"';

/** Пиксельный рисунок 12×12: по 3 единицы на пиксель с отступом 2, «#» - закрашенный пиксель. */
const pixels = (rows: string[]) =>
  `<g ${F} shape-rendering="crispEdges">${rows
    .flatMap((row, y) =>
      [...row.matchAll(/#+/g)].map(
        (m) => `<rect x="${2 + (m.index ?? 0) * 3}" y="${2 + y * 3}" width="${m[0].length * 3}" height="3"/>`,
      ),
    )
    .join('')}</g>`;

export const icons = {
  // Shum: пиксельное облачко-сообщение, как в логотипе getshum.tech
  shum: pixels([
    '............',
    '..########..',
    '.##########.',
    '############',
    '############',
    '############',
    '############',
    '.##########.',
    '..########..',
    '..###.......',
    '..##........',
    '..#.........',
  ]),
  // замок для плиток будущих проектов
  lock: pixels([
    '............',
    '....####....',
    '...##..##...',
    '...#....#...',
    '...#....#...',
    '..########..',
    '..########..',
    '..###..###..',
    '..###..###..',
    '..########..',
    '..########..',
    '............',
  ]),
  'app-a': `<rect x="12" y="5" width="16" height="30" rx="4" ${S}/><circle cx="20" cy="29" r="2" ${F}/>`,
  'app-b': `<circle cx="15" cy="20" r="9" ${S}/><circle cx="25" cy="20" r="9" ${S}/>`,
  'web-a': [10, 20, 30].flatMap((y) => [10, 20, 30].map((x) => `<circle cx="${x}" cy="${y}" r="3" ${F}/>`)).join(''),
  'web-b': `<path d="M4 24 C10 10 15 10 20 20 S30 30 36 16" ${S}/>`,
  'web3-a': `<polygon points="20,4 34,12 34,28 20,36 6,28 6,12" ${S}/><circle cx="20" cy="20" r="3" ${F}/>`,
  'web3-b': `<rect x="4" y="14" width="19" height="12" rx="6" ${S}/><rect x="17" y="14" width="19" height="12" rx="6" ${S}/>`,
  'game-a': `<rect x="6" y="18" width="13" height="4" ${F}/><rect x="10.5" y="13.5" width="4" height="13" ${F}/><circle cx="27" cy="17" r="2.8" ${F}/><circle cx="32" cy="23" r="2.8" ${F}/>`,
  'game-b': `<polygon points="12,7 33,20 12,33" ${F}/>`,
  'level-a': `<path d="M4 34 H12 V26 H20 V18 H28 V10 H36" stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="square"/>`,
  'level-b': `<path d="M20 20 H25 V25 H14 V14 H30 V30 H9 V9 H35" stroke="currentColor" fill="none" stroke-width="2.5" stroke-linecap="square"/>`,
} as const;

export type IconKey = keyof typeof icons;
export const iconKeys = Object.keys(icons) as [IconKey, ...IconKey[]];
