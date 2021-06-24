Feature: Login site Swag Labs

Scenario: Validando exibição do botão de login
	Given que acesso o site Swag Labs
	Then devo visualizar o botão de login

Scenario: Validando login de usuário bloqueado
	Given que acesso o site Swag Labs
	When preencho os campos username e password com os seguintes dados
		| username        | password     |
		| locked_out_user | secret_sauce |
	And clico no botão de login
	Then a mensagem de aviso de usuário bloqueado é exibida