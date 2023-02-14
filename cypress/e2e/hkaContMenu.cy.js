import ContMenu from "../support/pages/herokuapp/ContMenu.js";
const contmenu = new ContMenu ();

describe('Hero Ku App Context Menu', ()=> {

    beforeEach(() => {
        cy.visit(Cypress.env("herokuapp") + "/context_menu")

    })

    it('Clicking right button', ()=>{

        contmenu.hotSpotClick()
        contmenu.alertValid()

    })

})