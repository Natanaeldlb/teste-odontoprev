import { Page } from '@playwright/test';
import { SearchElements } from '../elements/searchElements';

export class SearchActions {
  readonly page: Page;
  readonly elements: SearchElements;

  constructor(page: Page) {
    this.page = page;
    this.elements = new SearchElements(page);
  }

  async goto() {
    await this.page.goto('/inventory.html');
  }

  async clickFirstProduct() {
    await this.elements.firstProduct.click();
  }

  async sortBy(option: string) {
    await this.elements.sortContainer.selectOption(option);
  }
}