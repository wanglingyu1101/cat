import cinemaObj from '../../state/cinema'
function cinRenducer(state=cinemaObj,{type,payload}) {
    state = JSON.parse(JSON.stringify(state))
    if(type === "UP_ON_INFO")
        state.cinemaList = payload
    return state
}
export  default  cinRenducer