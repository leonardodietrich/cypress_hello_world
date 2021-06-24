/* global Given, Then, When */

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

Given("que acesso o site Swag Labs", () => {
    loginPage.acessarSite()
})

When("preencho os campos username e password com os seguintes dados", (datatable) => {
	datatable.hashes().forEach(element => {
        loginPage.informarUsuario(element.username)
        loginPage.informarSenha(element.password)
    });
});


When("clico no botão de login", () => {
	loginPage.clicarBotaoLogin()
});


Then("devo visualizar o botão de login", () => {
    loginPage.visualizarBotaoLogin()
})


Then("a mensagem de aviso de usuário bloqueado é exibida", () => {
	loginPage.visualizarMensagemDeErro()
});
