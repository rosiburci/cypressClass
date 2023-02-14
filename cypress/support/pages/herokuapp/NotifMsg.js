class NotifMsg{

    click_here = 'a'
    txt_msg= '#flash'

    clickHere(){
        cy.get(this.click_here).contains('Click here').click()
    }

    validateMsg(){
        cy.get(this.txt_msg).should('be.visible').then (msg => {

            expect(msg.text()).match(/(Action successful|Action unsuccesful, please try again)/)
        })
    }

    validateMsgIf(){
        cy.get(this.txt_msg).should('be.visible').then(($fmsg) => {
            let msg = $fmsg.text()
            cy.log('value is', msg)

            if(msg === '\n Action successful\n ×\n          ') {
                cy.log('sucess msg')

            } else { 
                if(msg === '\n Action unsuccesful, please try again\n ×\n          ')  {
                    cy.log('error msg')
                }

                }
        })

    }
               

}


export default NotifMsg;