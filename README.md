This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

Tecnologias Usadas
Next.js 13 - Framework React para criação de aplicativos web, com suporte para renderização estática e dinâmicas.
TypeScript - Superset do JavaScript, que oferece tipagem estática.
React - Biblioteca JavaScript para a criação de interfaces de usuário.
Vercel - Plataforma de deploy para aplicações frontend.
Next Image - Otimização de imagens para melhorar o desempenho.
CSS Modules - Estilos locais para componentes.
React State (useState) - Gerenciamento de estado para o controle de visibilidade do carrinho de compras.
Funcionalidades
Página inicial com lista de produtos: Exibe uma série de produtos com imagens, preços e descontos para clientes da Unimed Natal.
Carrinho de Compras: Um carrinho simples que pode ser aberto e fechado, permitindo ao usuário visualizar e adicionar produtos ao carrinho.
Descontos exclusivos: Os produtos possuem descontos exclusivos para clientes da Unimed Natal.
Responsividade: A página é completamente responsiva, garantindo uma boa experiência em dispositivos móveis e desktop.
Como Rodar o Projeto Localmente
Clone este repositório:

bash
Copiar
Editar
git clone https://github.com/ElieldsonKervem/projetoUnimed.git
Acesse o diretório do projeto:

bash
Copiar
Editar
cd projetoUnimed
Instale as dependências:

bash
Copiar
Editar
npm install
Rode o servidor de desenvolvimento:

bash
Copiar
Editar
npm run dev
Abra o navegador e acesse http://localhost:3000.

Como Implantar no Vercel
Conecte seu repositório GitHub ao Vercel.
Selecione a branch main e clique em "Deploy".
O Vercel cuidará do restante, realizando o build e o deploy do seu projeto automaticamente.
Estrutura de Arquivos
A estrutura de arquivos do projeto é organizada da seguinte forma:

bash
Copiar
Editar
/src
  /app
    page.tsx        # Página inicial
    layout.tsx      # Layout global da aplicação
    globals.css     # Estilos globais
  /components
    /sliderComponent
      Carousel.tsx  # Componente de carrossel de imagens
    /navCardComponent
      CardNav.tsx   # Componente de navegação dos cartões de produtos
    /cartComponent
      Cart.tsx      # Componente de carrinho de compras
  /data
    # Arquivos de dados (se houver)
  /pages
    _not-found.tsx  # Página 404 personalizada
Considerações Finais
Este projeto foi desenvolvido com o objetivo de demonstrar as habilidades em Next.js, TypeScript, e na criação de interfaces modernas e responsivas. Ele pode ser expandido com mais funcionalidades, como integração com uma API para gerenciar produtos e carrinho de compras, autenticação de usuários e pagamento.



![WhatsApp Image 2025-02-17 at 08 22 06](https://github.com/user-attachments/assets/6eca5056-7421-4b74-8a3e-ef7fe1ebcb81)

