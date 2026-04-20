import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { credentials } from '../utils/testUtils';

test('Add first 3 products to cart by index', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const numberOfProducts = 3;  // Define how many products you want to add


  await loginPage.goto();
  await loginPage.login(credentials.username, credentials.password);

  // Loop through first N products
  for (let i = 0; i < numberOfProducts; i++) {
    await productsPage.addProductByIndex(i);
  }

  // Go to cart
  await productsPage.goToCart();

  // Verify cart items count
  const count = await cartPage.getCartItemsCount();
  expect(count).toBe(numberOfProducts);
});