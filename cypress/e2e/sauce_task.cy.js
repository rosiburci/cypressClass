import Login from "../support/pages/sauce/Login";
const errorMsg = require ("../fixtures/example.json")
const login = new Login ();
var usrnameSuc = 'standard_user'
var usrnameLock = 'locked_out_user'
var password = 'secret_sauce'

describe ('Login sauce class', () => {
    beforeEach(() => {
        login.acessarTela()

    }) 

    

    it ('Success Login', () => {
        login.preencherCampos(usrnameSuc,password)

    })

    it ('Locked Login', ()=> {
        login.preencherCampos(usrnameLock,password)
        login.validError(errorMsg.errorScLock)

    })

    
    
    
})