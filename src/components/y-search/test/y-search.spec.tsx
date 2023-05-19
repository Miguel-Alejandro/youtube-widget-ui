import { newSpecPage } from '@stencil/core/testing';
import { YSearch } from '../y-search';

describe('y-search', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [YSearch],
      html: `<y-search></y-search>`,
    });
    expect(page.root).toEqualHtml(`
      <y-search>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </y-search>
    `);
  });
});
