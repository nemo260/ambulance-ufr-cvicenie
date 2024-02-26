import { newE2EPage } from '@stencil/core/testing';

describe('nemo260-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nemo260-ambulance-wl-editor></nemo260-ambulance-wl-editor>');

    const element = await page.find('nemo260-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
