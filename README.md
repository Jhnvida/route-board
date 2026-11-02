# Route Board — Dashboard de Rotas

Painel interativo e laboratório prático focado na exploração de padrões modernos de navegação com **React Router 8**, **TypeScript** e **Tailwind CSS v4**, contemplando rotas dinâmicas, layouts compartilhados, rotas protegidas e tratamento resiliente de páginas não encontradas.

---

[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![React Router 8](https://img.shields.io/badge/React_Router-8.4-CA4245?style=flat&logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=flat&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.3-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Oxlint](https://img.shields.io/badge/Linter-Oxlint-orange?style=flat&logo=oxc&logoColor=white)](https://oxc.rs/)
[![pnpm](https://img.shields.io/badge/Package_Manager-pnpm-F69220?style=flat&logo=pnpm&logoColor=white)](https://pnpm.io/)
[![Licença Privada](https://img.shields.io/badge/License-Privado-lightgrey?style=flat)](#licença)

---

## Sumário

- [Visão Geral](#visão-geral)
- [Funcionalidades Principais](#funcionalidades-principais)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Mapa de Rotas](#mapa-de-rotas)
- [Autenticação e Credenciais de Teste](#autenticação-e-credenciais-de-teste)
- [Pré-requisitos](#pré-requisitos)
- [Instalação e Execução](#instalação-e-execução)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Padrões de Versionamento](#padrões-de-versionamento)
- [Licença](#licença)

---

## Visão Geral

O **Route Board** foi desenvolvido com a finalidade de atuar como laboratório arquitetural para o **React Router 8**. Ele consolida boas práticas na construção de sistemas corporativos baseados em painéis de controle (_dashboards_), demonstrando na prática:

- Como estruturar fluxos de autenticação desacoplados com preservação de estado da rota original.
- Como consumir parâmetros de URL dinâmicos (`/courses/:id`) mantendo resiliência contra IDs inexistentes.
- Como aplicar layouts aninhados com componentes `<Outlet />` e navegação declarativa.
- Adoção de uma identidade visual brutalista moderna orientada a blocos coloridos e sombras sólidas com Tailwind CSS v4.

---

## Funcionalidades Principais

- **Dashboard Principal (`/dashboard`):** Visão centralizada com catálogo de cursos disponíveis, acompanhamento de progresso de aprendizado e grade cronológica de aulas.
- **Página de Detalhes Dinâmica (`/courses/:id`):** Resolução de dados via parâmetros de URL utilizando o hook `useParams`, apresentando ementa completa, dados do instrutor e métricas da grade horária.
- **Tratamento de Item Inexistente:** Interceptação automática de identificadores inválidos no catálogo, exibindo mensagens amigáveis e ações de retorno sem quebrar o ciclo da aplicação.
- **Autenticação Simulada (`/login`):** Tela de login com emulação de latência de rede, validações de formato e opção "Lembrar de mim" (persistência alternada entre `localStorage` e `sessionStorage`).
- **Barreira de Rotas Protegidas (`ProtectedRoute`):** Controle de acesso que bloqueia usuários desautenticados e grava a rota requisitada (`location.state.from`) para redirecionamento imediato após o login.
- **Layout Compartilhado (`RootLayout`):** Barra superior unificada com indicador de rota ativa, dados de perfil e container renderizador `<Outlet />`.
- **Tratamento Global de Erro 404 (`NotFound`):** Rota curinga (`*`) para interceptar qualquer endereço não mapeado com navegação simplificada de retorno.

---

## Tecnologias Utilizadas

### Frontend & Roteamento

- **[React 19](https://react.dev/):** Biblioteca para interfaces com compilação pelo React Compiler.
- **[React Router 8](https://reactrouter.com/):** Sistema declarativo e robusto de roteamento dinâmico.
- **[TypeScript](https://www.typescriptlang.org/):** Tipagem estática fim a fim em todas as camadas da aplicação.
- **[Tailwind CSS v4](https://tailwindcss.com/):** Novo motor atômico de estilos integrado diretamente ao Vite (`@tailwindcss/vite`).
- **[Lucide React](https://lucide.dev/):** Iconografia consistente para controles e navegação.

### Tooling & Build

- **[Vite 8](https://vite.dev/):** Servidor de desenvolvimento ultrarrápido e empacotamento para produção.
- **[pnpm](https://pnpm.io/):** Gerenciador de dependências eficiente e determinístico.
- **[Oxlint](https://oxc.rs/):** Linter de alta performance focado na padronização e sanidade do código.

---

## Estrutura do Projeto

```text
route-board/
├── public/                 # Recursos públicos e manifestos
├── src/
│   ├── components/         # Componentes visuais
│   │   ├── ui/             # Primitivas de interface (Button, Input, UserAvatar)
│   │   ├── CourseCard.tsx  # Cartão individual do catálogo
│   │   ├── CourseProgressList.tsx # Lista de progresso dos cursos
│   │   ├── Header.tsx      # Barra de navegação unificada
│   │   ├── ProtectedRoute.tsx # Guard de proteção de rotas
│   │   └── TimetableList.tsx  # Grade cronológica de horários
│   ├── context/            # Contexto e provedor de autenticação (AuthContext)
│   ├── data/               # Base de dados em memória simulada (courses.ts)
│   ├── hooks/              # Hooks customizados da aplicação (useAuth.ts)
│   ├── layouts/            # Componentes estruturais e layouts base (RootLayout.tsx)
│   ├── pages/              # Telas da aplicação (Dashboard, ItemDetails, Login, NotFound, Placeholder)
│   ├── styles/             # Folha de estilos globais com diretivas do Tailwind v4
│   ├── types/              # Definições de interfaces do domínio
│   ├── utils/              # Formatadores de moeda, porcentagem e datas
│   ├── App.tsx             # Definição declarativa da árvore de rotas
│   └── main.tsx            # Ponto de entrada da aplicação
├── .oxlintrc.json          # Configuração de regras do Oxlint
├── package.json            # Manifesto de dependências e scripts pnpm
├── pnpm-lock.yaml          # Bloqueio de versões do pnpm
├── tsconfig.json           # Configuração do compilador TypeScript
└── vite.config.ts          # Configuração do Vite e Tailwind CSS v4
```

---

## Mapa de Rotas

| Rota           |       Tipo       | Acesso  | Componente                     | Descrição                                          |
| -------------- | :--------------: | :-----: | ------------------------------ | -------------------------------------------------- |
| `/login`       |     Estática     | Público | `Login`                        | Autenticação com suporte a "Lembrar de mim".       |
| `/`            | Redirecionamento | Privado | `<Navigate to="/dashboard" />` | Redirecionamento automático da raiz para o painel. |
| `/dashboard`   |     Estática     | Privado | `Dashboard`                    | Painel central com lista de cursos e horários.     |
| `/courses/:id` |     Dinâmica     | Privado | `ItemDetails`                  | Detalhes do curso lidos via `useParams`.           |
| `/courses`     |     Estática     | Privado | `Placeholder`                  | Seção em desenvolvimento do catálogo geral.        |
| `/calendar`    |     Estática     | Privado | `Placeholder`                  | Seção em desenvolvimento de calendário.            |
| `/community`   |     Estática     | Privado | `Placeholder`                  | Seção em desenvolvimento da comunidade.            |
| `*`            |     Curinga      | Público | `NotFound`                     | Tela amigável de erro 404 para rotas não mapeadas. |

---

## Autenticação e Credenciais de Teste

A aplicação trabalha com autenticação simulada para fins didáticos:

- **E-mail sugerido:** `john.doe@routeboard.dev` (ou qualquer formato de e-mail válido).
- **Senha:** Qualquer combinação de caracteres.
- **Lembrar de mim:** Ativado armazena a sessão no `localStorage`; desativado armazena temporariamente no `sessionStorage`.

---

## Pré-requisitos

Para executar o projeto localmente, certifique-se de possuir:

- [Node.js](https://nodejs.org/) (versão 20.0.0 ou superior recomendada)
- [pnpm](https://pnpm.io/) (versão 10 ou superior recomendada)

---

## Instalação e Execução

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/Jhnvida/route-board.git
    cd route-board
    ```

2. **Instale as dependências:**

    ```bash
    pnpm install
    ```

3. **Inicie o servidor de desenvolvimento:**

    ```bash
    pnpm dev
    ```

4. **Acesse no navegador:**
   Abra [http://localhost:5173](http://localhost:5173).

> **Nota:** Este projeto opera inteiramente em memória e armazenamento do navegador, não necessitando de arquivos `.env` ou chaves de API externas.

---

## Scripts Disponíveis

| Comando        | Descrição                                                                  |
| -------------- | -------------------------------------------------------------------------- |
| `pnpm dev`     | Inicia o servidor de desenvolvimento do Vite com HMR.                      |
| `pnpm build`   | Realiza a checagem de tipos (`tsc -b`) e compila para produção em `dist/`. |
| `pnpm preview` | Inicia um servidor HTTP local para inspeção do pacote de produção.         |
| `pnpm lint`    | Executa a verificação estática de código com o Oxlint.                     |

---

## Padrões de Versionamento

Este repositório adota a especificação [Conventional Commits](https://www.conventionalcommits.org/pt-br/):

- `feat:` Novas rotas, páginas ou componentes visuais.
- `fix:` Correções em navegação, redirecionamentos ou layout.
- `docs:` Melhorias e atualizações na documentação técnica.
- `style:` Ajustes nas paletas, sombras e formatação sem efeito comportamental.
- `refactor:` Reorganização da arquitetura de rotas ou componentes.
- `chore:` Atualizações nas ferramentas de desenvolvimento ou dependências.

---

## Licença

Este projeto é de natureza estritamente pessoal e educacional. Não possui concessão de licença pública para fins comerciais. Todos os direitos reservados.
