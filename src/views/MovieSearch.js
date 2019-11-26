import  React from 'react'
import {withRouter} from 'react-router-dom'
class MovieSearch extends  React.Component{
    render(){
        return(
            <div>
                猫眼电影
            </div>
        )
    }
    componentWillMount(){
        console.log(this.props)
        // http://m.maoyan.com/searchlist/movies?keyword=bing&ci=20&offset=20&limit=20
        this.$axios.get("")
    } 
}
export  default  withRouter(MovieSearch)