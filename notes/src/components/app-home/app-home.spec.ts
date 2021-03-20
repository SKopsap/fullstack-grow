import { newSpecPage } from '@stencil/core/testing';
import { AppHome } from './app-home';

describe('app-home tests', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppHome],
      html: `<app-home></app-home>`,
    });
    expect(page.root).toEqualHtml(`
      <app-home>
        <mock:shadow-root>
         <div class="app-home">
            <fsg-notes-list></fsg-notes-list>
          </div>
        </mock:shadow-root>
      </app-home>
    `);
  });
});
