# Route Board — Dashboard de Rotas

Painel interativo e laboratório prático focado na exploração de padrões modernos de navegação com **React Router**, **TypeScript** e **Tailwind CSS**. A aplicação explora conceitos de rotas dinâmicas com parâmetros de URL, layouts compartilhados, rotas aninhadas, proteção de rotas com autenticação simulada e tratamento resiliente de páginas e itens não encontrados.

## Funcionalidades

- **Dashboard Principal (`/dashboard`)**: Visão consolidada com catálogo de cursos disponíveis, indicadores de progresso individual e grade de horários síncronos.
- **Página de Detalhes Dinâmica (`/courses/:id`)**: Rota baseada em parâmetros de URL (`useParams`) com apresentação completa do curso, ementa, dados do instrutor, aulas agendadas e métricas de carga horária.
- **Tratamento de Item Inexistente**: Detecção automática de IDs não cadastrados na rota de detalhes, exibindo estado amigável sem quebrar o fluxo da aplicação.
- **Autenticação Simulada (`/login`)**: Formulário de acesso com simulação de latência de rede, validações e opção "Lembrar de mim", persistindo a sessão via `localStorage` ou `sessionStorage`.
- **Rotas Protegidas (`ProtectedRoute`)**: Barreira de autenticação que intercepta acessos não autorizados e preserva a rota original (`location.state.from`) para redirecionamento inteligente pós-login.
- **Layout Compartilhado (`RootLayout`)**: Estrutura unificada com cabeçalho fixo, indicador de rota ativa, dados da conta do usuário e `<Outlet />` para renderização das telas filhas.
- **Página 404 Customizada (`NotFound`)**: Captura global de rotas inexistentes (`*`) com direcionamento rápido de volta ao painel.
- **Design System Consistente**: Interface construída com paleta brutalista suave, sombras duras coloridas e botões com área de clique confortável e acessível.

## Tecnologias Utilizadas

- **Frontend:**
    - [React 19](https://react.dev/)
    - [React Router 8](https://reactrouter.com/) para roteamento declarativo e rotas dinâmicas
    - [TypeScript](https://www.typescriptlang.org/) para tipagem estática ponta a ponta
    - [Tailwind CSS v4](https://tailwindcss.com/) para estilização utilitária moderna
    - [Lucide React](https://lucide.dev/) para iconografia da interface
- **Ferramentas & Build:**
    - [Vite 8](https://vite.dev/) como empacotador e servidor de desenvolvimento
    - [pnpm](https://pnpm.io/) como gerenciador de pacotes
    - [Oxlint](https://oxc.rs/) para análise estática e padronização de código em alta velocidade

## Estrutura do Projeto

A organização de diretórios dentro de `src/` segue uma divisão clara por responsabilidades:

- `/components`: Componentes visuais do dashboard (`CourseCard`, `CourseProgressList`, `Header`, `ProtectedRoute`, `TimetableList`) e primitivas de interface em `/ui` (`Button`, `Input`, `PasswordInput`, `UserAvatar`).
- `/context`: Contexto e provedor de autenticação (`AuthContext` e `AuthProvider`).
- `/data`: Base de dados estática simulada para cursos, horários e temas visuais (`courses.ts`).
- `/hooks`: Hooks customizados para consumo de contextos e utilidades (`useAuth.ts`).
- `/layouts`: Componentes de estrutura compartilhada (`RootLayout.tsx`).
- `/pages`: Telas e visões da aplicação (`Dashboard`, `ItemDetails`, `Login`, `NotFound`, `Placeholder`).
- `/styles`: Folha de estilos globais e configurações de tema do Tailwind CSS (`globals.css`).
- `/types`: Definições de interfaces e tipos TypeScript de todo o domínio da aplicação.
- `/utils`: Formatadores de data, hora, moeda e porcentagem.

## Mapa de Rotas

| Rota           |       Tipo       | Proteção |           Componente           | Descrição                                                       |
| :------------- | :--------------: | :------: | :----------------------------: | :-------------------------------------------------------------- |
| `/login`       |     Estática     | Pública  |            `Login`             | Tela de autenticação simulada com suporte a "Lembrar de mim".   |
| `/`            | Redirecionamento | Privada  | `<Navigate to="/dashboard" />` | Redireciona a raiz automaticamente para o painel principal.     |
| `/dashboard`   |     Estática     | Privada  |          `Dashboard`           | Painel central com lista de cursos, grade de aulas e progresso. |
| `/courses/:id` |     Dinâmica     | Privada  |         `ItemDetails`          | Detalhes do curso consumindo o parâmetro `:id` via `useParams`. |
| `/courses`     |     Estática     | Privada  |         `Placeholder`          | Seção de catálogo complementar em desenvolvimento.              |
| `/calendar`    |     Estática     | Privada  |         `Placeholder`          | Seção de calendário complementar em desenvolvimento.            |
| `/community`   |     Estática     | Privada  |         `Placeholder`          | Espaço de comunidade complementar em desenvolvimento.           |
| `*`            |     Curinga      | Pública  |           `NotFound`           | Página 404 para qualquer URL não mapeada.                       |

## Autenticação e Credenciais de Teste

A aplicação simula uma sessão de usuário persistente com os seguintes dados:

- **E-mail sugerido:** `john.doe@routeboard.dev` (ou qualquer e-mail no formato correto)
- **Senha:** Qualquer sequência de caracteres
- **Lembrar de mim:** Quando ativado, salva a sessão no `localStorage`; desativado, mantém apenas no `sessionStorage`.

## Pré-requisitos

Antes de iniciar, você precisará ter instalado em sua máquina:

- [Node.js](https://nodejs.org/en/) (recomendado versão 20 ou superior)
- Gerenciador de pacotes [pnpm](https://pnpm.io/) (versão 10 ou superior recomendada) ou gerenciadores equivalentes (`npm`, `yarn`)

## Instalação e Configuração

1. Clone o repositório:

    ```bash
    git clone https://github.com/Jhnvida/route-board.git
    ```

2. Acesse a pasta do projeto:

    ```bash
    cd route-board
    ```

3. Instale as dependências:

    ```bash
    pnpm install
    ```

> **Nota:** Este projeto não requer chaves de API externas ou variáveis de ambiente para execução local.

## Como Executar

Para iniciar o servidor de desenvolvimento, execute o comando:

```bash
pnpm dev
```

Acesse a aplicação no seu navegador padrão em `http://localhost:5173`.

### Outros Scripts Disponíveis

- `pnpm build`: Cria a versão de produção otimizada com checagem de tipos (`tsc -b && vite build`).
- `pnpm preview`: Inicializa um servidor local para visualizar o build de produção.
- `pnpm lint`: Executa a verificação estática do código com o Oxlint.

## Como Usar

- **Tela de Login (`/login`)**: Realize o acesso com qualquer credencial de teste para desbloquear as rotas privadas.
- **Painel Geral (`/dashboard`)**: Explore os cursos disponíveis nos cards superiores, a grade de horários com instrutores e a listagem de progresso.
- **Detalhes do Curso (`/courses/:id`)**: Clique em qualquer card de curso ou lição na grade para abrir a página detalhada daquele item, visualizando informações completas do curso.
- **Tratamento de Item Inexistente (`/courses/id-invalido`)**: Digite uma URL com ID aleatório para visualizar o estado amigável de item não encontrado.
- **Página 404 (`*`)**: Digite qualquer caminho desconhecido (ex.: `/rota-inexistente`) para testar a página de erro global.
- **Logout**: Clique no ícone de saída no canto superior direito para limpar a sessão e retornar à tela de autenticação.
