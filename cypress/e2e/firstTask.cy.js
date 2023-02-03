describe('firstTask', ()=> {

    beforeEach(() => {
        cy.visit(Cypress.env("todoMVC"))

    })

    it.only('NewItem', ()=>{
        //cy.get('.new-todo').type('Item1{enter}')
       // cy.get('.new-todo').type('Item2{enter}') 
       // cy.get('.view').should('have.text', "Item1Item2")
       createTask('Item1')
       createTask('Item2')
       createTask('Item3')  


        cy.get('.toggle').then(($value)=> {

            const togLen= $value.length
            cy.log('toggle value is'+ togLen)
            
            cy.get('strong').then(($value2) => {
            const str= parseInt($value2.text())
            cy.log('strong value is'+ str)
            expect(togLen).to.eq(str)
            
            if(str>1) {
                cy.get('.todo-count').should('have.text', str+" items left")
            } else {
                cy.get('.todo-count').should('have.text', str+" item left")
            }             
            
        })      

        })
    })

    it('Completed filter', ()=>{
        cy.get('.new-todo').type ('Item1{enter}') 
        cy.get('.new-todo').type ('Item2{enter}')
       // cy.get('.toggle[type=checkbox]').first().check()
       // cy.get('.view>label').contains('Item2').then(() => {

       //     cy.get('.toggle[type=checkbox]').check()
        
       // })  

        cy.get('.view>label').contains('Item2').prev().check()
        cy.contains('a', 'Completed').click()
        //cy.get('.completed>.view>.toggle').should('be.visible')
        cy.get('.toggle').should('be.checked')
        cy.get('.view>label').contains('Item1').should('not.exist')
        //cy.get('.toggle').should('unchecked').and('not.exist')

    }) 

    it('Active filter', ()=>{
        cy.get('.new-todo').type ('Item1{enter}') 
        cy.get('.new-todo').type ('Item2{enter}')
        cy.get('.new-todo').type ('Item3{enter}')

        cy.get('.view>label').contains('Item2').prev().check()

        cy.contains('a', 'Active').click()

        cy.get('.toggle').should('not.checked')
        cy.get('.view>label').contains('Item2').should('not.exist')

    }) 

    it('All filter', ()=>{
        cy.get('.new-todo').type ('Item1{enter}') 
        cy.get('.new-todo').type ('Item2{enter}')
        cy.get('.new-todo').type ('Item3{enter}')

        cy.get('.view>label').contains('Item2').prev().check()

        cy.get('.view>label').contains('Item2').prev().should('be.checked')
        cy.get('.view>label').contains('Item1').prev().should('not.checked')
        cy.get('.view>label').contains('Item3').prev().should('not.checked')

    }) 


}) 

function createTask(task) {
    cy.get('.new-todo').type(task).type('{enter}')
    cy.get('.view>label').contains(task).should('be.visible').should('have.text', task)

}

function notCheckedValid(task) {
    

}


/*function criarVariasTarefasAleatórias(quantidade) {
    const contador = []
    contador.length = quantidade
    cy.wrap(contador).each(() => {
        criarTarefa(faker.name.firstName())
    })
    validarToogle()
}*/
