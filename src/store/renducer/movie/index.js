import movieObj from '../../state/movie'
function movRenducer(state=movieObj,{type,payload}) {
    state = JSON.parse(JSON.stringify(state))
    // if(type === "UP_ON_INFO")
    //     state.onInfoList = [...state.onInfoList,...payload.onInfoList]
    // if(type === 'UP_COMING')
    //     state.comingList = [...state.comingList,...payload.comingList]
    if(type === "CLEAR_MOVIE")
        state.movieList = payload.movieList
    if(type === 'UP_MOVIE')
        state.movieList = [...state.movieList,...payload.movieList]
    if(type === 'UP_EXPECTED')
        state.expectedList = [...state.expectedList,...payload.expectedList]
    if(type === "GET_MOVIES_ID")
        state.allMoviesIdList = payload.moviesId
    return state
}
export  default  movRenducer