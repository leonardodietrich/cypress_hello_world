/* global Given, Then, When */

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

Given("que acesso o site Swag Labs", () => {
    loginPage.acessarSite();
})

When("acesso a pagina de login", () => {
    
})

Then("devo visualizar o botão de login", () => {
    loginPage.visualizarBotaoLogin();
})