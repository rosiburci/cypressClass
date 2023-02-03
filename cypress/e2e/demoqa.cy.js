describe('Student Registration', ()=> {
    beforeEach(() => {
        cy.visit(Cypress.env("demoQA"))

    }) 

    it('StudentRegistration', ()=>{
        cy.get('#firstName').type ('Studen1')
        cy.get('#lastName').type ('Silva')
        cy.get('#userEmail').type ('std@teste.com')
        cy.get('#userEmail').type ('std@teste.com')
        cy.get('.custom-control-label').contains('Male').click()
        cy.get('#userNumber').type("123456")
        cy.get('#dateOfBirthInput').click().then(() => {
            cy.get('.react-datepicker__month-select').select("March")
            cy.get('.react-datepicker__year-select').select("1994")
            cy.get('.react-datepicker__day').contains("23").click()
        })
            cy.get('#subjectsContainer').type("En").then(() => {
            cy.get('.subjects-auto-complete__menu-list').contains("English").click()      
            
})

})

})