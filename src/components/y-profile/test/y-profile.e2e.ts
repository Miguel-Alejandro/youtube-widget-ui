import { newE2EPage } from '@stencil/core/testing';

describe('y-profile', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<y-profile></y-profile>');

    const element = await page.find('y-profile');
    expect(element).toHaveClass('hydrated');
  });
});
