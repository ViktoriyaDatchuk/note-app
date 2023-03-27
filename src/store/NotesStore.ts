import { Note } from '../interfaces/Note';

export let notesStore: Note[] = JSON.parse(localStorage.getItem('notes')!) ?? [];

window.addEventListener('beforeunload', () => {
  localStorage.setItem('notes', JSON.stringify(notesStore));
});

export const setNotesStore = (value: Note[]): void => {
  notesStore = value;
};
