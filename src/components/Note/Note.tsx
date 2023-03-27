import { ReactElement, useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import { NoteFormProps } from '../../interfaces/NoteFormProps';
import { noteActions } from '../../interfaces/types';
import './Note.css';

const portal = document.getElementById('portal') as HTMLElement;

export const NoteForm = ({ action, selected }: NoteFormProps): ReactElement => {
  const [note, setNote] = useState(selected?.text || '');

  useEffect(() => {
    if (action === noteActions.Add) {
      setNote('');
    }
  }, []);

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
            <button className="modal__button">OK</button>
            <button className="modal__button">Cancel</button>
          </div>
        </form>
      </div>
    </div>,
    portal
  );
};
