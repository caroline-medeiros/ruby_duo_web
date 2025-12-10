# 🦉 Ruby Duo Web

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![React](https://img.shields.io/badge/React-18-blue)
![Emotion](https://img.shields.io/badge/Emotion-CSS_in_JS-pink)
![Status](https://img.shields.io/badge/Status-MVP-green)

Frontend do projeto **Ruby Duo**, uma plataforma de ensino gamificada inspirada no Duolingo.
Esta aplicação consome a [Ruby Duo API](https://github.com/caroline-medeiros/ruby_duo) para exibir lições e quizzes interativos.

## 🎨 Interface

O projeto foi construído com foco em **Componentização** e **User Experience (UX)**.
- **Design System:** Estilização própria utilizando `@emotion/styled` (CSS-in-JS).
- **Interatividade:** Feedback visual imediato (Acerto/Erro), barra de progresso e tela de resultado.
- **Performance:** Renderização híbrida (Server Components + Client Components) com Next.js App Router.

## 🚀 Tecnologias

- **Next.js 14+** (App Router)
- **React**
- **Emotion** (Styled Components engine)
- **JavaScript (ES6+)**

## 📂 Estrutura do Projeto

O código foi refatorado para garantir escalabilidade e fácil manutenção:

```
src/
├── app/                # Rotas e Layout (Next.js)
│   ├── page.js         # Server Component (Busca dados)
│   └── layout.js       # Configuração Global + Emotion Registry
├── components/         # Componentes Isolados
│   ├── LessonView/     # Lógica do Quiz
│   ├── OptionButton/   # Botões de resposta interativos
│   ├── ProgressBar/    # Barra de progresso
│   └── ResultCard/     # Tela de vitória
└── lib/                # Configurações (Emotion Registry)
```

## 🛠️ Como rodar o projeto

### Pré-requisitos
- Node.js (v18 ou superior)
- Backend rodando (Localmente ou em Produção)

### Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/caroline-medeiros/ruby-duo-web.git
cd ruby_duo_web
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure a API**

Por padrão, o projeto busca a API em `http://localhost:3000`. Para alterar, edite o arquivo `src/app/page.js` ou crie um arquivo `.env.local` com a variável:

```bash
NEXT_PUBLIC_API_URL=http://localhost:3000
```

4. **Inicie o Servidor de Desenvolvimento**
```bash
npm run dev
```

Abra o navegador em `http://localhost:3001` (ou a porta indicada no terminal).

## 🔗 Integração com Backend

Este frontend depende da API Ruby on Rails para funcionar. Certifique-se de que a API está retornando os dados no formato esperado.

Repositório da API: [ruby_duo](https://github.com/caroline-medeiros/ruby_duo)

---

Desenvolvido por **Caroline Medeiros**
