import { Page } from '@playwright/test';
import { CartElements } from '../elements/cartElements';

export class CartActions {
  readonly page: Page;
  readonly elements: CartElements;

  constructor(page: Page) {
    this.page = page;
    this.elements = new CartElements(page);
  }

  async clickAddToCart() {
    await this.elements.addToCartButton.click();
  }

  async clickCartIcon() {
    await this.elements.cartIcon.click();
  }

  async goToCart() {
    await this.page.goto('/cart.html');
  }
}