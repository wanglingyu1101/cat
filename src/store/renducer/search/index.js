import searchObj from '../../state/search'
function seaRenducer(state=searchObj,{type,payload}) {
    state = JSON.parse(JSON.stringify(state))
    if(type === "UP_SEARCH_MOVIE")
        state.searchMovieList = payload.searchMovieList
    return state
}
export  default  seaRenducer