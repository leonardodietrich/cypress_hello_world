/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage {
    // Acessa o site que ser� testado
    acessarSite() {
        cy.visit(url)
    }

    // Verifica se o bot�o tem o texto "Login"
    visualizarBotaoLogin() {
        cy.get(loginElements.botaoLogin()).should('contain', 'Login')
    }
}

export default LoginPage;