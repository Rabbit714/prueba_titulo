const { test, expect } = require('@playwright/test');

test('buscar un video en YouTube', async ({ page }) => {
    // 1. Navega a la página de YouTube
    await page.goto('https://www.youtube.com/');

    // 2. **Espera a que la página esté completamente cargada**
    await page.waitForLoadState('domcontentloaded');

    // 3. Busca el campo de búsqueda y escribe un término
    await page.getByPlaceholder('Buscar').fill('the killers');

    // 4. Presiona Enter para iniciar la búsqueda
    await page.keyboard.press('Enter');

    // 5. Espera a que los resultados de la búsqueda se carguen
    await page.waitForURL(/.*search_query=the killers.*/);

    // 6. Verifica que los resultados de búsqueda se muestren correctamente
    await expect(page.getByText('Resultados de la búsqueda')).toBeVisible();
});