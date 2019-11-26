import searchType from '../../actionType/search'
import axios from 'axios'
export const  searchMovie = (searchMovieList)=>({
    type:searchType.upSearchMovie,
    payload:{
        searchMovieList
    }
})

export  default  {
  upMovieList(kw=''){
      return async (dispatch)=>{
          const data = await  axios.get("/search",{
              params:{
                  kw,
                  cityId:1
              }
          })
          if(data.movies)
         dispatch(searchMovie(data.movies.list))
      }
  }

}