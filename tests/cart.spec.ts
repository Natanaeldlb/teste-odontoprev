import { test, expect } from '@playwright/test';
import { LoginActions } from '../pages/actions/loginActions';
import { SearchActions } from '../pages/actions/searchActions';
import { CartActions } from '../pages/actions/cartActions';
import { CartElements } from '../pages/elements/cartElements';

test.describe('Carrinho SauceDemo', () => {

  test('@smoke - Adicionar produto ao carrinho', async ({ page }) => {
    const loginActions = new LoginActions(page);
    const searchActions = new SearchActions(page);
    const cartActions = new CartActions(page);
    const cartElements = new CartElements(page);

    await loginActions.goto();
    await loginActions.login('standard_user', 'secret_sauce');
    await searchActions.goto();
    await searchActions.clickFirstProduct();
    await cartActions.clickAddToCart();

    await expect(cartElements.cartCounter).toBeVisible();
    await expect(cartElements.cartCounter).toHaveText('1');
  });

  test('Verificar produto no carrinho', async ({ page }) => {
    const loginActions = new LoginActions(page);
    const searchActions = new SearchActions(page);
    const cartActions = new CartActions(page);
    const cartElements = new CartElements(page);

    await loginActions.goto();
    await loginActions.login('standard_user', 'secret_sauce');
    await searchActions.goto();
    await searchActions.clickFirstProduct();
    await cartActions.clickAddToCart();
    await cartActions.clickCartIcon();

    await expect(cartElements.cartItems).toHaveCount(1);
  });

  test('Verificar carrinho vazio', async ({ page }) => {
    const loginActions = new LoginActions(page);
    const cartActions = new CartActions(page);
    const cartElements = new CartElements(page);

    await loginActions.goto();
    await loginActions.login('standard_user', 'secret_sauce');
    await cartActions.goToCart();

    await expect(cartElements.cartItems).toHaveCount(0);
  });

});