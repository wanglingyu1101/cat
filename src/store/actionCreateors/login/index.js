import loginType from '../../actionType/login'
import axios from 'axios'
export const  testCode = (testCode)=>({
    type:loginType.testCode,
    payload:{
        testCode
    }
})
export const userLogin = (usertoken) =>({
    type:loginType.userLogin,
    payload:{
        usertoken
    }
})
export  default  {
    userRegist(phoneId){
        return async (dispatch)=>{
            const data = await  axios.get("/send",{
                params:{
                   phoneId
                }
            })
            dispatch(testCode(data.code))
        }
    },
    userLogin(code,phoneId){
        return async(dispatch) =>{
            const data = await  axios.post("/login",{
                code,phoneId
            })
            if(data.ok === 1)
                dispatch(userLogin(data.token))
        }
    }

}