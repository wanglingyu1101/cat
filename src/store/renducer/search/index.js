import searchObj from '../../state/search'
function seaRenducer(state=searchObj,{type,payload}) {
    state = JSON.parse(JSON.stringify(state))
    if(type === "CLEAR_MOVIE"){
        state.searchMovieList = payload.searchMovieList
        state.total = payload.total
    }
    if(type === 'CLEAR_CINEMA'){
        state.searchCinemaList = payload.searchCinemaList
        state.total = payload.total
    }
    if(type === 'GET_MOVIE_LIST')
        state.movieList = [...state.movieList,...payload.movieList]

    if(type === "UP_SEARCH_MOVIE")
        state.searchMovieList = payload.searchMovieList
    if(type === "UP_SEARCH_CINEMA")
        state.searchCinemaList = payload.searchCinemaList
    if(type === 'UP_TOTAL')
        state.total = payload.total
    console.log(state.movieList)
    return state
}
export  default  seaRenducer


