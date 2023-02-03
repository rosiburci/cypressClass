const faker = require('faker-br') // importando uma biblioteca para gerar massas de teste

describe('secondTask', ()=> {

    beforeEach(() => {
        cy.visit(Cypress.env("phpTravels"))

    })

    it('Sucess', ()=>{
        fillform(faker.name.firstName(), faker.name.lastName(), faker.name.lastName(), faker.internet.email())
        resultSum()

      
        })

    })


function fillform(firstName, lastName, busName, email) {
    cy.get('input[name="first_name"]').click({ force: true }).type(firstName)
    cy.get('input[name="last_name"]').click({ force: true }).type(lastName)
    cy.get('input[name="business_name"]').click({ force: true }).type(busName)
    cy.get('input[name="email"]').click({ force: true }).type(email)
}

function resultSum() { 
    cy.get('#numb1').then(($v1) => {
        const nb1= parseInt($v1.text())
        cy.log('num1 value is'+ nb1)
       

            cy.get('#numb2').then(($v2) => {
                const nb2= parseInt($v2.text())
                cy.log('num2 value is'+ nb2)
    
    const result = nb1 +nb2 
    cy.log('result value is'+ result)
    cy.get('#number').click({ force: true }).type(result)
    cy.get('#demo').contains('Submit').click({ force: true })
        
        })
        })


}

