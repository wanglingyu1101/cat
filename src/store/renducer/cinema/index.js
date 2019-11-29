import cinemaObj from '../../state/cinema'
function cinRenducer(state=cinemaObj,{type,payload}) {
    state = JSON.parse(JSON.stringify(state))
    if(type === "GET_CINEMA_LIST")
        state.cinemaList = payload.cinemaList
    if(type === "UP_CINEMA_LIST")
        state.cinemaList = [
            ...state.cinemaList,
            ...payload.cinemaList
        ]
    if(type === 'GET_CINEMA_DETAIL')
        state.cinemaDetail = payload.cinemaDetail
    return state
}
export  default  cinRenducer