import { ReactElement } from 'react';
import ReactDom from 'react-dom';
import './Note.css';

const portal = document.getElementById('portal') as HTMLElement;

export const NoteForm = (): ReactElement => {
  return ReactDom.createPortal(
    <div className="modal">
      <div className="modal__content">
        <form>
          <textarea rows={6}></textarea>
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
