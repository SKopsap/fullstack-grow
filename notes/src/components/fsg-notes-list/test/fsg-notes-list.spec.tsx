import { newSpecPage } from '@stencil/core/testing';
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
          <div>TODO: Create notes-list render</div>
        </mock:shadow-root>
      </fsg-notes-list>
    `);
  });
});
