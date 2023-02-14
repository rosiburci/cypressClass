import BasicAuth from "../support/pages/herokuapp/BasicAuth.js";
const basicauth = new BasicAuth ();
const sucMsg = require ("../fixtures/example.json")
var user = "admin"
var pass = "admin"
var header= "YWRtaW46YWRtaW4="

describe('herokuapp tests', ()=> {

    it('Basic Auth test', ()=>{

        basicauth.authUsername(user,pass)
        basicauth.successAuth(sucMsg.basicASucM1, sucMsg.basicASucM2)

    })

    it('Header Auth test', ()=>{

        basicauth.authHeader(header)
        basicauth.successAuth(sucMsg.basicASucM1, sucMsg.basicASucM2)   

    })   
    
    it('Fail Auth test', ()=>{

        basicauth.failAuth('teste','teste')
        //expect(statusCode).equal(401)
       // basicauth.successAuth(sucMsg.basicASucM1, sucMsg.basicASucM2)
    
    })
        

})
