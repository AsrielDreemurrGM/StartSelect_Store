<h1>StartSelect Store</h1>
<p>
  Este README também está disponível em <a href="./README.pt-br.md">Português</a>.
</p>
<p>
  A digital game store built with <strong>React</strong> and <strong>TypeScript</strong> that integrates with an external API using <strong>RTK Query</strong>. It provides a complete shopping and checkout experience, featuring responsive design, form validation, input masking, and accessibility best practices.
</p>
<h2>🛍️ Project Overview</h2>
<p>
  The StartSelect Store allows users to browse and purchase digital games. Key features include:
</p>
<ul>
  <li>Dynamic game listing fetched from a REST API using <strong>RTK Query</strong>;</li>
  <li>Detailed product pages with descriptions and images;</li>
  <li>Shopping cart management with add/remove functionality;</li>
  <li>Multi-step checkout with form validation using <strong>Formik</strong> and <strong>Yup</strong>;</li>
  <li>Masked inputs for CPF and credit card formatting;</li>
  <li>Loading states using <strong>react-spinners</strong>;</li>
  <li>Mobile-first and responsive design;</li>
  <li>Accessible and semantic HTML structure.</li>
</ul>
<h2>🚀 Technologies Used</h2>
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
<h2>🧪 How to Run the Project</h2>
<ol>
  <li>Clone the repository:
    <pre><code>git clone https://github.com/AsrielDreemurrGM/StartSelect_Store.git</code></pre>
  </li>
  <li>Install dependencies:
    <pre><code>npm install</code></pre>
    or
    <pre><code>yarn install</code></pre>
  </li>
  <li>Start the development server:
    <pre><code>npm run dev</code></pre>
    or
    <pre><code>yarn dev</code></pre>
  </li>
</ol>
<h2>🔗 Live Demo</h2>
<p>
  You can access the deployed version of the project here:<br>
  <a href="https://start-select-store.vercel.app" target="_blank">https://start-select-store.vercel.app</a>
</p>
<h2>📂 Folder Structure</h2>
<pre><code>
src/
├── components/        # Reusable UI components
├── pages/             # Page components for routing
├── services/          # RTK Query API slices
├── styles/            # Global styles and theme
├── utils/             # Helper functions and masks
├── types/             # TypeScript type definitions
└── App.tsx            # Main application structure
</code></pre>
<h2>📝 Notes</h2>
<ul>
  <li>The checkout page does not process real payments, it's a mock simulation;</li>
  <li>API calls rely on a provided mock REST endpoint with static data.</li>
</ul>
<h2>📌 Commit Highlights</h2>
<ul>
  <li><strong>Checkout Page</strong> – Added validation, input masks, and dynamic rendering of cart summary;</li>
  <li><strong>Cart Management</strong> – Implemented add/remove logic and quantity state handling;</li>
  <li><strong>Product Listing</strong> – Integrated RTK Query to fetch and display products from API;</li>
  <li><strong>Loading & Feedback</strong> – Added loading indicators and error fallback UI.</li>
</ul>
