import  React from 'react'
import {bindActionCreators} from "redux";
import {connect} from 'react-redux'
import actionMovieCreators from '../../store/actionCreateors/movie/index'
let onInfoPage = 2
class MovieOnInfo extends React.Component{
    render(){
        return (
            <>
                {
                    this.props.movieList.map((v,i)=>
                    <div key={i}>
                    <p> 电影名:{v.nm}</p>
                        <p>{v.version}</p>
                        {/*v.img.slice(v.img.search('movie'))   movie/609e45bd40346eb8b927381be8fb27a61760914.jpg */}
                        {/*<p>{this.$tools.onInfoImg(v.img)}</p>*/}
                        { /*问题一：  若为空数组 则过滤器中的onInfoImg 会报错*/}
                        <img src={this.props.movieList?this.$tools.movieImg(v.img):''} alt=""/>
                        <p>{v.showInfo}</p>
                        <p>观众评：{v.sc}</p>
                        <p>主演：{v.star}</p>
                        <hr/>
                    </div>)
                }

                <button onClick={this.props.upMovie.bind(this,this.$tools.moviePage(onInfoPage++,this.props.allMoviesId))}>加载更多</button>
            </>
        )
    }
    componentDidMount(){
        this.props.getOnInfo()
    }
}
function mapStateToProps(state) {
    return {
        movieList:state.movie.movieList,
        allMoviesId:state.movie.allMoviesIdList
    }
}

export  default connect(mapStateToProps,dispatch=>bindActionCreators(actionMovieCreators,dispatch))(MovieOnInfo)