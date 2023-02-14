import NotifMsg from "../support/pages/herokuapp/NotifMsg.js";
const notifmsg = new NotifMsg ();

describe('Hero Ku App Notification Message tests', ()=> {

    beforeEach(() => {
        cy.visit(Cypress.env("herokuapp") + "/notification_message_rendered")

    })

    it('Messages', ()=>{

        notifmsg.clickHere()
        notifmsg.validateMsg()
                    

        })

})
