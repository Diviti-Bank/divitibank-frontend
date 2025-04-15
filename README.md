# DivitibankFrontend

Documentação do Front-End
Integrantes (front-end):
João Pedro Paulino do Nascimento
Rafael Pither da Silva Pinto

## Introdução

O DivitiBank Front-End tem como objetivo integrar o sistema da API SpringBoot do DivitiBank Back-End. 
O sistema é feito no framework ```Angular``` com ```TypeScript```, ```HTML``` e ```CSS```.
Requisitos necessários:
Ter o ```Node.js``` e o ```Angular CLI``` instalados. <br>


## Configuração

1.	Clone o repositório
Para clonar o repositório, no terminal Bash em qualquer pasta, use o comando ```git clone https://github.com/Diviti-Bank/divitibank-frontend.git```

2.	Instale as dependências
Dentro do projeto, no Bash de o comando ```npm install``` 

3.	Execute o projeto
Dentro do Bash execute o comando ```ng serve``` <br>


## Estrutura

Na parte principal do projeto existem os arquivos: ```package.json``` e ```package-lock.json``` que são onde estão são definidas as ações dos comandos npm e onde são instaladas as dependências, respectivamente, além da pasta node_modules que surge quando as dependências são instaladas pelo ```npm install``` que possui todos os módulos necessários para o projeto funcionar, junto com a pasta ```src```  que compõe a estrutura do projeto. <br> <br>
Dentro do ```src``` estão as pastas: <br>
```assets``` – Que possui os recursos de imagem do projeto; <br>
```app``` – Que possui os componentes, interfaces, services, o componente app e o módulo geral e de rotas. <br>


Dentro do ```app``` temos as pastas: <br>
```pages``` – que possui os componentes que compõe uma página inteira; <br>
```components``` – que possui os componentes que compõe apenas uma parte das páginas; <br>
```interfaces``` – que possui as interfaces de informações; <br>
```services``` – que possui os serviços que fazem a ligação com a API do Back-End; <br>
```error``` - que possui o componente da página padrão de erro; <br>
```success```- que possui o componente da página padrão de sucesso. <br>


## Componentes

### ```pages```
Na pasta ```pages``` temos: <br>
```pag-inicial``` -  o componente da primeira página do projeto. <br>
Na pasta ```logCad``` os componentes ```cadastro``` e ```login``` -  As páginas de cadastro e login, respectivamente. <br>
```principal``` - o componente da página principal após login do projeto. <br>
```user-infos``` - o componente que mostra as informações do usuário logado. <br>
```extract``` - o componente da página de extrato. <br> <br>
Na pasta ```pages/cards``` os componentes: <br>
```pag-cartoes``` - a página que exibe os cartões e as informações deles. <br>
```criar-cartao``` - a página de criação dos cartões. <br>
```confirm-card-exclusion``` - a página de confirmação de exclusão de cartão. <br>
```pag-fatura``` - a página que exibe a fatura do cartão, onde o usuário pode pagar. <br> <br> 
E na pasta ```pages/pags-transferencia```: <br>
```key-page``` - a página em que o usuário coloca a chave de quem ele fará uma transferência. <br>
```insert-amount``` - a página em que o usuário coloca a quantia em que vai transferir. <br>
```payment-method``` - a página em que o usuário seleciona o método de pagamento. <br>
```relatory``` - a página que exibe um relatório da transferência antes dela ser completa. <br>
```receipt``` - a página do recibo da transferência. <br> <br>

### ```components```
Na pasta ```components``` temos: <br>
```navbar``` - o componente da navbar que aparece na parte superior da tela após o login. <br>
```confirm-transfer``` - o componente de confirmar transferência que aparece na página ```relatory```. <br> <br>

### ```interfaces```
Na pasta ```interfaces``` as interfaces: <br>
```Card``` - interface de cartão. <br>
```Receipt``` - a interface do recibo (em desuso). <br>
```Transfer``` - a interface das transferências. <br>
```User``` - a interface dos usuários. <br> <br>

### ```services```
Na pasta ```services``` os serviços: <br>
```card``` - que apresenta os métodos relacionados à criação, exclusão de cartões e pagamento de fatura. Os métodos dele são: ```cadastrarCartao()```, ```excluirCartao()```, ```getExtratoCartao()```, ```pagarFatura()```, ```setCartao()``` e ```getCartao()```. <br><br>
```logCad/cadastro``` - que apresenta o método ```cadastrarUsario()```, para cadastrar novos usuários. <br><br>
```logCad/login``` - que apresenta o método ```getUsuario()``` para buscar um usuário no banco, além dos métodos ```setUsuario()``` e ```getUsuarioObservable()``` para definir e buscar um usuário localmente. <br><br>
```transfer``` - que apresenta o método ```fazerTransferencia()``` que faz uma transferência efetivamente, além dos métodos de acesso local: ```setCpfRemetente()```, ```setCpfDestino()```, ```setDinheiro()```, ```setMetodoPagamento()```, ```setDestino()```, ```getCpfRemetente()```, ```getCpfDestino()```, ```getDinheiro()```, ```getMetodoPagamento()``` e ```getDestino()```. <br>

## Módulos e Rotas
### Módularização

Feita a partir de um único módulo ```app.module.``` que importa e declara todos os componentes. <br>

### Roteamento
'/' (redireciona /divitibank) <br>
'/divitibank' (Página Inicial) <br>
'/divitibank-login' (Página de Login) <br>
'/divitibank-logon' (Página de Cadastro) <br>
'/divitibank-main' (Página Principal) <br>
'/divitibank-userInfo' (Página de Informações do Usuário) <br>
'/divitibank-extract' (Página de Extrato) <br>
'/divitibank-createCard' (Página de criação de cartão) <br>
'/divitibank-confirmCardExclusion' (Página de confirmação de exclusão de cartão) <br>
'/divitibank-cards' (Página de Cartões) <br>
'/divitibank-invoicePayment' (Página de pagamento de fatura) <br>
'/divitibank-transfer-keyPage' (Página de inserção de chave de Transferência) <br>
'/divitibank-transfer-insertAmount' (Página de inserção de quantidade a ser transferida) <br>
'/divitibank-transfer-paymentMethod' (Página de escolha de método de pagamento) <br>
'/divitibank-transfer-relatory' (Página de relatório e confirmação de transferência) <br>
'/divitibank-transfer-receipt' (Página de comprovante de transferência) <br>
'/divitibank-success/:message/:start/:buttonMessage/:endpoint' (Página padrão de sucesso) <br>
'/divitibank-error/:message/:start' (Página padrão de erro) <br>


## Build e Deploy

O Deploy é feito no Render no projeto: [divitibank-frontend](https://divitibank-frontend.onrender.com)

O arquivo utilizado para fazer o deploy do projeto é o server.js, que utiliza express para subir a aplicação dinâmica a partir do arquivo gerado pelo comando ```ng build```.
