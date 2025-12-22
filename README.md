# 💼 Job Posting Platform

Uma aplicação **full stack moderna** para criação e candidatura de vagas de emprego, desenvolvida com **Next.js, TypeScript, Prisma e PostgreSQL**, focada em boas práticas, organização de código e autenticação segura.

🔗 **Repositório:** https://github.com/7alexandree7/job-posting-website

---

## 🚀 Visão Geral

Esta plataforma permite que usuários autenticados criem vagas de emprego, se candidatem a vagas publicadas por outros usuários e acompanhem tudo através de um dashboard completo. O projeto foi desenvolvido utilizando ferramentas modernas do ecossistema React e Next.js, seguindo padrões reais de aplicações em produção.

A autenticação é realizada via **GitHub OAuth**, com gerenciamento de sessão utilizando **JWT**, garantindo segurança e controle de acesso em todas as funcionalidades sensíveis da aplicação.

---

## ✨ Funcionalidades

- Login com GitHub (OAuth)
- Gerenciamento de sessão com JWT
- Criação de vagas de emprego
- Candidatura a vagas
- Dashboard do usuário
  - Vagas criadas
  - Vagas aplicadas
- Proteção de rotas no backend
- Queries avançadas com Prisma
- Interface moderna e responsiva

---

## 🧠 Tecnologias Utilizadas

- Next.js (App Router)
- React
- TypeScript
- Prisma ORM
- PostgreSQL
- NextAuth
- JWT
- GitHub OAuth
- Tailwind CSS
- Vercel

---

## 🗂 Estrutura do Projeto

O projeto segue uma estrutura organizada e escalável:

- `app/` — Páginas, layouts e rotas (App Router)
- `app/api/` — Rotas de API
- `lib/` — Prisma, autenticação e helpers
- `components/` — Componentes reutilizáveis
- `prisma/` — Schema e migrações do banco
- `auth.ts` — Configuração do NextAuth

Essa separação facilita manutenção, leitura e evolução do código.

---

## 🔐 Autenticação e Sessão

A autenticação é feita com **GitHub OAuth** utilizando **NextAuth**.  
As sessões são gerenciadas via **JWT**, permitindo controle de acesso seguro no frontend e backend.

Somente usuários autenticados podem:
- Criar vagas
- Se candidatar a vagas
- Acessar o dashboard

---

## 🧩 Banco de Dados

A aplicação utiliza **PostgreSQL** com modelagem relacional via **Prisma**.  
O projeto trabalha com relacionamentos entre usuários, vagas e candidaturas, além de filtros, ordenações e contagens diretamente nas queries.

---

## ⚙️ Variáveis de Ambiente

O projeto utiliza as seguintes variáveis de ambiente:

- `DATABASE_URL`
- `AUTH_GITHUB_ID`
- `AUTH_GITHUB_SECRET`
- `AUTH_SECRET`

Essas variáveis devem ser configuradas localmente e também no ambiente de deploy.

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com foco em aprendizado prático e aplicação real de conceitos full stack, incluindo autenticação, banco de dados relacional, regras de negócio e organização de código.

---

## 👨‍💻 Autor

Desenvolvido por **Pedro machado**  

---

## ⭐ Considerações Finais

Este projeto representa uma aplicação completa, com fluxo real de autenticação, criação de dados e interação entre usuários.

Se achou interessante, deixe uma ⭐ no repositório!
