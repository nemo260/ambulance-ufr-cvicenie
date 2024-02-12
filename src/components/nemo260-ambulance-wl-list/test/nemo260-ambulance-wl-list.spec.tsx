import { newSpecPage } from '@stencil/core/testing';
import { Nemo260AmbulanceWlList } from '../nemo260-ambulance-wl-list';

describe('nemo260-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Nemo260AmbulanceWlList],
      html: `<nemo260-ambulance-wl-list></nemo260-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <nemo260-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nemo260-ambulance-wl-list>
    `);
  });
});
