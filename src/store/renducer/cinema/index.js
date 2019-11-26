import cinemaObj from '../../state/cinema'
function cinRenducer(state=cinemaObj,{type,payload}) {
    state = JSON.parse(JSON.stringify(state))
    if(type === "GET_CINEMA_LIST")
        state.cinemaList = [
            ...state.cinemaList,
            ...payload.cinemaList
        ]
    return state
}
export  default  cinRenducer