import searchType from '../../actionType/search'
import axios from 'axios'
export  const upTitle = (total)=>({
    type:searchType.upTotal,
    payload:{
        total
    }
})
export  const clearMovie = ()=>({
    type:searchType.clearMovie,
    payload:{
        searchMovieList:[],
        total:0
    }
})
export  const clearCinema = ()=>({
    type:searchType.clearCinema,
    payload:{
        searchCinemaList:[],
        total:0
    }
})
/*电影列表搜索*/
export const  movieList = (movieList)=>({
    type:searchType.getMovieList,
    payload:{
        movieList
    }
})
export const  cinemaList = (cinemaList)=>({
    type:searchType.getCinemaList,
    payload:{
        cinemaList
    }
})
export  const searchMovie = (searchMovieList)=>({
    type:searchType.upSearchMovie,
    payload:{
        searchMovieList
    }
})

export  const searchCinema = (searchCinemaList)=>({
    type:searchType.upSearchCinema,
    payload:{
        searchCinemaList
    }
})
export  default  {
  upMovieList(kw=''){
      return async (dispatch)=>{
          const data = await  axios.get("/m/ajax/search",{
              params:{
                  kw,
                  cityId:1,
              }
          })
          //当无数据时 将状态中的list清空
          if(data.movies)  {
              dispatch(upTitle(data.movies.total))
              dispatch(searchMovie(data.movies.list))
          }
                else dispatch(clearMovie())

      }
  },
  upCinemaList(kw=''){
      return async (dispatch)=>{
          const data = await  axios.get("/m/ajax/search",{
              params:{
                  kw,
                  cityId:1,
                  stype:2
              }
          })
          //当无数据时 将状态中的list清空
          if(data.cinemas)  {
              dispatch(searchCinema(data.cinemas.list))
              dispatch(upTitle(data.cinemas.total))
          }
          else dispatch(clearCinema())

      }
  },
    // http://m.maoyan.com/searchlist/movies?keyword=bing&ci=20&offset=20&limit=20
    getMovieList(keyword='',page=1){
        let offset = page*10 - 7;
        return async (dispatch)=>{
            const data = await  axios.get("/m/searchlist/movies",{
                params:{
                    keyword,
                    ci:1,
                    offset,
                    limit:10
                }
            })
            //当无数据时 将状态中的list清空
            if(data.movies)  {
                dispatch(movieList(data.movies))
            }
            else dispatch(clearMovie())

        }
    },
    getCinemaList(keyword='',page=1){
        let offset = page*10-7;
        return async (dispatch)=>{
            const data = await  axios.get("/m/searchlist/cinemas",{
                params:{
                    keyword,
                    ci:1,
                    offset,
                    limit:10
                }
            })
            //当无数据时 将状态中的list清空
            if(data.cinemas)  {
                dispatch(cinemaList(data.cinemas))
            }
            else dispatch(clearMovie())

        }
    }
}