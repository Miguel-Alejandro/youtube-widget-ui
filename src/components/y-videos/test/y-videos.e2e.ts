import { newE2EPage } from '@stencil/core/testing';

describe('y-videos', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<y-videos></y-videos>');

    const element = await page.find('y-videos');
    expect(element).toHaveClass('hydrated');
  });
});
