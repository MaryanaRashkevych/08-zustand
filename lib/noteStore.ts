// Zustand-стор з наступними функціями:

//draft: об’єкт, що містить тимчасові дані форми нотатки (title, content, tag).
// setDraft(note): функція для оновлення полів чернетки.
// clearDraft(): функція для очищення чернетки до початкового стану. У якості початкового стану використовуйте наступний об’єкт

import { create } from 'zustand';

const initialDraft = {
  title: '',
  content: '',
  tag: 'Todo',
};
