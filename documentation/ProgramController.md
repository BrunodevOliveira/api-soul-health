## Como gerar requisições através da rota "/webhook"
1. Acesse a página da Soul Health
2. Cadastre-se ou entre com sua conta
3. Na página de usuário, acesse o chat bot
4. As seguintes interações com o chat geram requisições:
    4.1 Agendamento de consultas
    4.2 Reagendamento de consultas
    4.3 Cancelamento de consultas
    4.4 Pesquisa de consultas

## Tratamento das requisições no Back End

### Arquivo ProgramController
- Responsável pelo tratamento das requisições geradas pela interação com o chat bot

### Função static program
- Responsável por armazenar todos os métodos responsáveis pelo tratamento e resposta as requisições feitas pelo DialogFlow

### Função convertDate
- Responsável por converter a data do padrão AA/MM/DD para DD/MM/AA

### Função querys
- Reponsável por selecionar os valores trazidos na Requisição(POST) e armazená-los em variáveis para utilização.

### Função addConsult
- Responsável por capturar os valores de specialty, dateParameter e email para agendar uma nova consulta do usuário
- Retorna ao usuário a mensagem: `Consulta com o ${specialty} foi adicionada a sua agenda para o dia ${date}.`
- Caso o email não esteja cadastrado no Banco de Dados, retorma a mensagem: `Informe o email de usuário correto`
### Função deleteConsult
- Armazena os valores de specialty, dateParameter e email
- Executa uma busca no banco de dados e exclui a consulta que corresponda aos dados passados como filtro
- Retorna ao usuário a mensagem:`Prontinho, sua consulta com  ${specialty} agendada para o dia ${date} foi desmarcada. 😁`
### Função findConsult
- Função responsável por recuperar e exibir ao usuário a data de uma determinada consulta
- Armazena os valores de specialty e email
- Executa uma busca no Banco de dados passando como filtro as variáveis acima e retornando a data de agendamento da consulta
- Retorna ao usuário a mensagem:`Sua consulta com ${date.specialty} está agendada para ${date.date}`
### Função editConsult
- Função responsável por recuperar e exibir ao usuário a consulta que ele deseja alterar
- Armazena os valores de changeSpecialty e email
- Executa uma busca no Banco de dados passando como filtro as variáveis acima e retornando as informações da consulta que será alterada, sendo armazenadas na variável `consult`
- Retorna ao usuário a mensagem: `Deseja alterar a consulta com ${consult.specialty} marcada para ${consult.date}?`
### Função editConsultAndUpdate
- Função responsável por recuperar os dados referentes a consula antiga e atualiza-los com as novas infomrações.
- Armazena os valores de specialty, dateParameter, specialtyContext e emailContext possuem os valores da consulta que serão atualiados.
- As variáveis specialtyContext e emailContext possuem os valores atuais da consulta.
- As variáveis specialty e dateParameter possuem os valores que irão substituir os que estão registrados no banco
- Executa uma busca no Banco de dados passando como filtro os valores de specialtyContext e emailContext, atualizando os campos com os novos valores contidos nas variáveis de specialty e dateParameter