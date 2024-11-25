# Task Manager Frontend

Bem-vindo ao repositório do **Task Manager Frontend**! Este projeto é a interface de usuário para o sistema de gerenciamento de tarefas, desenvolvido com **React** e **SCSS**. Ele oferece uma experiência interativa e responsiva para criar, visualizar, atualizar e excluir tarefas.

![taskmanager_page-0001](https://github.com/user-attachments/assets/ba00820b-a6c6-425b-b60d-0fd3ab27eb64)

## 📝 Descrição

O **Task Manager Frontend** é um aplicativo web desenvolvido com **Create React App**, projetado para interagir com o backend do sistema de gerenciamento de tarefas. Ele fornece uma interface simples e intuitiva para os usuários gerenciarem suas tarefas.

## 🚀 Tecnologias Utilizadas

- **React** (com Create React App)
- **SCSS** (para estilização)
- **JavaScript** (lógica e interação)
- **ESLint** e **Prettier** (para padronização de código)
- **Husky** (para hooks de pré-commit)

---

## 🌐 Demonstração

No momento, o frontend pode ser configurado localmente para interagir com o backend. Certifique-se de que o backend do Task Manager está em execução antes de usar o frontend.

---

```bash

## 🛠️ Configuração do Ambiente de Desenvolvimento

Siga os passos abaixo para configurar e executar o projeto em sua máquina local.

### Pré-requisitos

Certifique-se de que você possui as ferramentas abaixo instaladas:

- **Node.js** (versão 18 ou superior)
- Um gerenciador de pacotes, como **npm** ou **yarn**

### Passo 1: Clonar o Repositório

Clone este repositório para o seu ambiente local:

git clone https://github.com/JoaoGomesss/taskmanager-front.git
cd taskmanager-front

### Passo 2: Instalar Dependências
Instale as dependências do projeto utilizando npm ou yarn:

npm install
# ou
yarn install

### Passo 3: Configurar Variáveis de Ambiente
Se necessário, configure variáveis de ambiente para apontar para o backend. Crie um arquivo .env na raiz do projeto e configure a URL da API:

REACT_APP_API_URL=http://localhost:5000
Certifique-se de que a URL corresponde ao endereço onde o backend do Task Manager está sendo executado.

### Passo 4: Executar a Aplicação
Inicie o servidor de desenvolvimento com o comando:

npm start
# ou
yarn start
A aplicação estará disponível em http://localhost:3000.

📦 Scripts Disponíveis
No diretório do projeto, você pode executar os seguintes scripts:

npm start
Roda o aplicativo em modo de desenvolvimento. Abra http://localhost:3000 para visualizá-lo no navegador.

npm test
Inicia o runner de testes no modo interativo.

npm run build
Compila o aplicativo para produção na pasta build. Ele otimiza o React para o melhor desempenho.

npm run eject
Remove a dependência única de construção. Atenção: essa operação é irreversível.

📚 Estrutura do Projeto
A estrutura do projeto é organizada da seguinte forma:

taskmanager-front/
├── .husky/               # Hooks do Git configurados pelo Husky
├── public/               # Arquivos públicos (favicon, index.html, etc.)
├── src/                  # Código-fonte principal
│   ├── components/       # Componentes reutilizáveis
│   ├── pages/            # Páginas do aplicativo
│   ├── styles/           # Estilos globais e SCSS
│   ├── utils/            # Funções utilitárias
│   ├── App.js            # Componente principal
│   ├── index.js          # Arquivo de entrada
├── .gitignore            # Arquivos e pastas ignorados pelo Git
├── .lintstagedrc.json    # Configuração do lint-staged
├── .prettierrc           # Configuração do Prettier
├── eslint.config.mjs     # Configuração do ESLint
├── package.json          # Configuração de dependências e scripts do projeto
└── README.md             # Documentação do projeto

🤝 Contribuições
Contribuições são bem-vindas! Siga os passos abaixo para contribuir com o projeto:

Faça um fork do repositório.
Crie uma branch para sua feature ou correção (git checkout -b feature/nova-feature).
Faça os commits das suas alterações (git commit -m 'Adiciona nova feature').
Suba sua branch (git push origin feature/nova-feature).
Abra um Pull Request.

🛡️ Licença
Este projeto não possui uma licença definida no momento.

📬 Contato
Se você tiver dúvidas ou sugestões, sinta-se à vontade para entrar em contato:
Email: jowgomes3@gmail.com

