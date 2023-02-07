class Login {
    ipt_login = '#user-name'
    ipt_pass= '#password'
    btn_submit= '#login-button'
    h3_error='h3'

    acessarTela () {
        cy.visit(Cypress.env("sauceDemo"))
    }

    preencherLogin (username) {
        cy.get(this.ipt_login).type(username)

    }

    preencherSenha (password) {
        cy.get(this.ipt_pass).type(password)

    }

    submeter(){
        cy.get(this.btn_submit).click()
    }

    validError (message) {
        cy.get(this.h3_error).should('be.visible').should('have.text', message)

    }

    preencherCampos (username, password) {
        this.preencherLogin(username)
        this.preencherSenha(password)
        this.submeter()
    }


}

export default Login;