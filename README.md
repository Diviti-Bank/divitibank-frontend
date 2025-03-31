# DivitibankFrontend

Documentação do Front-End
Integrantes(front-end):
João Pedro Paulino do Nascimento
Rafael Pither da Silva Pinto

## Introdução

O Diviti Bank Front-End tem como objetivo integrar o sistema da API SpringBoot do Diviti Bank Back-End. 
O sistema é feito no framework Angular com TypeScript, HTML e CSS.
Requisitos necessários:
Ter o Node.js e o Angular CLI instalados.


## Configuração

1.	Clone o repositório
Para clonar o repositório, no terminal Bash em qualquer pasta, de o comando “ git clone https://github.com/Diviti-Bank/divitibank-frontend.git ”

2.	Instale as dependências
Dentro do projeto e do Bash de o comando “npm install” 

3.	Execute o projeto
Dentro do Bash execute o comando “ng serve”


## Estrutura

Na parte principal do projeto existem os arquivos: package.json e package-lock.json que são onde estão instaladas as dependências, além da pasta node_modules que é instalada quando as dependências são instaladas que possui todos os módulos necessários para o projeto funcionar, junto com a pasta “src”  que compõe a estrutura do projeto.
Dentro do src estão as pastas:
Assets – Que possui os recursos de imagem do projeto;
App – Que possui os componentes, interfaces, services, o componente app e o módulo geral e de rotas.


Dentro do App temos as pastas:
Pages – que possui os componentes que compõe uma página inteira;
Components – que possui os componentes que compõe apenas uma parte das páginas;
Interfaces – que possui as interfaces de informações;
Services – que possui os serviços que fazem a ligação com a API do Back-End.


## Componentes

Na pasta pages temos a página inicial, as páginas de login e cadastro, a página principal, a página de extrato, a página de cartões, a página de informações de usuário, as páginas de transferência. 
Na pasta components temos a nav-bar e a confirmação de compra.
Na pasta services (completar)


## Módulos e Rotas
### Módularização

Feita a partir de um único módulo “app.module.ts” que importa e declara todos os componentes.

### Roteamento
‘/’ (redireciona /divitibank)
‘/divitibank’ (Página Inicial)
‘/divitibank-login’ (Página de Login)
‘/divitibank-logon’ (Página de Cadastro)
‘/divitibank-principal’ (Página Principal)
‘/divitibank-extract’ (Página de Extrato)
‘/divitibank-cards’ (Página de Cartões)
‘/divitibank-userInfo’ (Página de Informações do Usuário)
‘/divitibank-transfer-keyPage’ (Página de inserção de chave de Transferência)
‘/divitibank-transfer-insertAmount’ (Página de inserção de quantidade a ser transferida)
‘/divitibank-transfer-paymentMethod’ (Página de escolha de método de pagamento)
‘/divitibank-transfer-relatory’ (Página de relatório e confirmação de transferência)
‘/divitibank-transfer-receipt’ (Página de comprovante de transferência)


## Build e Deploy

O Deploy é feito no Render no projeto: link do render
