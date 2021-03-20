import { Component, h } from '@stencil/core';
import { getList } from '../../library/NotesData';

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
    return (
      <div>
        <div>Notes List</div>
        <table>
          <thead>
            <tr>
              <th>{getList()}</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}
