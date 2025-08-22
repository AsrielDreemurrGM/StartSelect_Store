<h1>StartSelect Store</h1>
<p>
  This README is also available in <a href="./README.md">English</a>.
</p>
<p>
  Uma loja digital de jogos desenvolvida com <strong>React</strong> e <strong>TypeScript</strong>, que se integra a <strong>minha API customizada mantida por mim</strong> utilizando <strong>RTK Query</strong>. Oferece uma experiência completa de compra e finalização de pedido, com design responsivo, validação de formulários, máscaras de entrada e boas práticas de acessibilidade. A API agora suporta o retorno de um jogo em destaque aleatório e busca de detalhes de jogos por ID.
</p>
<h2>🛍️ Visão Geral do Projeto</h2>
<p>
  A StartSelect Store permite que os usuários naveguem e comprem jogos digitais. Os principais recursos incluem:
</p>
<ul>
  <li>Lista dinâmica de jogos obtida da <strong>minha API customizada</strong> usando <strong>RTK Query</strong>;</li>
  <li>Jogo em destaque retornado aleatoriamente a cada carregamento (IDs 2, 5, 12 e 14);</li>
  <li>Detalhes de jogos acessíveis via endpoint <code>jogos/{id}</code> para IDs de 1 a 19;</li>
  <li>Páginas de produto com descrições detalhadas e imagens;</li>
  <li>Gerenciamento do carrinho com funcionalidades de adicionar/remover itens;</li>
  <li>Checkout em múltiplas etapas com validação usando <strong>Formik</strong> e <strong>Yup</strong>;</li>
  <li>Máscaras de entrada para formatação de CPF e cartão de crédito;</li>
  <li>Indicadores de carregamento com <strong>react-spinners</strong>;</li>
  <li>Design responsivo e mobile-first;</li>
  <li>Estrutura HTML acessível e semântica.</li>
</ul>
<h2>🌐 Endpoint da API</h2>
<p>
  Todos os dados são obtidos da <strong>minha API customizada do StartSelect</strong>:
  <pre><code>https://start-select-api.vercel.app/</code></pre>
</p>
<h2>🚀 Tecnologias Utilizadas</h2>
<ul>
  <li>React</li>
  <li>TypeScript</li>
  <li>Styled Components</li>
  <li>React Router DOM</li>
  <li>RTK Query</li>
  <li>Formik + Yup</li>
  <li>React Input Mask</li>
  <li>React Spinners</li>
</ul>
<h2>🧪 Como Executar o Projeto</h2>
<ol>
  <li>Clone o repositório:
    <pre><code>git clone https://github.com/AsrielDreemurrGM/StartSelect_Store.git</code></pre>
  </li>
  <li>Instale as dependências:
    <pre><code>npm install</code></pre>
    ou
    <pre><code>yarn install</code></pre>
  </li>
  <li>Inicie o servidor de desenvolvimento:
    <pre><code>npm run dev</code></pre>
    ou
    <pre><code>yarn dev</code></pre>
  </li>
</ol>
<h2>🔗 Demonstração Online</h2>
<p>
  Você pode acessar a versão publicada do projeto aqui:<br>
  <a href="https://start-select-store.vercel.app" target="_blank">https://start-select-store.vercel.app</a>
</p>
<h2>📂 Estrutura de Pastas</h2>
<pre><code>
src/
├── components/        # Componentes reutilizáveis de UI
├── pages/             # Componentes de página para roteamento
├── services/          # Slices da API com RTK Query
├── styles/            # Estilos globais e tema
├── utils/             # Funções auxiliares e máscaras
├── types/             # Definições de tipos TypeScript
└── App.tsx            # Estrutura principal da aplicação
</code></pre>
<h2>📝 Observações</h2>
<ul>
  <li>A página de checkout não realiza pagamentos reais, é apenas uma simulação;</li>
  <li>As chamadas de API agora utilizam <strong>minha API customizada</strong> com arquivos JSON estáticos e lógica dinâmica para jogos em destaque.</li>
</ul>
<h2>📌 Destaques dos Commits</h2>
<ul>
  <li><strong>Página de Checkout</strong> – Adicionadas validações, máscaras de entrada e renderização dinâmica do resumo do carrinho;</li>
  <li><strong>Gerenciamento do Carrinho</strong> – Lógica de adicionar/remover itens e controle de quantidade implementados;</li>
  <li><strong>Listagem de Produtos</strong> – Integração com RTK Query para buscar e exibir produtos da <strong>minha API customizada</strong>;</li>
  <li><strong>Carregamento e Feedback</strong> – Indicadores de loading e UI de fallback em caso de erro adicionados.</li>
</ul>
