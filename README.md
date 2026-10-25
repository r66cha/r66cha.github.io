# r66cha.github.io

Личный сайт Руслана Чукавина, Technical Product Owner: проекты, игры и уровни, колонка.
Сайт на двух языках: русский - <https://r66cha.github.io>, английский - <https://r66cha.github.io/en/>.

Минималистичный ч/б дизайн в двух темах (светлая и тёмная), только текст и пиктограммы.
Макет в Figma: <https://www.figma.com/design/KgVBJXvvjajPxGGe7oha8U/Ruslan-Chukavin>

## Стек

- [Astro 5](https://astro.build) + TypeScript, статическая сборка, встроенный i18n-роутинг
- Шрифт Inter (`@fontsource/inter`)
- Деплой на GitHub Pages через GitHub Actions (`.github/workflows/deploy.yml`) при каждом пуше в `main`

## Запуск

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # сборка в dist/
npm run preview  # просмотр собранного сайта
```

Нужен Node.js 22.12 или новее.

## Структура

```text
src/
├── content/
│   ├── projects/{ru,en}/   # проекты, по одному .md на проект и язык
│   └── posts/{ru,en}/      # статьи колонки
├── views/          # шаблоны страниц, общие для обоих языков
├── pages/          # роуты: русские в корне, английские в pages/en/
├── components/     # шапка, подвал, сетка проектов, пиктограмма, портрет
├── data/icons.ts   # SVG-пиктограммы проектов
├── i18n.ts         # тексты интерфейса на двух языках, пути и даты
├── lib/content.ts  # выборка проектов и статей по языку
├── layouts/        # общий лейаут с переключением темы
├── site.ts         # роль, контакты, типографика
└── styles/         # токены двух тем и типографика
public/images/      # ч/б портрет и пиксель-арт аватар 32×40 (виден до наведения)
```

## Как добавить проект

Создать два файла с одинаковым именем: `src/content/projects/ru/<slug>.md` и `src/content/projects/en/<slug>.md`.

```md
---
title: "Название"
type: app            # app | web | web3 | game | level
icon: app-a          # ключ из src/data/icons.ts
order: 11            # порядок в сетке
summary: "Текст подсказки при наведении."
lead: "Первое предложение описания."
leadMuted: "Продолжение серым."
role: "Technical Product Owner"
stack: ["Swift"]
status: "Запущен"
links:
  - label: "GitHub"
    href: "https://github.com/r66cha"
---

## Задача

…
```

Новую пиктограмму можно добавить в `src/data/icons.ts` (viewBox 40×40, цвет `currentColor`).

## Как добавить статью

Создать `src/content/posts/ru/<slug>.md` и `src/content/posts/en/<slug>.md` с полями `title`, `date`, `readTime`, `topic` (`product | dev | web3 | gamedesign`), `lead` и текстом в Markdown.

## TODO

- Заменить тексты-заглушки в проектах и статьях на реальные (на обоих языках)
- Указать настоящие почту и Telegram в `src/site.ts`
