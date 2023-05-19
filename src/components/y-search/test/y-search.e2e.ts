import { newE2EPage } from '@stencil/core/testing';

describe('y-search', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<y-search></y-search>');

    const element = await page.find('y-search');
    expect(element).toHaveClass('hydrated');
  });
});
