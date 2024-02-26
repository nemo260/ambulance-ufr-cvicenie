import { newE2EPage } from '@stencil/core/testing';

describe('nemo260-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nemo260-ambulance-wl-app></nemo260-ambulance-wl-app>');

    const element = await page.find('nemo260-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
