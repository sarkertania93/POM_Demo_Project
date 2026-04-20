import { Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartItems;

  constructor(page: Page) {
    this.page = page;
    this.cartItems = page.locator('.cart_item');
  }

  async getCartItemsCount() {
    return await this.cartItems.count();
  }
}
