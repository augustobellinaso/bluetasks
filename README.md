# BlueTasks - Gerenciador de Tarefas

## Descrição do Projeto

Aplicativo Java Web para fazer o gerenciamento de tarefas. 
Projeto desenvolvido durante a <a href="https://www.softblue.com.br/site/page/id/FMD_3_Vendas">Formação Master Developer </a> da <a href="https://www.softblue.com.br/">Softblue</a>.

Deploy do back-end no Heroku: https://bluetasksv1.herokuapp.com/
Deploy do front-end no Netflify: https://bluetasks-augustobellinaso.netlify.app/
  - Fazer o login com os mesmos usuários informados mais abaixo nesse arquivo.
  - Obs.: Pode demorar um pouco para fazer o login em alguns momentos pois é necessário aguardar a inicialização do servidor com o back-end.

---

<!--ts-->
   * [Executando o Projeto](#executando-o-projeto)
   * [Como utilizar](#como-utilizar)
   * [Features](#features)
   * [Tecnologias](#tecnologias)
<!--te-->

---

## Executando o Projeto

### Pré Requisitos - Back-end


- Ter instalado alguma IDE ([Eclipse](https://www.eclipse.org/), [IntelliJ](https://www.jetbrains.com/pt-br/idea/) ou [Spring Tools Suite](https://spring.io/tools))
  - Observações:
    -  Se utilizar o Eclipse, deve-se ter instalado o plugin Spring Tools 4;
    -  Se utilizar o IntelliJ, é necessário ser a versão Ultimate para ter o suporte ao Java Web
- Caso queira utilizar a aplicação com a funcionalidade de fazer a validação/processamento do pagamento, é necessário ter instalado e estar executando localmente a aplicação [Sbpay](https://github.com/augustobellinaso/sbpay).
- Ter instalado e configurado o banco de dados.

### Fazendo download do código e inserindo na IDE

- Fazer o download do código fonte no formato `.zip` e extrair o mesmo para a pasta de destino.

#### Abrindo o projeto com IntelliJ

- Ir no menu `File > Open` e selecionar a pasta `bluestasks-backend` do arquivo descompactado.
- A IDE irá identificar que o projeto possui o gerenciador de dependências `Gradle` e irá solicitar a importação das dependências, basta colocar para importar. Caso aparecer a mensagem `Trust Gradle Project`, clique no botão `Trust Project` para que seja possível editar o projeto.
- Após fazer isso basta esperar alguns momentos até que todas as dependendências sejam carregadas e indexadas ao projeto.
  - Pode ser necessário informar a JDK que a IDE deve usar para executar o projeto. Como o projeto foi desenvolvido com Java na versão 11, selecione qualquer JDK que tenha suporte à essa versão.

#### Abrindo o projeto com Eclipse e/ou Spring Tools Suite
- Ir no menu `File > Import > Gradle > Existing Gradle Project`, apertar `Next` e fazer o mesmo na tela de boas vindas do `Gradle`. Na tela seguinte, no campo `Project root directory`, clique em `Browse` e selecione a pasta descompactada do projeto e então clique em `Finish`.
- Aguarde o Eclipse inserir o projeto e as suas dependências.

---

### Pré Requisitos - Front-end

- Ter instalado o [VSCode](https://code.visualstudio.com/) ou alguma outra IDE de preferência.
- Ter instalado o [Node.js](https://nodejs.org/en/).

#### Abrindo o projeto com o VSCode

- Navegue até a pasta `bluetasks-frontend`, clique com o botão direito em algum lugar dentro dela e selecione a opção `Abrir com Code`.
  - Ou se preferir, abra o VSCode, vá em `File > Open Folder` e selecione a pasta `bluetasks-frontend` para abrir.

--- 

### Executando a aplicação

#### Back-end

- Para utilizar o projeto basta executar o mesmo na IDE e depois acessar o navegador através da URL `http://localhost:8080`;
  - No Eclipse/Spring Tools Suite, clique com o botão direito em cima da pasta do projeto no `Package Manager`, vá até `Run As` e selecione `Spring Boot Application`.
  - No IntelliJ, execute a aplicação clicando na setinha verde que aparece ao lado da declaração da classe dentro do arquivo `BluetasksBackendApplication`.  
  
#### Front-end

- Abra o terminal e navegue até a pasta `bluetasks-frontend`.
- Uma vez ali dentro execute o comando `npm install` para instalar as dependências e depois de finalizar basta executar o comando `npm start` que a aplicação começará a ser executada e irá abrir em uma aba do navegador.

---

### Como utilizar

- Estando com o back-end e o front-end em execução, basta fazer login na tela inicial da aplicação (que se encontra em `http://localhost:3000` com os seguintes dados:
  - Usuário: john -- Senha: abc
  - Usuário: paul -- Senha: cba
    - Obs: esses são os usuários que foram cadastrados e estão salvos no banco de dados. No momento ainda não foi implementado a funcionalidade de criar um usuário, mas isso pode ser feito no Back-end:
   
#### Criando um novo usuário

- Navegue até o arquivo `InsertTestData` que está dentro do seguinte caminho: `src/main/java/augustobellinaso/bluetasksbackend/test/` e vá até o método `onApplicationEvent`.
Nesse método, basta adicionar mais um usuário com os seguintes comandos:

```
AppUser newAppUser = new AppUser("nomeusuario", encoder.encode("senha"), "Nome Completo");
        appUserRepository.save(newAppUser);
```

  - Pode adicionar quantos usuários quiser, e depois é só rodar novamente o servidor da aplicação e fazer login com o `nomeusuario` e `senha` criado.
  


## Features

- [x] Login e autenticação via JWT Token;
- [x] Logout;
- [x] Cadastro de novas tarefas;
- [x] Alterando tarefas criadas;
- [x] Exclusão de tarefas;
- [x] Marcando tarefas como concluídas ou não.


## Tecnologias

- [ReactJS](https://pt-br.reactjs.org/)
- [Lombok](https://projectlombok.org/)
- [Spring](https://spring.io/)
  - Spring DevTools
  - Spring Web
  - Spring Data JPA
  - Spring Data Rest
  - Spring Security
  - Spring Validation
- Autenticação via Token JWT
- [PostgreSQL](https://www.postgresql.org/)
  - para ambiente de produção
- [H2 Database](https://www.h2database.com/html/main.html)
  - para ambiente de desenvolvimento.


