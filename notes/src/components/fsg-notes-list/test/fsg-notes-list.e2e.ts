import { newE2EPage } from '@stencil/core/testing';

describe('fsg-notes-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fsg-notes-list></fsg-notes-list>');

    const element = await page.find('fsg-notes-list');
    expect(element).toHaveClass('hydrated');
  });
});
