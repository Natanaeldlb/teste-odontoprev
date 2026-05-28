import { test, expect } from '@playwright/test';
import { LoginActions } from '../pages/actions/loginActions';
import { SearchActions } from '../pages/actions/searchActions';
import { SearchElements } from '../pages/elements/searchElements';

test.describe('Listagem de Produtos SauceDemo', () => {

  test('@smoke - Exibir lista de produtos', async ({ page }) => {
    const loginActions = new LoginActions(page);
    const searchActions = new SearchActions(page);
    const searchElements = new SearchElements(page);

    await loginActions.goto();
    await loginActions.login('standard_user', 'secret_sauce');
    await searchActions.goto();

    await expect(searchElements.productList).not.toHaveCount(0);
  });

  test('Ordenar produtos por menor preço', async ({ page }) => {
    const loginActions = new LoginActions(page);
    const searchActions = new SearchActions(page);

    await loginActions.goto();
    await loginActions.login('standard_user', 'secret_sauce');
    await searchActions.goto();
    await searchActions.sortBy('lohi');

    await expect(page).toHaveURL(/inventory/);
  });

  test('Clicar no primeiro produto', async ({ page }) => {
    const loginActions = new LoginActions(page);
    const searchActions = new SearchActions(page);

    await loginActions.goto();
    await loginActions.login('standard_user', 'secret_sauce');
    await searchActions.goto();
    await searchActions.clickFirstProduct();

    await expect(page).toHaveURL(/inventory-item/);
  });

});