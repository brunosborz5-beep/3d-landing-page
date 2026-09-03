# 3º Tabelionato de Notas e Protesto — Rio do Sul/SC

Site institucional de página única para o 3º Tabelionato de Notas e Protesto de Rio do Sul/SC.

O site é construído em torno de um único conceito visual: um livro de cartório sobre uma mesa,
que se abre conforme a pessoa rola a tela. A capa gira em 3D (`rotateY`, acompanhando o progresso
do scroll) revelando as páginas por baixo, e o restante do conteúdo é apresentado como fólios de
um livro antigo — sem sair dessa metáfora.

## Conteúdo

- **Fólio I** — endereço, horário de atendimento e estacionamento conveniado
- **Fólio II** — a tabeliã titular
- **Fólio III** — a equipe do cartório
- **Fólio IV** — serviços (com três animações próprias: reconhecimento de firma, apostilamento de
  Haia e protesto de títulos)
- **Fólio V** — links úteis (pesquisa de protesto, verificação de selo, normas do TJSC/CNJ,
  emolumentos)
- **Fólio VI** — contato via WhatsApp

Um widget fixo da Aurora (assistente do cartório) fica visível em todas as seções e leva direto
ao WhatsApp.

## Tecnologia

O front-end é **HTML/CSS/JS puro**: toda a interação (abertura do livro e as animações dos
serviços) está em `public/tabelionato.js`, sem bibliotecas de animação ou de componentes. O
projeto usa Next.js apenas como servidor/roteador de arquivos (`app/page.tsx` e
`app/globals.css`), sem Tailwind, sem shadcn/ui e sem React Three Fiber.

- Fontes: Playfair Display (títulos/capa) e Inter (corpo do texto), via `next/font/google`
- Anima apenas onde conta uma história (abertura do livro, transformações dos serviços); respeita
  `prefers-reduced-motion`
- Responsivo, com ajustes específicos para telas pequenas

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```
