import  React from 'react'
import {bindActionCreators} from "redux";
import {connect} from 'react-redux'
import actionMovieCreators from '../../store/actionCreateors/movie/index'
import '../../assets/css/movieOnInfo.css'
let onInfoPage = 2
class MovieOnInfo extends React.Component{
    render(){
        return (
        <div id={'oninfo'}>
            {/*{*/}
                {/*this.props.movieList.map((v,i)=>*/}
                    {/*<div key={i}>*/}
                        {/*<p> 电影名:{v.nm}</p>*/}
                        {/*<p>{v.version}</p>*/}
                        {/*/!*v.img.slice(v.img.search('movie'))   movie/609e45bd40346eb8b927381be8fb27a61760914.jpg *!/*/}
                        {/*/!*<p>{this.$tools.onInfoImg(v.img)}</p>*!/*/}
                        {/*{ /*问题一：  若为空数组 则过滤器中的onInfoImg 会报错*!/*/}
                        {/*<img src={this.props.movieList?this.$tools.movieImg(v.img):''} alt=""/>*/}
                        {/*<p>{v.showInfo}</p>*/}
                        {/*<p>观众评：{v.sc}</p>*/}
                        {/*<p>主演：{v.star}</p>*/}
                        {/*<hr/>*/}
                    {/*</div>)*/}
            {/*}*/}
                <header className="navbar">
                    <h1 className="nav-header">猫眼电影</h1>
                </header>
                <div className="body" style={{display:"block"}}>
                    <div className="download-app-bar">
                        <img src={"//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/avatar.png"} alt="logo" style={{width:"42px" ,height:"42px"}}/>
                        <div className="app-name-desc">
                            <div className="app-name">猫眼</div>
                            <div className="app-desc">在线选座，热门影讯，爱上看电影</div>
                        </div>
                        <div className="btn-open-app">立即打开</div>
                    </div>
                    <section className="topbar">
                        <div className="white-bg topbar-bg ">
                            <div className="city-entry">
                                <span className="city-name">北京</span><i className="city-entry-arrow"></i>
                            </div>
                            <div className="switch-hot" data-active=".n-hot">
                                <div className="hot-item active" data-tab=".n-hot">正在热映</div>
                                <div className="hot-item " data-tab=".f-hot">即将上映</div>
                            </div>
                            <div className="search-entry search-icon" data-type="movie"></div>
                        </div>
                    </section>
                </div>


                <div className="list-wrap" style={{marginTop:"0px"}}>



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

                    <a id="download-tip" className="download-tip" href="/app?channel=mymovie1yuan-dy" data-lab="{&quot;position&quot;:&quot;bottom&quot;, &quot;utm_content&quot;: &quot;&quot;, &quot;utm_source&quot;: &quot;&quot;}" ></a>

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