import { ReactElement, useEffect, useState } from 'react';
import { Note } from '../../interfaces/Note';
import { noteActions } from '../../interfaces/types';
import { notesStore, setNotesStore } from '../../store/NotesStore';
import { NoteForm } from '../Note/Note';
import { NoteInField } from '../NoteInField/NoteInField';
import './NoteField.css';

export const NoteField = (): ReactElement => {
  const [notes, setNotes] = useState<Note[]>(notesStore);
  const [modal, setModal] = useState(false);
  const [action, setAction] = useState(noteActions.Add);
  const [selectNote, setselectNote] = useState<Note>();

  useEffect(() => {
    setNotesStore(notes);
  }, [notes]);

  const addNotes = (): void => {
    setModal(true);
    setAction(noteActions.Add);
  };

  const deleteNote = (id: number): void => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const changeNote = (id: number, item: Note): void => {
    setModal(true);
    setAction(noteActions.Change);
    setselectNote(item);
  };

  return (
    <main>
      <div className="main__container">
        <div className="filters"></div>
        <div className="notes__block">
          <button className="add__button" onClick={addNotes}>
            Add note
          </button>
          <div className="notes__container">
            {notes.length ? (
              notes.map((note) => (
                <NoteInField
                  noteText={note.text}
                  key={note.id}
                  deleteFunction={() => deleteNote(note.id)}
                  changeFunction={() => changeNote(note.id, note)}
                />
              ))
            ) : (
              <div className="notFound">You don&apos;t have any notes</div>
            )}
          </div>
        </div>
      </div>
      {modal && <NoteForm action={action} selected={selectNote} onClose={() => setModal(false)} />}
    </main>
  );
};
