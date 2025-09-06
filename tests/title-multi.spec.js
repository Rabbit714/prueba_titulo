const { test, expect } = require("@playwright/test");

const casos = [
  { name: "Caso 1", url: "https://www.disneyplus.com/", esperado: "Disney+ Argentina | Unlimited Movies, TV Series, and Sports" },
  { name: "Caso 2", url: "https://www.canva.com//", esperado: "Amazingly Simple Graphic Design Software – Canva" },
  { name: "Caso 3", url: "https://www.google.com/", esperado: "Google" },
  { name: "Caso 4", url: "https://play.hbomax.com/", esperado: "Ver películas y series online | HBO Max" },
  { name: "Caso 5", url: "https://www.youtube.com/", esperado: "YouTube" },
  { name: "Caso 6", url: "https://www.amazon.com//", esperado: "Amazon.com" },
];

for (const { name, url, esperado } of casos) {
  test(`valida el titulo correcto en ${name}`, async ({ page }) => {
    // Abre la pagina example.com
    await page.goto(url);
    await sleep(3000);

    // Verificacion del titulo exacto
    await expect(page).toHaveTitle(esperado);
  });
}

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}