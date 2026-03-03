# React Carts Example

SPA-приложение для работы с корзинами пользователей на основе DummyJSON API.

[🌐 Live demo](https://advanceddev.github.io/react-carts-example/)

---

## 🚀 Быстрый старт

Создайте в корне проекта файл **.env** с содержимым:

```env
VITE_BASE_API_URL=https://dummyjson.com
```

```bash
# Клонировать репозиторий
git clone https://github.com/advanceddev/react-carts-example.git

# Установить зависимости
npm install

# Запустить DEV-сборку
npm run dev
```

Открыть в браузере
```bash
http://localhost:5173/
```


## 🛠 Tech stack

Категория | Технология
--- | --- |
Framework | React 19, Vite 7
Language | TSX, Typescript v5.9.3
State Management | @tanstack/react-query, Zustand
Styling | @emotion/react, @emotion/styled
Routing | React Router DOM v7
HTTP Client | Axios
Testing | ESLint, TypeScript type checking
Deployment | GitHub Pages

## 🏗 Архитектура

- FSD
  - Изоляция ответственности
  - Легкое добавление новых фич
  - Переиспользование компонентов
- State via React Query
  - Кэширование с staleTime/gcTime
  - Optimistic updates для UX
  - Автоматическая инвалидация (не для мокового апи)
  - Синхронизация кэшей
- State via Zustand
  - Пагинация
  - Персистентное хранение в localStorage

---
© Ivan Lomovtcev (https://t.me/frntbck)