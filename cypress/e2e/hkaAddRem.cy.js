import AddRem from "../support/pages/herokuapp/AddRem.js";
const addrem = new AddRem ();
const quant1 = require ("../fixtures/example.json")
const quant2 = require ("../fixtures/example.json")

describe('Hero Ku App Add Remove Elements', ()=> {

    beforeEach(() => {
        cy.visit(Cypress.env("herokuapp") + "/add_remove_elements/")

    })

    it('Adding and removing x elements', ()=>{

        addElements(quant1.quantity)
        remElements(quant2.quantity2)
        validCountElements()

    })


    it('Adding x elements and removing all', ()=>{

        addElements(4)
        addrem.remAllElem()
        cy.get('button[onclick="deleteElement()"]').should('not.exist')



    })


})


function addElements(quant1) {
    const counter = []
    counter.length = quant1
    cy.wrap(counter).each(() => {
        addrem.addOneElem () 
    })
   
}


function remElements(quant2) {
    const counter = []
    counter.length = quant2
    cy.wrap(counter).each(() => {
        addrem.remOneElem() 
    })
   
}


function validCountElements() {
    const sub = quant1.quantity - quant2.quantity2
    cy.log('subtraction value '+ sub)
    cy.get('button[onclick="deleteElement()"]').then((delValue) =>{
        const countDel= delValue.length
        cy.log('del buttons values '+ countDel)
        expect(countDel).to.eq(sub)
    })
    
    
   
}