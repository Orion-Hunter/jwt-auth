# jwt-auth

#### API com a exemplificação do uso de autenticação com JsonWebToken ou JWT.
<br/>

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre](#Sobre)
   * [Features](#Features)
   * [Instalação](#instalacao)
   * [Como usar](#como-usar)
      * [Pre Requisitos](#pre-requisitos)
      * [Endpoints](#Endpoints)
   * [Tests](#testes)
   * [Tecnologias](#tecnologias)
<!--te-->
<br/>

### Sobre

Este projeto tem o objetivo de colocar em prática os conhecimentos que adiquiri durante os meus estudos e práticas em desenvolvimento de software. Aqui eu fiz uma 
simples que implementa a autenticação de usuários com a utilização de um token JWT.

<br/>

### Features

- [x] Cadastro de usuário
- [x] Autenticação de Usuário

<br/>

### Instalação

Para instalar as dependências do projeto execute o comando ```npm install``` ou o comando ```yarn install``` na raiz do projeto. Instale também na sua máquina o 
docker e o docker compose([Get Docker](https://docs.docker.com/get-docker/)).

<br/>

### Como Usar

#### Pre Requisitos

Uma vez que as dependências do projeto e o docker tenham sido instalados execute o comando ```docker-compose up -d``` na raiz do projeto para que os containers do
banco de dados sejam upados e executados. As credenciais para o acesso ao banco de dados e para o painel de administração do mesmo estão no arquivo presentes 
``` docker-compose.yml ```.

#### Endpoints

Esta api possui 3 endpoints: o de index, o de  usuários e o de sessões.

- Endpoint Index:
  
  ```
     http://host:porta/   
  ```
  
  Uma requisição do tipo ```GET``` retorna um JSON com a seguinte estrutura:
 
    ```json
      {
         api: "JWT AUTH"
      }
    ```
    
- Endpoint Usuários:

   ```
     http://host:porta/users   
  ```
  
  Uma requisição do tipo ```POST``` recebe um JSON com a seguinte estrutura:
 
    ```json
      {
         login: "José",
         password: "123456"
      }
    ```
    
    
- Endpoint Sessões:

   ```
     http://host:porta/sessions
  ```
  
  Uma requisição do tipo ```POST``` recebe um JSON com a seguinte estrutura:
 
    ```json
      {
         login: "Jonh Doe",
         password: "12345"
      }
    ```
    
  Retorna um json com o usário e o token JWT caso as credenciais sejam válidas ou com uma mensagem de erro caso as credenciais sejam inválidas.  

<br/>

### Tests
  
  Para testar a aplicação basta executar o comando ```yarn test``` na raiz do projeto. 
  
<br/>

### Tecnologias
  
  - [Docker](https://docs.docker.com/get-docker/)  
  - [Postgresql](https://www.postgresql.org/)
  - [Node JS](https://nodejs.org/en/)
  - [Insomnia Client Rest](https://insomnia.rest/)




