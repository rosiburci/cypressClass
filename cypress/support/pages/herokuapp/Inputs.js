class Inputs{

    txt_input='input[type="number"]'


    typeNumber (number) {
        cy.get(this.txt_input).type(number)
    }

    typeArrowUp ()    {
        cy.get(this.txt_input).type('{uparrow}')

    }

    typeArrowDown ()    {
        cy.get(this.txt_input).type('{downarrow}')

    }


    typeArrowUpValid (number)    {
        cy.get(this.txt_input).should('have.value', number+1)

    }

    typeArrowDownValid (number)    {
        cy.get('input[type="number"]').type('{downarrow}').should('have.value', number)
        cy.get('input[type="number"]').type('{downarrow}').should('have.value', number-1)
    }
    


}

export default Inputs;