import  React from 'react'
import {bindActionCreators} from "redux";
import {connect} from 'react-redux'
import '../../assets/css/movieComing.css'
import {PullToRefresh} from 'antd-mobile'
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
                        this.props.expectedList.map((v,i)=>(
                                <div className="expected-item-ll" key={i}>
                                    <div className="poster default-img-bg-ll">
                                        <img src={this.props.movieList?this.$tools.movieImg(v.img):''}/>
                                        <span className="wish-bg-ll"></span>
                                        <span className="wish-ll"><span className="wish-num-ll">{v.wish}</span>人想看</span>
                                        <div className="toggle-wish-ll" data-wishst="0" data-movieid="1217023">
                                            <span></span>
                                        </div>
                                    </div>
                                    <h5 className="name line-ellipsis-ll">{v.nm}</h5>
                                    <p className="date-ll">{v.comingTitle}</p>
                                </div>
                        ))
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

                    this.props.movieList.map((v,i)=>(
                        <div className="item"  data-bid="dp_wx_home_movie_list" key={i}>

                            <div className="main-block" >
                                <p style={{paddingTop:'10px'}}>
                                {
                                    v.comingTitle === comingTitle?null:comingTitle=v.comingTitle
                                }
                                </p>
                                {/*<p>{v.comingTitle}</p>*/}
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
                                    <hr/>
                                </div>
                            </div>
                        </div>

                    ))
                }
                    </PullToRefresh>

                    <a id="download-tip" className="download-tip" href="/app?channel=mymovie1yuan-dy" style={{display:this.state.showCat}}></a>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getComing()
        this.props.getExpectMovie()

        window.addEventListener('scroll', this.handleScroll);

    }

    handleScroll =()=>{
        let ctx=this;
        let scrollTop  = document.documentElement.scrollTop;  //滚动条滚动高度
        if(scrollTop>100){
            ctx.setState( {showCat: "block"})
        }else{
            ctx.setState({showCat:'none'})
        }
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