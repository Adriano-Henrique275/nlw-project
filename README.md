# Projeto Fullstack: React Native, ReactJS e NodeJS

**Descrição:**

Este projeto consiste em três aplicações interligadas que formam um sistema completo:

- **Mobile:** Um aplicativo móvel desenvolvido com React Native e Expo, que oferece uma interface intuitiva para os usuários interagirem com o sistema.
- **Backend:** Uma API RESTful robusta construída com NodeJS, responsável por gerenciar dados e lógica de negócio da aplicação.
- **Web:** Uma aplicação web moderna e responsiva desenvolvida com ReactJS, que fornece outra interface para os usuários acessarem o sistema.

**Tecnologias:**

- **Front-end:**
  - React Native
  - Expo
  - ReactJS
- **Back-end:**
  - NodeJS
  - Fastify
  - Prisma
  - SQLite
- **Outras:**
  - Git
  - GitHub
  - Typescript
  - Postman
  - Swagger

**Funcionalidades:**

- **Objetivo do Projeto**
  Prisma ORM: O Prisma ORM foi integrado para gerenciar o banco de dados de forma mais eficiente e segura.
  Swagger: A documentação da API agora é gerada automaticamente com Swagger, facilitando a consulta e o uso da API.

**Instalação:**

**1. Clone o repositório:**

```bash
git clone https://github.com/Adriano-Henrique275/nlw-project.git
```

**2. Instale as dependências:**

**Backend:**

```bash
cd server
npm install prisma fastify @fastify/swagger @fastify/swagger-ui
npx prisma migrate

```

**Mobile:**

```bash
cd mobile
npm install
```

**Web:**

```bash
cd pass-in-web
npm install
```

**3. Rode as aplicações:**

**Backend:**

```bash
npm start
```

**Mobile:**

```bash
expo start
```

**Web:**

```bash
npm start
```

**4. Acesse as aplicações:**

- **Mobile:** Utilize o Expo para visualizar o aplicativo em seu dispositivo móvel ou em um simulador.
- **Web:** Acesse `http://localhost:3000` em seu navegador.

A documentação da API Swagger estará disponível em `http://localhost:3000/api/docs`.

## Documentação

Para mais informações sobre o Prisma ORM, consulte a documentação oficial: `https://www.prisma.io/orm`
Para mais informações sobre o Fastify, consulte a documentação oficial: `https://fastify.dev/`
Para mais informações sobre o Swagger, consulte a documentação oficial: `https://swagger.io/docs/`

**Contribuição:**

Sinta-se à vontade para contribuir com este projeto! Envie suas sugestões, pull requests e issues no GitHub.

**Licença:**

Este projeto está licenciado sob a licença MIT.
