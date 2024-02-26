import { newSpecPage } from '@stencil/core/testing';
import { Nemo260AmbulanceWlApp } from '../nemo260-ambulance-wl-app';

describe('nemo260-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [Nemo260AmbulanceWlApp],
      html: `<nemo260-ambulance-wl-app base-path="/"></nemo260-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("nemo260-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [Nemo260AmbulanceWlApp],
      html: `<nemo260-ambulance-wl-app base-path="/ambulance-wl/"></nemo260-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("nemo260-ambulance-wl-list");
  });
});