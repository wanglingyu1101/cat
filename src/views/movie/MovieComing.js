import  React from 'react'
import {bindActionCreators} from "redux";
import {connect} from 'react-redux'
import '../../assets/css/movie/movieComing.css'
import {PullToRefresh} from 'antd-mobile'
import {withRouter} from 'react-router-dom'
import actionMovieCreators from '../../store/actionCreateors/movie/index'
let comingPage = 2;
// let exactedPage = 2;
let comingTitle = '';
class MovieComing extends React.Component{
    constructor(){
        super()
        this.state = {
            refreshing: false,
            height: document.documentElement.clientHeight,
            width:document.documentElement.clientWidth,
            showCat:'none'
        };
    }
    render(){
        return (
            <div id={'coming'}>

                <div className="most-expected-ll">
                    <p className="title-ll">近期最受期待</p>
                    <div className="most-expected-list-ll">

                    {
                        this.props.expectedList?this.props.expectedList.map((v,i)=>(
                                <div className="expected-item-ll" key={i}>
                                    <div className="poster default-img-bg-ll">
                                        <img alt="" src={this.props.movieList?this.$tools.movieImg(v.img):''}/>
                                        <span className="wish-bg-ll"></span>
                                        <span className="wish-ll"><span className="wish-num-ll">{v.wish}</span>人想看</span>
                                        <div className="toggle-wish-ll">
                                            <span style={{backgroundImage:'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAoCAYAAACFFRgXAAAABGdBTUEAALGPC/xhBQAAAytJREFUWAnVmLtrFFEUh3cWFAtRE5FEEUREsFAkooUIgl3+CUEU7LVR1LBIMERCLFLZRG1CrFJYpLBQENRGC4n4wBeKRUQ2PlAQX+v3m70z7MzemZ3HZp05cPbce86553w7O7Mzc51KjDQaDYfwDvSAseux69Cv6Ef0LXoHXXAc5y82UqhVJbgLPYhuQTega9DPaB19ht6VpVYDaxUBWYUGewkcQzdbE4LOJabXaHQ76G7OqHWI0RG0v+mJ/XxPdJpaD2xZbcAUX0XiSXS/bUEH3yPil2imL1Chln6RE+huzVPKffJV60frugAwDfoI1tBtrUkpx4vknzVrLmAHU65vTX/F5DzQnzynDwzsCpwX0e1eMIfV+S3ReZpXXlDgFNC/VEgXgifHGXQDVvUE2g1Y1RKT2FxxgTm6cg4bXxHNsGH0j/DhIlKGmFzGKuSbCAyFgkWcDsG6UaeE/m/LIvsEvKcstGIV8ECJgAcErJtFWaRPwCvLQitWAbv3/ZJALwlYj3ZlkbqA9YBRFnkp4HtloRWrgJ+g/uNbgeHF+LTKY5tebWYLDOqhzYpVR1hyE33njor5ITYxNp/WIP/DeBINvI4ooQAipknD6D9eVnC8JjCOxr799vgLiGXcsLmtvVPCnRB4yGDanRTjQ2/PYvIlACwvCTcwM37G/xvMGJYAQRuwoiRex8wFMns7mTMMbV2twMpiwVXMfNuK5XfMm97WTpHAJvsy9pZ15fI41Us9IyUWmG+qPa4ptBe3b/WYMj2zAWsVBfQfPYEGrlbFuiiqPWF6xZaNPcLeSgr9ZjyGLni+LlrVHDM9OpZNBKwqFPyJGUWfa94lUa1RUztRSX9vLVE2SewNrMboaG9NuiYi7w3+M8B+i4hb3amBVQXotRjdxpPsHWtJWLQHfBrYL+FAp3kmYBUFWnu/2u1Mu03wgTXajaxjU0tmYHUCehAj6H7NE4ggBSvoTJL4orNVp/Eifm1eJ/lplXMuD6wYcgGrAAA6H0fQ75pHiGIjJjciJZk7N7DaAKIrvobarnj5aiaHYT7JdQ6HW5sL8Sj+nSb2GHsF2EwXWLi+5v8ArR6xIZ+h44wAAAAASUVORK5CYII=)',
                                            }}></span>
                                        </div>
                                    </div>
                                    <h5 className="name line-ellipsis-ll">{v.nm}</h5>
                                    <p className="date-ll">{v.comingTitle}</p>
                                </div>
                        )):null
                    }
                </div>
                </div>
                <div className="list-wrap" style={{marginTop:"0px",display:'block'}}>
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
                                this.props.upMovie(this.$tools.moviePage(comingPage++,this.props.allMoviesId))
                            },1000);
                        }}
                    >
                {

                    this.props.movieList?this.props.movieList.map((v,i)=>(
                        <div className="item"  data-bid="dp_wx_home_movie_list" key={i} onClick={this.spaceCinemaMovie.bind(this,v.id)}>

                            <div className="main-block" >
                                <p style={{paddingTop:'10px'}}>
                                {
                                    v.comingTitle === comingTitle?null:comingTitle=v.comingTitle
                                }
                                </p>
                                {/*<p>{v.comingTitle}</p>*/}
                                <div className="avatar" sort-flag="">
                                    <div className="default-img-bg">
                                        <img alt="" src={this.props.movieList?this.$tools.movieImg(v.img):''} />
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
                                                <span className="grade">{v.wish}</span>
                                                <span className="score-suffix">人想看</span>
                                            </div>
                                            <div className="actor line-ellipsis">主演:{v.star}</div>
                                            <div className="show-info line-ellipsis">{v.rt}上映</div>
                                        </div>
                                    </div>
                                    <div className="button-block" data-id="247949">
                                        {
                                            v.showInfo?
                                                <div className="btn pre"><span className="fix" data-bid="dp_wx_home_movie_btn">预售</span></div>:
                                                <div className="btn normal" ><span className="fix" data-bid="dp_wx_home_movie_btn">想看</span></div>
                                        }
                                    </div>
                                        </div>
                            </div>
                        </div>

                    )):null
                }
                    </PullToRefresh>

                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getComing()
        this.props.getExpectMovie()
    }

    spaceCinemaMovie(movieId){

        this.props.history.push("/cinema/movie/"+movieId)
    }
    componentWillUnmount() {
        this.setState = (state, callback) => {
            return;
        };
    }
}
function mapStateToProps(state) {
    return {
        movieList:state.movie.movieList,
        allMoviesId:state.movie.allMoviesIdList,
        expectedList:state.movie.expectedList
    }
}

export  default connect(mapStateToProps,dispatch=>bindActionCreators(actionMovieCreators,dispatch))(withRouter(MovieComing))