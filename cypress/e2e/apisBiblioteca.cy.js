describe ('APIs Biblioteca', () => {
    
    it.only('Get Books', () => {
       // cy.request('GET', 'localhost:3000/books')
        cy.request({
            method: 'GET', 
            url: 'localhost:3000/books', 
            headers: {
              'G-TOKEN': 'ROM831ESV'
            }
          }).then( (response) => {
          
            cy.log(response.status) // 201
            cy.log(response.duration) // 11
            cy.log(response.body[29]['id'])
            cy.log(response.body[29]['title'])
          })

        })

    it ('Add Books', () => {
        cy.request({
            method: 'POST', 
            url: 'localhost:3000/books', 
            headers: {
               'G-TOKEN': 'ROM831ESV'
            },
            body: {
            "title": "Livro Rosi 4",
            "author": "RosiBook4",
            "isbn": "08700ss9r",
            "releaseDate": "2020-06-03"
            }
            }).then( (response) => {        
            cy.log(response.status) // 201
            cy.log(response.duration) // 11
            })        
          
    })

})