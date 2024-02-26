import { newSpecPage } from '@stencil/core/testing';
import { Nemo260AmbulanceWlEditor } from '../nemo260-ambulance-wl-editor';

describe('nemo260-ambulance-wl-editor', () => {
  it('buttons shall be of different type', async () => {
    const page = await newSpecPage({
      components: [Nemo260AmbulanceWlEditor],
      html: `<nemo260-ambulance-wl-editor entry-id="@new"></nemo260-ambulance-wl-editor>`,
    });
    let items: any = await page.root.shadowRoot.querySelectorAll("md-filled-button");
    expect(items.length).toEqual(1);
    items = await page.root.shadowRoot.querySelectorAll("md-outlined-button");
    expect(items.length).toEqual(1);

    items = await page.root.shadowRoot.querySelectorAll("md-filled-tonal-button");
    expect(items.length).toEqual(1);
  });
});