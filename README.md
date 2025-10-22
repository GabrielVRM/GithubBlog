# GithubBlog

⭐ ideia Prinicpal é conseguir fazer requisiçoes APi's e performace dos components, vamos mmedir performace e trabalhar com conceitos e libs que nos ajudam a deixar o sistema mais performatico!!

🚀 Aprendizados:
Json-Server -> permite ter um simulaçao do back-end, ele cria uma API completa a parti do json.

💥 Dependencias:
-> TypeScript
-> styled-components
-> @types/styled-components -D, tipagem do typescript!
-> Json-Server
-> react-Router-dom
rock

## Objetivos

🚀 Desafio: GitHub Blog Explorer
#🎯 1. Objetivo da Aplicação
Construir uma aplicação web dinâmica para simular um blog, utilizando o GitHub como CMS (Sistema de Gerenciamento de Conteúdo). A aplicação deve consumir as APIs do GitHub para exibir dados do perfil de um usuário e listar as Issues de um repositório específico como se fossem posts de blog.

✨ 2. Regras e Funcionalidades Obrigatórias
O projeto será dividido em três grandes módulos de funcionalidade.

I. Perfil do Usuário (Header/Card)
O objetivo é buscar e exibir dados de um perfil específico do GitHub.

Busca de Dados: O sistema deve consumir a GitHub Users API através da rota GET https://api.github.com/users/{username}.

Exibição: O perfil deve ser exibido em um componente (card) contendo: Avatar, Nome, Bio, Username, Quantidade de Seguidores e um Link direto para o GitHub.

II. Lista de Posts (Issues) + Busca
Esta seção simula a página inicial do blog, com listagem e filtro de conteúdo.

Fonte de Posts: Para ter conteúdo, é obrigatório criar um repositório público no GitHub e usar suas Issues como posts do blog.

Busca e Listagem: A listagem deve fazer uma busca paginada utilizando a GitHub Search API. A rota base para a consulta é GET https://api.github.com/search/issues?q={query} repo:{username}/{repo}.

Comportamento da Busca: Quando o campo de busca estiver vazio (sem um termo de filtro), a aplicação deve listar as últimas Issues do repositório configurado.

Mecanismo de Busca: Deve ser implementado um campo de texto que reconsulta a Search API dinamicamente. Para otimizar o desempenho e evitar sobrecarga da API, é altamente recomendado o uso da técnica de Debounce.

Renderização: Cada post na lista deve ser renderizado em um Card contendo: Título, Data Relativa (ex: "Há 3 dias"), um Resumo do Corpo (apenas as primeiras linhas) e Metadados relevantes (como a contagem de comentários).

III. Post (Issue) Completo
Esta seção trata da visualização completa de um post individual.

Roteamento: É obrigatória uma rota dinâmica para o post completo, utilizando o número da Issue como identificador (Ex: /post/:number).

Busca de Detalhes: Os dados específicos da Issue devem ser buscados na GitHub Issues API via a rota GET https://api.github.com/repos/{username}/{repo}/issues/{number}.

Exibição do Corpo: O conteúdo do corpo (body) da Issue, que está em Markdown, deve ser renderizado de forma correta para HTML. Sugere-se o uso de bibliotecas como react-markdown com plugins para formatação.

Cabeçalho do Post: O detalhe do post deve incluir: Título, Link "Ver no GitHub" (para a Issue original), Data de publicação, Autor (username) e Contagem de Comentários.

🛑 3. Regras de Estabilidade e Acessibilidade
Garantir uma experiência de usuário robusta e inclusiva.

Estabilidade e Tratamento de Erros
Tratamento de API: A aplicação deve tratar o limite de requisições da API (Rate Limit). Deve ser exibida uma mensagem amigável e fornecer um fallback (plano B) caso o limite seja atingido.

Estados: É fundamental exibir indicadores claros de Loading e Erro para todas as requisições de dados, informando o usuário sobre o estado da aplicação.

Opcional para Devs: Para evitar problemas com o Rate Limit durante o desenvolvimento, é sugerido configurar um Token Pessoal do GitHub no cabeçalho Authorization: token YOUR_TOKEN.

Roteamento e UX/Acessibilidade (A11Y)
Roteamento: A navegação deve ser gerenciada pelo React Router, com rotas definidas para a Home (/) e o Post (/post/:number).

Navegação de Retorno: Na tela de detalhe do post, deve haver um link ou botão "Voltar" para retornar o usuário à listagem de posts.

Acessibilidade (A11Y): O design deve ser inclusivo: garantir que todos os links e botões possuam rótulos acessíveis (aria-label, etc.), bom contraste de cores e um foco visível ao navegar com o teclado.

## Regras de negocio

[X] - Criar projeto com Vite + React + TypeScript
[x] - Criar página Home
[ ] - Criar página Issue
[ ] - Configurar rotas no react-router-dom
[ ] - Buscar dados do perfil usando GitHub Users API
[ ] - Listar issues de um repositório via GitHub Search API
[ ] - Exibir post completo via GitHub Issues API
[ ] - Tratar rate limit da API
