import cinemaMovieType from '../../actionType/cinemaMovie';
import axios from 'axios';
import tools from '../../../filters'

export const getCinemaMovieDetail = (detailMovie) => ({
    type: cinemaMovieType.getCinemaMovieDetail,
    payload: {
        detailMovie
    }
});
export const getCinemaMovieFilter = (MovieFilter) => ({
    type: cinemaMovieType.getCinemaMovieFilter,
    payload: {
        MovieFilter
    }
});
export const getMovieCinemaList = (deMovieList) => ({
    type: cinemaMovieType.getMovieCinemaList,
    payload: {
        deMovieList
    }
});
export const upMovieCinemaList = (deMovieList)=>({
    type: cinemaMovieType.upMovieCinemaList,
    payload: {
        deMovieList
    }
})


export default {
    getCinemaMovieDetail(id) {
        return async (dispatch) => {
            const data = await axios.get("/m/ajax/detailmovie", {
                params: {
                    movieId: id
                }
            })
            dispatch(getCinemaMovieDetail(data.detailMovie))
        }
    },
    getCinemaMovieFilter(id) {
        return async (dispatch) => {
            const data = await axios.get("/m/ajax/filterCinemas", {
                params: {
                    movieId: id,
                    day: tools.date(Date.now())
                }
            })
            dispatch(getCinemaMovieFilter(data))
        }
    },
    getMovieCinemaList(id) {
        return async (dispatch) => {
            const data = await axios.post("/m/ajax/movie", {
                movieId: id,
                day:tools.date(Date.now()),
                offset: 0,
                limit: 20,
                updateShowDay: true,
                reqId: Date.now(),
                cityId: 1
            })
            dispatch(getMovieCinemaList(data))
        }
    },
    upMovieCinemaList(page = 1,id){
        return async (dispatch)=>{
            const data = await axios.post("/m/ajax/movie", {
                movieId: id,
                day:tools.date(Date.now()),
                offset: 20*page,
                limit: 20,
                updateShowDay: true,
                reqId: Date.now(),
                cityId: 1
            })
            dispatch(upMovieCinemaList(data))
        }
    }
}