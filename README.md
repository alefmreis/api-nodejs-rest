# api-nodejs-rest MongoDB


#Modulos da API
mongoose
koa
koa-router
koa-bodyparser
jsonwebtoken


#construção do serviço celular
1º - Definição da model celular para o banco de dados.
2º - construção do repositorio para as operações de banco
3º - construção do serviço sobre a regra de negocio. 
4º - controller para dar o direcionamento de serviço 
5º - construção das rotas da api


#serviço usuario
Para usar a API é necessario cadastrar um usuario e depois efetuar o login para pegar o token.

O JWT expira de 30 em 30 minutos, apos o tempo é necessário efetuar o login novamente
