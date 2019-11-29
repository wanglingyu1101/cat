import searchObj from '../../state/search'
function seaRenducer(state=searchObj,{type,payload}) {
    state = JSON.parse(JSON.stringify(state))
    // 获取电影总数
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
    if(type === 'GET_CINEMA_LIST')
        state.cinemaList = [...state.cinemaList,...payload.cinemaList]

    if(type === "UP_SEARCH_MOVIE")
        state.searchMovieList = payload.searchMovieList
    if(type === "UP_SEARCH_CINEMA")
        state.searchCinemaList = payload.searchCinemaList
    if(type === 'UP_TOTAL')
        state.total = payload.total
    return state
}
export  default  seaRenducer


