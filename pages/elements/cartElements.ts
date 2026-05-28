import { Page } from '@playwright/test';

export class CartElements {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get addToCartButton() {
    return this.page.locator('[data-test="add-to-cart"]');
  }

  get cartIcon() {
    return this.page.locator('[data-test="shopping-cart-link"]');
  }

  get cartCounter() {
    return this.page.locator('[data-test="shopping-cart-badge"]');
  }

  get cartItems() {
    return this.page.locator('[data-test="inventory-item"]');
  }

  get emptyCartMessage() {
    return this.page.locator('[data-test="cart-list"]');
  }
}