import { test, expect } from '@playwright/test';
import { LoginActions } from '../pages/actions/loginActions';
import { LoginElements } from '../pages/elements/loginElements';

test.describe('Login SauceDemo', () => {

  test('@smoke - Login com sucesso', async ({ page }) => {
    const actions = new LoginActions(page);
    const elements = new LoginElements(page);

    await actions.goto();
    await actions.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory/);
  });

  test('Login com credenciais inválidas', async ({ page }) => {
    const actions = new LoginActions(page);
    const elements = new LoginElements(page);

    await actions.goto();
    await actions.login('usuario_invalido', 'senha_errada');

    await expect(elements.errorMessage).toBeVisible();
  });

  test('Login com campos vazios', async ({ page }) => {
    const actions = new LoginActions(page);
    const elements = new LoginElements(page);

    await actions.goto();
    await actions.clickLoginButton();

    await expect(elements.errorMessage).toBeVisible();
  });

});