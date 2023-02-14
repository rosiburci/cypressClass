class AddRem{
    btn_add= 'button[onclick="addElement()"]'
    btn_rem= 'button[onclick="deleteElement()"]'

    addOneElem(){
        cy.get(this.btn_add).click()
    }

    remOneElem(){
        cy.get(this.btn_rem).last().click()

    }

    remAllElem(){
        cy.get(this.btn_rem).click({ multiple: true })

    }



}

export default AddRem;