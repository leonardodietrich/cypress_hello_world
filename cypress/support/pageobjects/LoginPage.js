/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage {
    acessarSite() {
        cy.visit(url)
    }

    visualizarBotaoLogin() {
        cy.get(loginElements.botaoLogin())
        .should('contain', 'Login')
    }

    visualizarMensagemDeErro() {
        cy.get(loginElements.mensagemDeErro())
        .should('contain', 'Epic sadface: Sorry, this user has been locked out.')
    }

    informarUsuario(username){
        cy.get(loginElements.inputUsername())
        .type(username)
    }
    
    informarSenha(password){
        cy.get(loginElements.inputPassword())
        .type(password)
    }

    clicarBotaoLogin(){
        cy.get(loginElements.botaoLogin())
        .click()
    }
}

export default LoginPage;