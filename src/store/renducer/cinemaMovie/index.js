import cinemaMovieobj from '../../state/cinemaMovie';

function cinemaMovieRenducer(state = cinemaMovieobj,{type,payload}) {
    state = JSON.parse(JSON.stringify(state))
    if(type === "GET_CINEMA_MOVIE_DETAIL")
        state.detailMovie = payload.detailMovie
    if(type === "GET_CINEMA_MOVIE_FILTER")
        state.MovieFilter = payload.MovieFilter
    if(type === "GET_MOVIE_CINEMA_LIST")
        state.deMovieList = payload.deMovieList
    if(type === "UP_MOVIE_CINEMA_LIST")
        state.deMovieList.cinemas = [
            ...state.deMovieList.cinemas,
            ...payload.deMovieList.cinemas
        ]
    return state
}

export default cinemaMovieRenducer