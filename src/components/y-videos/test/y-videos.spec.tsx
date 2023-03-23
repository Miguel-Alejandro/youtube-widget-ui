import { newSpecPage } from '@stencil/core/testing';
import { YVideos } from '../y-videos';

describe('y-videos', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [YVideos],
      html: `<y-videos></y-videos>`,
    });
    expect(page.root).toEqualHtml(`
      <y-videos>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </y-videos>
    `);
  });
});
