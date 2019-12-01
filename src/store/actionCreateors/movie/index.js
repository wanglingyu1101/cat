import movieType from '../../actionType/movie'
import axios from 'axios'
// export const  upOnInfo =  onInfoList =>({
//     type:movieType.upOnInfo,
//     payload:{
//         onInfoList
//     }
// })
// export const upComing = comingList =>({
//     type:movieType.upComing,
//     payload:{
//         comingList
//     }
// })
export const  clearMovie = (movieList)=>({
    type:movieType.clearMovie,
    payload:{
        movieList
    }
})
export const upMovie = movieList =>({
    type:movieType.upMovie,
    payload:{
        movieList
    }
})
export const upExpected = expectedList =>({
    type:movieType.upExpected,
    payload:{
        expectedList
    }
})
export const getMoviesId = moviesId =>({
    type:movieType.getMoviesId,
    payload:{
        moviesId
    }
})
export  default  {
    //获取第一页正在热映的电影  和 所有movieids
    getOnInfo(){
        return async (dispatch) =>{
            dispatch(clearMovie([]))
            const data = await axios.get("/m/ajax/movieOnInfoList")
            dispatch(clearMovie(data.movieList))
            dispatch(getMoviesId(data.movieIds))
        }
    },
    //获取第一页即将上映的电影  和 所有movieids
    getComing(){
        return async (dispatch) =>{
            dispatch(clearMovie([]))
            const data = await axios.get("/m/ajax/comingList",{
                params:{
                    ci:1,
                    token:'',
                    limit:10
                }
            })
            dispatch(clearMovie(data.coming))
            dispatch(getMoviesId(data.movieIds))
        }
    },
    //获取电影
    upMovie(movieId=[]){
        //把数组变成字符串
        let movieIds = movieId[0]
        let movieLen = movieId.length
        for(let i=1;i<movieLen;i++){
            movieIds += "," + movieId[i]
        }
        //限制边界条件   在过滤器中 超过限制 返回 -1
        if(movieId === -1) return false
        return async (dispatch) =>{
            const data = await axios.get("/m/ajax/moreComingList",{
                params:{
                    token:'',
                    movieIds
                }
            })
            dispatch(upMovie(data.coming))
        }
    },
    //获取受欢迎电影
    getExpectMovie(page=1){
        return async (dispatch) =>{
            const data = await axios.get("/m/ajax/mostExpected",{
                params:{
                    ci:1,
                    token:'',
                    limit:10,
                    offset:10*page-10
                }
            })
            dispatch(upExpected(data.coming))
        }
    }
}