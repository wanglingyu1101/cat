import  React from 'react'
import {bindActionCreators} from "redux";
import {connect} from 'react-redux'
import actionMovieCreators from '../../store/actionCreateors/movie/index'
import {PullToRefresh} from 'antd-mobile'

let onInfoPage = 2
class MovieOnInfo extends React.Component{
    constructor(){
        super()
        this.state = {
            refreshing: false,
            height: document.documentElement.clientHeight,
        };
    }
    render(){
        return (
        <div id={'oninfo'}>
                <div className="list-wrap" style={{marginTop:"0px"}}>
                    <PullToRefresh
                        damping={60}
                        style={{
                            height: this.state.height,
                            overflow: 'auto',
                        }}
                        indicator={{ deactivate: '上拉可以刷新' }}
                        direction={'up'}
                        refreshing={this.state.refreshing}
                        onRefresh={() => {
                            this.setState({ refreshing: false });
                            setTimeout(() => {
                                this.props.upMovie(this.$tools.moviePage(onInfoPage++,this.props.allMoviesId))

                            },1000);
                        }}
                    >
                {
                    this.props.movieList.map((v,i)=>(
                        <div className="item"  data-bid="dp_wx_home_movie_list" key={i}>
                            <div className="main-block">
                                <div className="avatar" sort-flag="">
                                    <div className="default-img-bg">
                                        <img src={this.props.movieList?this.$tools.movieImg(v.img):''} />
                                    </div>
                                </div>
                                <div className="mb-outline-b content-wrapper">
                                    <div className="column content">
                                        <div className="box-flex movie-title">
                                            <div className="title line-ellipsis v3dimax_title">{v.nm}</div>
                                            <span className={v.version}></span>
                                        </div>
                                        <div className="detail column">
                                            <div className="score line-ellipsis">
                                                {
                                                    v.sc===0?<span className="grade">{v.wish}</span>
                                                    :<span className="score-suffix">观众评:</span>
                                                }
                                                {
                                                    v.sc===0?<span className="score-suffix">人想看</span>:<span className="grade">{v.sc}</span>
                                                }
                                            </div>
                                            <div className="actor line-ellipsis">{v.star}</div>
                                            <div className="show-info line-ellipsis">{v.showInfo}</div>
                                        </div>
                                    </div>
                                    <div className="button-block" data-id="247949">
                                        {
                                            v.sc===0?
                                                <div className="btn pre"><span className="fix" data-bid="dp_wx_home_movie_btn">预售</span></div>:
                                                <div className="btn normal"><span className="fix" data-bid="dp_wx_home_movie_btn">购票</span></div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))
                }
                    </PullToRefresh>


                    <button onClick={this.props.upMovie.bind(this,this.$tools.moviePage(onInfoPage++,this.props.allMoviesId))}>加载更多</button>
                </div>

        </div>
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