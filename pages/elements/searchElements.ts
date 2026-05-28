import { Page } from '@playwright/test';

export class SearchElements {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get productList() {
    return this.page.locator('[data-test="inventory-item-name"]');
  }

  get firstProduct() {
    return this.page.locator('[data-test="inventory-item-name"]').first();
  }

  get productPrice() {
    return this.page.locator('[data-test="inventory-item-price"]').first();
  }

  get sortContainer() {
    return this.page.locator('[data-test="product-sort-container"]');
  }
}