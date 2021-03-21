import { Component, h } from '@stencil/core';
import { getList } from '../../library/NotesData';
import dayjs from 'dayjs';
import 'dayjs/locale/en';

dayjs.locale('en');

/**
 * Lists notes
 */
@Component({
  tag: 'fsg-notes-list',
  styleUrl: 'fsg-notes-list.css',
  shadow: true,
})
export class FsgNotesList {
  render() {
    const notes = getList();
    return (
      <div>
        <div>Notes List</div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Date/time</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {notes.map((note: any, index: number) => (
              <tr>
                <td>{index + 1}</td>
                <td>{dayjs(note.datetime).format('MMM D, YYYY h:mm A')}</td>
                <td>{note.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
