import { newSpecPage } from '@stencil/core/testing';

jest.mock('../../../library/NotesData', () => ({
  getList: () => 'test hello list',
}));

import { FsgNotesList } from '../fsg-notes-list';

describe('fsg-notes-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FsgNotesList],
      html: `<fsg-notes-list></fsg-notes-list>`,
    });
    expect(page.root).toEqualHtml(`
      <fsg-notes-list>
        <mock:shadow-root>
        <div>
          <div>Notes List</div>
            <table>
              <thead>
                <tr>
                  <th>
                    test hello list
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </mock:shadow-root>
      </fsg-notes-list>
    `);
  });
});
