# React API

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/henriquecaeiro/React_Login/blob/master/LICENSE)

## Sobre o projeto.

https://effulgent-naiad-81a0da.netlify.app/

Esse projeto foi criado para implementar uma API de login e autenticação de usuário, de minha autoria.
Onde o usuário pode logar no sistema, ou se cadastrar para entrar no mesmo.
Demonstrando assim todas as funcionalidades, criadas na api.

## Features do projeto:

- [x]  Registro;
- [x]  Login;
- [x]  Verificação de usuário pelo email;
- [x]  Reset de senha e;
- [x]  Autenticação de usuário.

# Tecnologias utilizadas 
## Back end
- Nodejs
- ExpressJs
- MongoDB
- Mongoose

## Front end

- HTML/CSS/JS
- ReactJs

## Implatação em produção 
- Back end: Render
- Front end web: Netlify
- Banco de dados MongoDb Cloud


## Documentação da API

#### Função de registro

```http
  POST /user/signup
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `campos` | `string` | **Obrigatório**. Preencher todos os campos do registro |

#### Função de login

```http
  POST /user/signin
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `campos`      | `string` | **Obrigatório**. Preencher todos os campos |

#### Verificação de email

```http
  GET /verify/:userId/:uniqueString
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `campos`      | `string` | **Obrigatório**. Preencher todos os campos |

#### Email verificado

```http
  GET /verified
```

| Retorno   | Tipo    |      
 | :--------- | :------------------------------------------ |
| `Resposta`      | `file` |


#### Pedido de reset de senha

```http
  POST /requestPasswordReset
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `campos`      | `string` | **Obrigatório**. Preencher todos os campos |

#### Pedido de reset de senha

```http
  POST /resetPassword
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `campos`      | `string` | **Obrigatório**. Preencher todos os campos |

