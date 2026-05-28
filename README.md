```markdown
# 🧪 Automação de Testes E2E — SauceDemo

Projeto de automação de testes desenvolvido como prova técnica, utilizando **Playwright + TypeScript** com arquitetura **Page Object Model (POM)** separado em Elements e Actions.

---

## 🛠️ Tecnologias

- [Playwright](https://playwright.dev/) — Framework de automação E2E
- [TypeScript](https://www.typescriptlang.org/) — Linguagem tipada
- [Node.js](https://nodejs.org/) — Ambiente de execução
- [GitHub Actions](https://github.com/features/actions) — Pipeline CI/CD

---

## 📁 Estrutura do Projeto

```
teste-odontoprev/
├── pages/
│   ├── elements/          # Seletores (locators) de cada página
│   │   ├── LoginElements.ts
│   │   ├── SearchElements.ts
│   │   └── CartElements.ts
│   └── actions/           # Ações de cada página
│       ├── LoginActions.ts
│       ├── SearchActions.ts
│       └── CartActions.ts
├── tests/                 # Testes E2E
│   ├── login.spec.ts
│   ├── search.spec.ts
│   └── cart.spec.ts
├── api-tests/             # Testes de API
│   └── auth.api.spec.ts
├── fixtures/              # Setup compartilhado
│   └── index.ts
├── .github/workflows/     # Pipeline CI/CD
│   └── ci.yml
├── playwright.config.ts
└── package.json
```

---

## ✅ Cenários Cobertos

### 🔐 Login
- Login com sucesso
- Login com credenciais inválidas
- Login com campos vazios

### 📦 Listagem de Produtos
- Exibir lista de produtos
- Ordenar produtos por menor preço
- Clicar no primeiro produto

### 🛒 Carrinho
- Adicionar produto ao carrinho
- Verificar produto no carrinho
- Verificar carrinho vazio

### 🌐 API
- Login via API com credenciais válidas
- Login via API com credenciais inválidas

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js v18+
- npm

### Instalação
```bash
npm install
npx playwright install chromium
```

### Executar todos os testes
```bash
npx playwright test
```

### Executar só os testes E2E
```bash
npx playwright test tests/
```

### Executar só os testes de API
```bash
npx playwright test api-tests/
```

### Executar testes smoke
```bash
npx playwright test --grep @smoke
```

### Executar com navegador visível
```bash
npx playwright test --headed
```

### Ver relatório
```bash
npx playwright show-report
```

---

## 🔄 Pipeline CI/CD

O projeto possui integração com **GitHub Actions** que executa automaticamente todos os testes a cada `push` ou `pull request` na branch `main`.

O relatório HTML é salvo como artefato por 7 dias após cada execução.

---

## 🌐 Aplicações Utilizadas

| Tipo | URL |
|------|-----|
| E2E | [SauceDemo](https://www.saucedemo.com) |
| API | [DummyJSON](https://dummyjson.com) |
```