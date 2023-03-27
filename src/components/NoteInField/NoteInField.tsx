import { ReactElement } from 'react';
import { NoteInFieldProps } from '../../interfaces/NoteInFieldProps';
import './NoteInField.css';

export const NoteInField = ({
  noteText,
  deleteFunction,
  changeFunction,
}: NoteInFieldProps): ReactElement => {
  return (
    <div className="note__container">
      <div className="note_field">
        <p className="note">{noteText}</p>
        <div className="note__buttons">
          <button className="note__button" onClick={changeFunction}>
            Change
          </button>
          <button className="note__button" onClick={deleteFunction}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
