import { newSpecPage } from '@stencil/core/testing';

jest.mock('../../../library/NotesData', () => ({
  getList: () =>
    JSON.parse(
      `
        [
          {"id":"1","datetime":"2020-03-01T10:10Z","title":"My First Note"},
          {"id":"2","datetime":"2020-03-02T10:10Z","title":"My First Note"},
          {"id":"3","datetime":"2020-03-03T10:10Z","title":"My First Note"},
          {"id":"4","datetime":"2020-03-04T10:10Z","title":"My First Note"}
        ]
`,
    ),
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
                  <th>#</th>
                  <th>Date/time</th>
                  <th>Title</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>2020-03-01T10:10Z</td>
                  <td>My First Note</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>2020-03-02T10:10Z</td>
                  <td>My First Note</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>2020-03-03T10:10Z</td>
                  <td>My First Note</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>2020-03-04T10:10Z</td>
                  <td>My First Note</td>
                </tr>
              </tbody>
            </table>
          </div>
        </mock:shadow-root>
      </fsg-notes-list>
    `);
  });
});
