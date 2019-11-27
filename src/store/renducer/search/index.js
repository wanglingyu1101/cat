import searchObj from '../../state/search'
function seaRenducer(state=searchObj,{type,payload}) {
    state = JSON.parse(JSON.stringify(state))
    if(type === "CLEAR_MOVIE")
        state.searchMovieList = payload.searchMovieList
    if(type === 'CLEAR_CINEMA')
        state.searchCinemaList = payload.searchCinemaList
    if(type === "UP_SEARCH_MOVIE")
        state.searchMovieList = payload.searchMovieList
    if(type === "UP_SEARCH_CINEMA")
        state.searchCinemaList = payload.searchCinemaList
    return state
}
export  default  seaRenducer


