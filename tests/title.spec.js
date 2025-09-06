const {test, expect} = require('@playwright/test');

test('valida el titulo exacto', async ({ page }) => {
  // Abre la pagina example.com
  await page.goto('https://example.com/');
  await sleep(3000);

  // Verificacion del titulo exacto
  await expect(page).toHaveTitle('Example Domain');
});

test('valida titulo con regex (contiene palabra)', async ({ page }) => {
  // Abre la pagina example.com
  await page.goto('https://example.com/');

  await sleep(3000);

  // Verificamos palabra
  await expect(page).toHaveTitle(/Example/);
});

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}