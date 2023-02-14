class ContMenu{

    el_hot_spot = '#hot-spot'
    

    hotSpotClick(){
        cy.get(this.el_hot_spot).rightclick()
    }

    alertValid(){
        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('You selected a context menu')   
                           
          })
    }

}

export default ContMenu;