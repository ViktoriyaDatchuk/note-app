import { ReactElement, useState } from 'react';
import { Note } from '../../interfaces/Note';
import { noteActions } from '../../interfaces/types';
import notesObject from '../../store/NotesStore.json';
import { NoteForm } from '../Note/Note';
import { NoteInField } from '../NoteInField/NoteInField';
import './NoteField.css';

export const NoteField = (): ReactElement => {
  const [modal, setModal] = useState(false);
  const [action, setAction] = useState(noteActions.Add);

  const notes: Note[] = notesObject.notes;

  const addNotes = () => {
    setModal(true);
    setAction(noteActions.Add);
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
              notes.map((note) => <NoteInField noteText={note.text} key={note.id} />)
            ) : (
              <div className="notFound">You don&apos;t have any notes</div>
            )}
          </div>
        </div>
      </div>
      {modal && <NoteForm />}
    </main>
  );
};
