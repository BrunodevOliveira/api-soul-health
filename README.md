<div align="center">
  <img align="center"  src="./src/assets/logoPrincipalFinal_corte.png" alt="SoulHeath">
  <p>Cuidando com a Alma</p>
</div>
<br>
<div>
  <h2>&rArr; Objetivo &lArr;</h2>
  <p>Construir uma REST API com MongoDB que permita fazer cadastro, edição, a listagem e a exclusão de usuarios, assim como criar um sistema de autenticação de login. Fazer integração com o DialogFlow para possibilitar a marcação, edição e listagem de consultas para os usuarios cadastrados.</P>
  <h3>&rarr; Requisitos da aplicação &larr; </h3>
  <ul>
    <li> CRUD de Usuarios (beneficiarios)</li>
    <li>Autenticação de Login</li>
    <li>Integração com o DialogFlow</li>
    <li>conexão com banco de dados MongoDB</li>
  </ul>
</div>
<br>
<div>
  <h2>&rArr; Tecnologias & Ferramentas utilizadas &lArr;</h2>
  <br>
  <div>
    <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/agorasoudev/soul-doacao?style=plastic">
    <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/agorasoudev/soul-doacao?style=plastic">
    <img alt="Lines of code" src="https://img.shields.io/tokei/lines/github.com/agorasoudev/soul-doacao?style=plastic">
    <img alt="GitHub issues" src="https://img.shields.io/github/issues/agorasoudev/soul-doacao?color=red&style=plastic">
    <img alt="GitHub closed pull requests" src="https://img.shields.io/github/issues-pr-closed/agorasoudev/soul-doacao?color=green&style=plastic">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/agorasoudev/soul-doacao?color=blue&style=plastic">
    <img alt="GitHub" src="https://img.shields.io/github/license/agorasoudev/soul-doacao?color=important&style=plastic">
  </div>
  <br>
  <div>
    <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
    <img src="https://img.shields.io/badge/nodemon-4EA94B?style=for-the-badge&logo=nodemon&logoColor=gray">
    <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB">
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white">
    <img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white">
  </div>
</div>
<br>
<div>
  <h2>&rArr; Utilização da API &lArr;</h2>
  <br>
  <h3>&rarr; Clonagem do repositório &larr; </h3>

```shell
git clone https://github.com/soulcode-acad/apiDialogFlow3.git
```
  <h3>&rarr; Preparando o ambiente &larr; </h3>
<ol>
<li>Primeiro instalamos as dependências.

```shell
npm install
```
</li>
<li>Em seguida, renomeamos o arquivo <b>.env.exemplo</b> para <b>.env</b></li>
<li>Dentro do arquivo .env, é preciso preencher com a URL do servidor atlas - MongoDB</li>
<li>Dentro do arquivo .env, é preciso preencher o SECRET com uma sequencia de caracteres da sua preferência</li>
</ol>
  

  <h3>&rarr; Inicializar o servidor &larr; </h3>

```shell
npm run dev
```

<h3>&rarr; Utilizando os End-Points e outras Documentações&larr; </h3>
<details>
  <summary>Usuarios e Consultas</summary>
  <ul>
    <li> http://localhost:3000/api-docs/ </li>
  </ul>
</details>
<details>
  <summary>DialogFlow</summary>
  <ul>
    <li> https://cloud.google.com/dialogflow/es/docs  </li>
    <li> <a href="./documentation/ProgramController.md">Programs Controller</a></li>
  </ul>
</details>
</div>
<br>
<div>
<h2>&rArr; Acessando a documentação &lArr;</h2>
<p>Apos a inicialização do servidor, é possível acessar a documentação com todas as rotas através da url <code>http://localhost:3000/api-docs/</code></p>
</div>
<br>
<div>
  <h2>&rArr; Equipe de desenvolvimento &lArr;</h2>
  <br>
  <ul>
    <!-- Silas Sousa -->
    <li>
      <img src="https://img.shields.io/badge/dev-Silas%20Sousa-blueviolet">
      <a href="https://github.com/SilasSousadeJesus">
        <img src="https://img.shields.io/badge/GitHub-100000?&logo=github&logoColor=white">
      </a>
      <a href="https://www.linkedin.com/in/silas-sousa-815628150/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?&logo=linkedin&logoColor=white">
      </a>
    </li>
    <!-- Jaqueline Rodrigues  -->
    <li>
      <img src="https://img.shields.io/badge/dev-Jaqueline%20Rodrigues-blueviolet">
      <a href="https://github.com/agorasoudev">
        <img src="https://img.shields.io/badge/GitHub-100000?&logo=github&logoColor=white">
      </a>
      <a href="https://www.linkedin.com/in/jaquelinefcrodrigues/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?&logo=linkedin&logoColor=white">
      </a>
    </li>
    <!-- Lucélia Batista -->
    <li>
      <img src="https://img.shields.io/badge/dev-Lucélia%20Batista-blueviolet">
      <a href="https://github.com/Luceliabatista">
        <img src="https://img.shields.io/badge/GitHub-100000?&logo=github&logoColor=white">
      </a>
      <a href="https://www.linkedin.com/in/luceliabatista/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?&logo=linkedin&logoColor=white">
      </a>
    </li>
    <!-- Bruno Oliveira -->
    <li>
      <img src="https://img.shields.io/badge/dev-Bruno%20Oliveira-blueviolet">
      <a href="https://github.com/BrunodevOliveira">
        <img src="https://img.shields.io/badge/GitHub-100000?&logo=github&logoColor=white">
      </a>
      <a href="https://www.linkedin.com/in/brunodevoliveira/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?&logo=linkedin&logoColor=white">
      </a>
    </li>
    <!-- CamiMSilva -->
    <li>
      <img src="https://img.shields.io/badge/dev-Camila%20Silva-blueviolet">
      <a href="https://github.com/CamiMSilva">
        <img src="https://img.shields.io/badge/GitHub-100000?&logo=github&logoColor=white">
      </a>
      <a href="https://www.linkedin.com/in/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?&logo=linkedin&logoColor=white">
      </a>
    </li>
  </ul>
</div>