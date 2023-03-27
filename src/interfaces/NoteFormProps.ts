import { Note } from './Note';

export interface NoteFormProps {
  action: string;
  selected: Note | undefined;
}
