import { Page } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly productItems;
  readonly cartIcon;

  constructor(page: Page) {
    this.page = page;
    this.productItems = page.locator('.inventory_item');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  // Select product by index (nth product)
  async addProductByIndex(index: number) {
    const product = this.productItems.nth(index);
    await product.locator('button').click();
  }
  

  async goToCart() {
    await this.cartIcon.click();
  }
}
