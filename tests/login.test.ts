import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { credentials } from '../utils/testUtils';

test('Login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  await loginPage.goto();
  await loginPage.login(credentials.username, credentials.password);

  // Verify successful login by checking product page
  await expect(productsPage.productItems.first()).toBeVisible();
});
