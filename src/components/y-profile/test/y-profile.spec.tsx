import { newSpecPage } from '@stencil/core/testing';
import { YwuiProfile } from '../y-profile';

describe('y-profile', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [YwuiProfile],
      html: `<y-profile></y-profile>`,
    });
    expect(page.root).toEqualHtml(`
      <y-profile>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </y-profile>
    `);
  });
});
