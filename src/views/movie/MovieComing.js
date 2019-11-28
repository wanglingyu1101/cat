import  React from 'react'
import {bindActionCreators} from "redux";
import {connect} from 'react-redux'
import '../../assets/css/movieComing.css'
import actionMovieCreators from '../../store/actionCreateors/movie/index'
let comingPage = 2;
let exactedPage = 2;
let comingTitle = '';
class MovieComing extends React.Component{
    render(){
        return (
            <div id={'coming'}>
                {/*{*/}
                    {/*this.props.expectedList.map((v,i)=>*/}
                        {/*<div key={i}>*/}
                            {/*<p> 电影名:{v.nm}</p>*/}
                            {/*<p>上映时间：{v.comingTitle}</p>*/}
                            {/*<img src={this.props.expectedList?this.$tools.expectedImg(v.img):""} alt=""/>*/}
                        {/*</div>)*/}
                {/*}*/}
                {/*<button onClick={()=>this.props.getExpectMovie(exactedPage++)}>加载更多</button>*/}
                {/*{*/}
                    {/*this.props.movieList.map((v,i)=>*/}
                        {/*<div key={i}>*/}
                            {/*<p> 电影名:{v.nm}</p>*/}
                            {/*<p>{v.version}</p>*/}
                            {/*/!*{  imgurl  中的  /w.h/    ===>    /128.180/  }*!/*/}
                            {/*<img src={this.props.movieList?this.$tools.movieImg(v.img):''} alt=""/>*/}
                            {/*<p>{v.showInfo}</p>*/}
                            {/*<p>观众评：{v.sc}</p>*/}
                            {/*<p>主演：{v.star}</p>*/}
                            {/*<hr/>*/}
                        {/*</div>)*/}
                {/*}*/}
                <div className="list-wrap" style={{marginTop:"0px"}}>

                {

                    this.props.movieList.map((v,i)=>(
                        <div className="item"  data-bid="dp_wx_home_movie_list" key={i}>

                            <div className="main-block" >
                                {/*{*/}
                                    {/*comingTitle === v.comingTitile?<p>{不知哪里出错了？？？不显示}</p>:<p>{v.comingTitle}</p>*/}
                                {/*}*/}
                                {/*{*/}
                                    {/*comingTitle = v.comingTitile*/}
                                {/*}*/}

                                <p>{v.comingTitle}</p>
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

                    ))
                }


                    <a id="download-tip" className="download-tip" href="/app?channel=mymovie1yuan-dy" data-lab="{&quot;position&quot;:&quot;bottom&quot;, &quot;utm_content&quot;: &quot;&quot;, &quot;utm_source&quot;: &quot;&quot;}" ></a>
                <button onClick={this.props.upMovie.bind(this,this.$tools.moviePage(comingPage++,this.props.allMoviesId))}>加载更多</button>
                </div>
            </div>
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
        allMoviesId:state.movie.allMoviesIdList,
        expectedList:state.movie.expectedList
    }
}

export  default connect(mapStateToProps,dispatch=>bindActionCreators(actionMovieCreators,dispatch))(MovieComing)