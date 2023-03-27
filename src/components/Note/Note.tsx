import { ReactElement, useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import { NoteFormProps } from '../../interfaces/NoteFormProps';
import { noteActions } from '../../interfaces/types';
import { notesStore } from '../../store/NotesStore';
import './Note.css';

const portal = document.getElementById('portal') as HTMLElement;

export const NoteForm = ({ action, selected, onClose }: NoteFormProps): ReactElement => {
  const [note, setNote] = useState(selected?.text || '');

  useEffect(() => {
    if (action === noteActions.Add) {
      setNote('');
    }
  }, []);

  const cancelFunction = (event: React.FormEvent): void => {
    event.preventDefault();
    onClose();
  };

  const submitFunction = (event: React.FormEvent): void => {
    event.preventDefault();
    if (action === noteActions.Add) {
      const newNote = {
        id: notesStore.length + 1,
        text: note,
      };
      notesStore.push(newNote);
      onClose();
    } else {
      notesStore.map((item) => {
        if (item.id === selected?.id) {
          item.text = note;
        }
        return item;
      });
      onClose();
    }
  };

  return ReactDom.createPortal(
    <div className="modal">
      <div className="modal__content">
        <h3 className="modal__title">{action} note</h3>
        <form className="modal__form">
          <textarea
            rows={6}
            value={note}
            onChange={(event) => {
              setNote(event.target.value);
            }}
          ></textarea>
          <div className="button__container">
            <button className="modal__button" onClick={submitFunction}>
              OK
            </button>
            <button className="modal__button" onClick={cancelFunction}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>,
    portal
  );
};
