import { Page } from '@playwright/test';
import { LoginElements } from '../elements/loginElements';

export class LoginActions {
  readonly page: Page;
  readonly elements: LoginElements;

  constructor(page: Page) {
    this.page = page;
    this.elements = new LoginElements(page);
  }

  async goto() {
    await this.page.goto('/');
  }

  async fillUsername(username: string) {
    await this.elements.usernameInput.fill(username);
  }

  async fillPassword(password: string) {
    await this.elements.passwordInput.fill(password);
  }

  async clickLoginButton() {
    await this.elements.loginButton.click();
  }

  async login(username: string, password: string) {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLoginButton();
  }
}