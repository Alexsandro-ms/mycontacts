# API para Administração de Contatos

## Descrição

Esta é uma API simples para administrar contatos e categorias, implementando operações de CRUD (Create, Read, Update, Delete). Um contato pertence a uma categoria, formando um relacionamento do tipo one-to-many (uma categoria pode ter vários contatos).

## Endpoints

### Categorias

#### 1. Criar uma Categoria
**POST /categories**
```json
{
  "name": "Nome da Categoria"
}
```

#### 2. Listar Categorias
**GET /categories**

#### 3. Atualizar uma Categoria
**PUT /categories/:id**
```json
{
  "name": "Novo Nome da Categoria"
}
```

#### 4. Deletar uma Categoria
**DELETE /categories/:id**

### Contatos

#### 1. Criar um Contato
**POST /contacts**
```json
{
  "name": "Nome",
  "email": "email@example.com",
  "phone": "987654321",
  "category_id": "6f388106-ce1c-4ad6-b285-20ad15db361a"
}
```

#### 2. Listar Contatos
**GET /contacts**

#### 3. Atualizar um Contato
**PUT /contacts/:id**
```json
{
  "name": "Novo Nome",
  "email": "novoemail@example.com",
  "phone": "987654321",
  "category_id": "6f388106-ce1c-4ad6-b285-20ad15db361a"
}
```

#### 4. Deletar um Contato
**DELETE /contacts/:id**

## Configuração do Projeto

### Instalação

1. Clone o repositório:
```bash
$ git clone https://github.com/alexsandro-ms/mycontacts.git
$ cd mycontacts
```

2. Instale as dependências:
```bash
$ npm install
```

3. Configure as variáveis de ambiente do docker no arquivo `database/index.js`:
```env
   host: "localhost",
   port: 5432,
   user: "root",
   password: "root",
   database: "mycontacts",
```

### Rodando a API

Inicie o servidor de desenvolvimento:
```bash
$ npm run dev / yarn dev
```

A API estará disponível em `http://localhost:3000`.

## Tecnologias Utilizadas

- **Node.js**
- **Postgresql**

## Estrutura de Dados

### Categoria
```typescript
{
  id: string;
  name: string;
}
```

### Contato
```typescript
{
  id: string;
  name: string;
  email: string;
  phone: string;
  category_id: string;
}
```

## Contribuição

1. Faça um fork do projeto.
2. Crie um branch para a sua feature:
```bash
$ git checkout -b minha-feature
```
3. Commit suas alterações:
```bash
$ git commit -m "Adiciona minha nova feature"
```
4. Faça o push para o branch:
```bash
$ git push origin minha-feature
```
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
