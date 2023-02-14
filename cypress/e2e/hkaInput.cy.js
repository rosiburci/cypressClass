import Inputs from "../support/pages/herokuapp/Inputs.js";
const inputs = new Inputs ();
const faker = require('faker-br') // importando uma biblioteca para gerar massas de teste
const radomNum=faker.random.number()
const quant = require ("../fixtures/example.json")

describe('Hero Ku App Input tests', ()=> {

    beforeEach(() => {
        cy.visit(Cypress.env("herokuapp") + "/inputs")

    })

    it('Typing a number in input field', ()=>{

        inputs.typeNumber(radomNum)
        inputs.typeArrowUp()
        inputs.typeArrowUpValid(radomNum)
        inputs.typeArrowDownValid(radomNum)

    })

    it('Rolling Up', ()=>{

        addTypeUp(quant.quantity)
        cy.get('input[type="number"]').should('have.value', quant.quantity)

    })

    it('Rolling Down', ()=>{

        addTypeDown(quant.quantity)
        cy.get('input[type="number"]').should('have.value', -quant.quantity)

    })


    })


    function addTypeUp(quant) {
        const counter = []
        counter.length = quant
        cy.wrap(counter).each(() => {
            inputs.typeArrowUp () 
        })
       
    }


    function addTypeDown(quant) {
        const counter = []
        counter.length = quant
        cy.wrap(counter).each(() => {
            inputs.typeArrowDown () 
        })
       
    }