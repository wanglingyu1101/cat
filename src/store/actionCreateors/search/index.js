import searchType from '../../actionType/search'
import axios from 'axios'
export  const clearMovie = ()=>({
    type:searchType.clearMovie,
    payload:{
        searchMovieList:[]
    }
})
export  const clearCinema = ()=>({
    type:searchType.clearCinema,
    payload:{
        searchCinemaList:[]
    }
})
export const  searchMovie = (searchMovieList)=>({
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
  upMovieList(kw='',stype=''){
      return async (dispatch)=>{
          const data = await  axios.get("/m/ajax/search",{
              params:{
                  kw,
                  cityId:1,
                  stype
              }
          })
          //当无数据时 将状态中的list清空
          if(data.movies)  dispatch(searchMovie(data.movies.list))
                else dispatch(clearMovie())
          if(data.cinemas) dispatch(searchCinema(data.cinemas.list))
                else dispatch(clearCinema())
      }
  }
}