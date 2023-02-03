describe('Login sem variaveis', () => {    
  beforeEach(() => {
      cy.visit(Cypress.env("sauceDemo"))
  })
  it('Login sucesso', () => {
      cy.get('#user-name').type('standard_user').should('have.value', 'standard_user')
      cy.get('#password').type('secret_sauce', { log: false}).should('have.value', 'secret_sauce', { log: false})
      cy.get('#login-button').click()
      cy.get('span[class=title]').should('have.text', "Products")
  })
  it('Login com usuário bloqueado', () => {
    cy.get('#user-name').type('locked_out_user').should('have.value', 'locked_out_user')
    cy.get('#password').type('secret_sauce', { log: false}).should('have.value', 'secret_sauce', { log: false})
    cy.get('#login-button').click()
    cy.get('h3').should('have.text', "Epic sadface: Sorry, this user has been locked out.")
})
  it('Tentar logar sem informar usuário e senha', () => {
    cy.get('#login-button').click()
    cy.get('#user-name' + '+ svg').should('be.visible')
    cy.get('#password' + '+ svg').should('be.visible')
    cy.get('h3').should('have.text', "Epic sadface: Username is required")
  })
  it('Tentar logar sem informar usuário', () => {
    cy.get('#password').type('secret_sauce').should('have.value', 'secret_sauce')
    cy.get('#login-button').click()
    cy.get('#user-name' + '+ svg').should('be.visible')
    cy.get('h3').should('have.text', "Epic sadface: Username is required")
  })
  it('Tentar logar sem informar senha', () => {
    cy.get('#user-name').type('standard_user').should('have.value', 'standard_user')
    cy.get('#login-button').click()
    cy.get('#user-name' + '+ svg').should('be.visible')
    cy.get('h3').should('have.text', "Epic sadface: Password is required")
  })

})

describe('Login com variaveis', () => {
  const txt_user = '#user-name'
  const txt_password = '#password'
  const btn_login = '#login-button'
  const lbl_invalid_login = 'h3'

  const lbl_products = 'span[class=title]'
  
  var usuario_sucesso = 'standard_user'
  var usuario_bloqueado = 'locked_out_user'
  var senha = 'secret_sauce' 

  var mensagem_user_required = "Epic sadface: Username is required"
  var mensagem_password_required = "Epic sadface: Password is required"
  var mensagem_blocked_user = "Epic sadface: Sorry, this user has been locked out."

    beforeEach(() => {
        cy.visit(Cypress.env("sauceDemo"))
    })
    it('Login sucesso', () => {
        cy.get(txt_user).type(usuario_sucesso).should('have.value', usuario_sucesso)
        cy.get(txt_password).type(senha, { log: false}).should('have.value', senha, { log: false})
        cy.get(btn_login).click()
        cy.get(lbl_products).should('have.text', "Products")
    })
    it('Login com usuário bloqueado', () => {
      cy.get(txt_user).type(usuario_bloqueado).should('have.value', usuario_bloqueado)
      cy.get(txt_password).type(senha, { log: false}).should('have.value', senha, { log: false})
      cy.get(btn_login).click()
      cy.get(lbl_invalid_login).should('have.text', mensagem_blocked_user)
  })
    it('Tentar logar sem informar usuário e senha', () => {
      cy.get(btn_login).click()
      cy.get(txt_user + '+ svg').should('be.visible')
      cy.get(txt_password + '+ svg').should('be.visible')
      cy.get(lbl_invalid_login).should('have.text', mensagem_user_required)
    })
    it('Tentar logar sem informar usuário', () => {
      cy.get(txt_password).type(senha).should('have.value', senha)
      cy.get(btn_login).click()
      cy.get(txt_user + '+ svg').should('be.visible')
      cy.get(lbl_invalid_login).should('have.text', mensagem_user_required)
    })
    it('Tentar logar sem informar senha', () => {
      cy.get(txt_user).type(usuario_sucesso).should('have.value', usuario_sucesso)
      cy.get(btn_login).click()
      cy.get(txt_user + '+ svg').should('be.visible')
      cy.get(lbl_invalid_login).should('have.text', mensagem_password_required)
    })

})

