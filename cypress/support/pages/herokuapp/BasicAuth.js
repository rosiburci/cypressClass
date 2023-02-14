class BasicAuth{
    h3_msg= 'h3'
    p_msg= 'p'


   /* authUsername () {
        var user = "admin"
        var pass = "admin"
        cy.visit(`https://${user}:${pass}@the-internet.herokuapp.com/basic_auth`)
    }*/

   authUsername (user,pass) {
        cy.visit(`https://${user}:${pass}@the-internet.herokuapp.com/basic_auth`)
    }

    authHeader (headerValue) {
        cy.visit(Cypress.env("herokuapp") + "/basic_auth", {
            headers: {
                authorization: 'Basic '+ headerValue
        },
        failOnStatusCode: false
                
     })
    }

    successAuth (msg1, msg2) {
        cy.get(this.h3_msg).should('be.visible').should('have.text', msg1)
        cy.get(this.p_msg).should('be.visible').should('have.text', msg2)
    }

    failAuth(user, pass){
        cy.request({
            url: `https://${user}:${pass}@the-internet.herokuapp.com/basic_auth`, 
            failOnStatusCode: false,
            followRedirect: false, // turn off following redirects
          }).then((resp) => {
            expect(resp.status).to.eq(401)
          })
    }


}

export default BasicAuth;