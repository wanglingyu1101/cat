import  React from 'react'
import {bindActionCreators} from "redux";
import {connect} from 'react-redux'
import actionMovieCreators from '../store/actionCreateors/movie'
let comingPage = 2
class MovieComing extends React.Component{
    render(){
        return (
            <>
                {

                }
                {
                    this.props.movieList.map((v,i)=>
                        <div key={i}>
                            <p> 电影名:{v.nm}</p>
                            <p>{v.version}</p>
                            {/*{  imgurl  中的  /w.h/    ===>    /128.180/  }*/}
                            <img src={this.props.movieList?this.$tools.movieImg(v.img):''} alt=""/>
                            <p>{v.showInfo}</p>
                            <p>观众评：{v.sc}</p>
                            <p>主演：{v.star}</p>
                            <hr/>
                        </div>)
                }

                <button onClick={this.props.upMovie.bind(this,this.$tools.moviePage(comingPage++,this.props.allMoviesId))}>加载更多</button>
            </>
        )
    }
    componentDidMount(){
        this.props.getComing()
        this.props.getExpectMovie()
    }
}
function mapStateToProps(state) {
    return {
        movieList:state.movie.movieList,
        allMoviesId:state.movie.allMoviesIdList
    }
}

export  default connect(mapStateToProps,dispatch=>bindActionCreators(actionMovieCreators,dispatch))(MovieComing)