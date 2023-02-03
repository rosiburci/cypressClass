
const fixture = require('../fixtures/example.json') //importando o conteudo do arquivo para uma variavel
const faker = require('faker-br') // importando uma biblioteca para gerar massas de teste

describe('secondTask', ()=> {

    beforeEach(() => {
        cy.visit(Cypress.env("phpTravels"))

    })

    it('Sucess', ()=>{
        fillform(faker.name.firstName(), faker.name.lastName(), faker.name.lastName(), faker.internet.email())
        
        storeSumElements()
        cy.get('@variavel_global').then(numeros_da_variavel_global => {
            const soma_numeros = parseInt(numeros_da_variavel_global[0]) + parseInt(numeros_da_variavel_global[1])
            cy.get('#number').click({ force: true }).type(soma_numeros)
            cy.get('#demo').contains('Submit').click({ force: true })

            cy.get('#colored').should('be.visible')
            cy.get('p.text-center.cw').should('have.text',fixture.name)
        })
      
    
        })

        it('ErrorSum', ()=>{
            fillform(faker.name.firstName(), faker.name.lastName(), faker.name.lastName(), faker.internet.email())
            
            storeSumElements()
            cy.get('@variavel_global').then(numeros_da_variavel_global => {
                const error_sum = parseInt(numeros_da_variavel_global[0]) - parseInt(numeros_da_variavel_global[1])
                cy.get('#number').click({ force: true }).type(error_sum)
                cy.get('#demo').contains('Submit').click({ force: true })

                cy.get('#number').should('be.visible').should('have.value', error_sum)
                cy.get('input[name="first_name"]').should('be.visible')
            })
          
            })

            it.only('SumNull', ()=>{
                fillform(faker.name.firstName(), faker.name.lastName(), faker.name.lastName(), faker.internet.email())
                cy.get('#demo').contains('Submit').click({ force: true })
                cy.on('window:alert', (str) => {
                    expect(str).to.equal('Please input result number')                                  
                  })
                
                cy.get('input[name="first_name"]').should('be.visible')

              
                })

    })
    

function fillform(firstName, lastName, busName, email) {
    cy.get('input[name="first_name"]').click({ force: true }).type(firstName)
    cy.get('input[name="last_name"]').click({ force: true }).type(lastName)
    cy.get('input[name="business_name"]').click({ force: true }).type(busName)
    cy.get('input[name="email"]').click({ force: true }).type(email)
}

function storeSumElements() {
    cy.get('.df').then((elementos_da_tela) => {
        let numeros_que_preciso_salvar = []
        numeros_que_preciso_salvar[0] = elementos_da_tela.find('#numb1').text()
        numeros_que_preciso_salvar[1] = elementos_da_tela.find('#numb2').text()
        cy.wrap(numeros_que_preciso_salvar).as('variavel_global')
    })

}