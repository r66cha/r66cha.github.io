# r66cha.github.io

Личный сайт Руслана Чукавина, Technical Product Owner: проекты, игры и уровни, колонка.
Русская версия: <https://r66cha.github.io>, английская: <https://r66cha.github.io/en/>.

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
icon: shum           # ключ из src/data/icons.ts
order: 2             # порядок в сетке
summary: "Текст подсказки при наведении."
lead: "Первое предложение описания."
leadMuted: "Продолжение серым."
facts:
  - ["Роль", "Founder"]
  - ["Платформы", "iOS"]
links:
  - label: "getshum.tech"
    href: "https://getshum.tech/"
---

## Идея

…
```

Новую пиктограмму можно добавить в `src/data/icons.ts`: линиями (viewBox 40×40, цвет `currentColor`) или пикселями через `pixels([...])` на сетке 12×12, как у Shum.

Серые плитки-замки «скоро» задаются списком категорий `upcoming` в `src/site.ts`: когда в категории появится готовый проект, её можно убрать из списка. Подзаголовок страницы «Проекты» - `projects.summary` в `src/i18n.ts`.

## Как добавить статью

Создать `src/content/posts/ru/<slug>.md` и `src/content/posts/en/<slug>.md` с полями `title`, `date`, `readTime`, `topic` (`product | dev | web3 | gamedesign | thoughts`), `lead` и текстом в Markdown. Пока статей нет, в колонке показывается блок «Первые статьи скоро».
