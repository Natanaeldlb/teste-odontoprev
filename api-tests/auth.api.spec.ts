import { test, expect, request } from '@playwright/test';

test.describe('API - Autenticação DummyJSON', () => {

  test('@smoke - Login via API com credenciais válidas', async () => {
    const context = await request.newContext({
      baseURL: 'https://dummyjson.com',
    });

    const response = await context.post('/auth/login', {
      data: {
        username: 'emilys',
        password: 'emilyspass',
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toHaveProperty('accessToken');
    expect(body).toHaveProperty('username');
  });

  test('Login via API com credenciais inválidas', async () => {
    const context = await request.newContext({
      baseURL: 'https://dummyjson.com',
    });

    const response = await context.post('/auth/login', {
      data: {
        username: 'usuarioinvalido',
        password: 'senhaerrada',
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    expect(response.status()).toBe(400);
    const body = await response.json();
    expect(body).toHaveProperty('message');
  });

});