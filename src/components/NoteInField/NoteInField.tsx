import { ReactElement } from 'react';
import { NoteInFieldProps } from '../../interfaces/NoteInFieldProps';
import './NoteInField.css';

export const NoteInField = ({ noteText }: NoteInFieldProps): ReactElement => {
  return (
    <div className="note__container">
      <div className="note_field">
        <p className="note">{noteText}</p>
        <div className="note__buttons">
          <button className="note__button">Change</button>
          <button className="note__button">Delete</button>
        </div>
      </div>
    </div>
  );
};
