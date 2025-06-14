<p align="center">
  <img src="./fe/src/assets/images/logo.svg" width="400" height="75">
</p>

# 📇 Gerenciador de Contatos

Este projeto é um sistema básico de gerenciamento de contatos, onde é possível realizar operações de CRUD (Create, Read, Update, Delete) em contatos, associando-os a categorias e incluindo imagens.

- **Front-end**: Desenvolvido em **React**, responsável pela interface do usuário e interação com o back-end.
- **Back-end**: Desenvolvido em **Node.js** com **Express**, responsável pela lógica de negócios e integração com o banco de dados.

---

## 🚀 Funcionalidades

✅ **Cadastro de Contatos** – Nome, telefone, email, categoria e imagem.  
✅ **Listagem de Contatos** – Filtro por categoria e exibição de imagens.  
✅ **Edição de Contatos** – Atualização de informações, incluindo imagens.  
✅ **Exclusão de Contatos** – Remoção completa do contato e seus dados.  
✅ **Gerenciamento de Categorias** – Criar, editar e excluir categorias.

---

## 🛠️ Pré-requisitos

Antes de executar o projeto, verifique se você possui os seguintes requisitos instalados:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [Banco de Dados](#configuração-do-banco-de-dados) configurado (se necessário)

---

## ⚙️ Configuração do Banco de Dados

### **🚧 Em construção 🚧**

---

1️⃣ Certifique-se de ter **PostgreSQL**, **MySQL** ou outro banco compatível instalado.

2️⃣ Configure o arquivo **api/database/index.js**

```env
host: "localhost",
port: 5432,
user: "root",
password: "root",
database: "mycontacts",
```

## 🚀 Como Executar

1️⃣ **Clone o repositório**:

```bash
git clone https://github.com/seu-usuario/crud-contatos.git
```

2️⃣ Instale as dependências:

No diretório do back-end:

```bash
npm install # yarn
```

No diretório do front-end:

```bash
npm install # yarn
```

3️⃣ Execute os servidores:

Execute o back-end:

```bash
npm run dev # yarn dev
```

Execute o front-end:

```bash
npm start # yarn start
```

4️⃣ Acesse a aplicação:
Abra o navegador e acesse http://localhost:3000.

---

## 📜 Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
