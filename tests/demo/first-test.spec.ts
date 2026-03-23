import { test, expect} from '@playwright/test';

test("Should load homepage with correct title", async ({ page }) => {
  //Navidate to the homepage
  await page.goto("https://katalon-demo-cura.herokuapp.com/");
  //Assert the title of the page
  await expect(page).toHaveTitle("CURA Healthcare Service");
  //Assert the header text
  await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");
});