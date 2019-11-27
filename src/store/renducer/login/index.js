import loginObj from '../../state/login'

function testLogin(state=loginObj,{type,payload}) {
    state = JSON.parse(JSON.stringify(state))
    if(type === "TEST_CODE")
        state.code = payload.testCode
    if(type === "USER_LOGIN")
        state.usertoken =  payload.token
    return state
}
export  default  testLogin