import { newE2EPage } from '@stencil/core/testing';

describe('nemo260-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nemo260-ambulance-wl-list></nemo260-ambulance-wl-list>');

    const element = await page.find('nemo260-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
