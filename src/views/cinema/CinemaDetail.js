import  React,{Fragment} from 'react'
import {connect} from 'react-redux';
import Header from '../../component/Header'
import {bindActionCreators} from "redux";
import "../../assets/css/cinemadetail.css"
import {withRouter} from 'react-router-dom'
import actionCinemaCreators from "../../store/actionCreateors/cinema"
import noBody from "../../assets/img/noBody.png"
import Demo from '../../component/lunbotu'


class CinemaDetail extends React.Component{
    state = {
        index:0,
        showIndex:0
    }

    changIndex(i){
       this.setState({
           index:i,
           showIndex:0
       })
    }

    render(){

        return(

            this.props.cinemaDetail.channelId?
                <div>
                    {/*头部*/}
                    <Header head={this.props.cinemaDetail.cinemaData.nm} back={true}></Header>
                    {/*内容*/}
                    <div className="body">
                        <a id="download-header" href="/app?channel=mymovie1yuan-dy" >
                            <div className="download-app-bar">
                                <img className="img noneBg logo" alt="logo" src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/avatar.png"
                                     style={{width:"42px",height:'42px'}} />
                                <div className="app-name-desc">
                                    <div className="app-name">猫眼</div>
                                    <div className="app-desc">在线选座，热门影讯，爱上看电影</div>
                                </div>
                                <div className="btn-open-app">立即打开</div>
                            </div>
                        </a>
                        <a id="download-tip" className="download-tip" href="/app?channel=mymovie1yuan-dy" style={{display: 'none'}}></a>
                        <div className="body-wrap">
                            <div className="cinema-wrap">
                                <div className="cinema-block">
                                    <div className="cinema-info">

                                        <div className="title line-ellipsis">{this.props.cinemaDetail.cinemaData.nm}</div>


                                        <div className="location line-ellipsis">{this.props.cinemaDetail.cinemaData.addr}</div>
                                        <div className="location-icon iconfont icon-location" style={{color:'#5EADFF',fontSize:'25px'}}>
                                        </div>
                                    </div>

                                    <Demo dataP={this.props.cinemaDetail.showData.movies} changeIndex={this.changIndex.bind(this)}></Demo>
                                    <div>
                                        {
                                            this.props.cinemaDetail.showData?
                                                    <div className="movie-info">
                                                        <div className="movie-title line-ellipsis">
                                                            <span className="title">{this.props.cinemaDetail.showData.movies[this.state.index].nm}</span>
                                                            <span className="grade">
                                                                {
                                                                    this.props.cinemaDetail.showData.movies[this.state.index].sc!=='0.0'?<span>{this.props.cinemaDetail.showData.movies[this.state.index].sc}<span className="small">分</span></span>
                                                                        :<span>{this.props.cinemaDetail.showData.movies[this.state.index].wish}<span className="small">人想看</span></span>
                                                                }
                                                            </span>
                                                        </div>
                                                        <div className="movie-desc line-ellipsis">{this.props.cinemaDetail.showData.movies[this.state.index].desc}</div>
                                                    </div>:null
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="no-sell-cinema" style={{display:'none'}}>
                                <div className="tip-text mb-line-t line-ellipsis">暂无该影院的影片信息</div>
                                <div className="gap" style={{height:'10px', backgroundColor:'#f0f0f0'}}></div>
                                <div className="cinema-list">
                                    <div className="reCinema-title mb-line-b line-ellipsis">为您推荐该影院附近的可选座影院</div>
                                    <div className="list-wrap"></div>
                                </div>
                            </div>
                            <div className="nav-wrap">
                                <div className="nav-block mb-line-t">
                                    <div className="nav-bar mb-line-b">
                                        <div className="nav-bar-wrap">
                                            {
                                                this.props.cinemaDetail.showData&&this.props.cinemaDetail.showData.movies&&
                                                this.props.cinemaDetail.showData.movies[this.state.index].shows.map((v,i)=>(
                                                    <div className={this.state.showIndex===i?'nav-item active':'nav-item'} key={i} onClick={                                                                    ()=>this.setState({
                                                        showIndex:i
                                                    })}>
                                                        <span className="date-title">{v.dateShow}</span>
                                                    </div>
                                                ))
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="discount-block">
                                {/*问题出现  plist   121   163 原因  俩个index之间的问题   */}
                                {
                                    this.props.cinemaDetail.showData.vipInfo?
                                        <div className="vip-tips">
                                            <a>
                                                <div className="label">{this.props.cinemaDetail.showData.vipInfo[0].tag}</div>
                                                <div className="label-text line-ellipsis">{this.props.cinemaDetail.showData.vipInfo[0].title}</div>
                                                <div className="process">{this.props.cinemaDetail.showData.vipInfo[0].process}</div>
                                            </a>
                                        </div>:null
                                }

                            </div>
                            {
                                this.props.cinemaDetail.showData.movies[this.state.index].shows[this.state.showIndex].plist.map((v,i)=>(
                                    <div className="seat-wrap" key={i}>
                                        <div className="seat-inner-wrap">
                                            <div className="seat-list">
                                                <div className="list-wrap">
                                                    <div className="item-outer mb-line-b">

                                                        <div className="item box-flex">
                                                            <div className="time-block">
                                                                <div className="begin">{v.tm}</div>
                                                                <div className="end">{this.$tools.clockMin(v.tm,this.props.cinemaDetail.showData.movies[0].dur)}<span className="tui">散场</span></div>

                                                            </div>
                                                            <div className="info-block">
                                                                <div className="lan">{v.lang} {v.tp}</div>
                                                                <div className="hall">{v.th}</div>
                                                            </div>
                                                            <div className="price">
                                                                <div className="sellPr"><span className="d">¥</span><span><span
                                                                    className="stonefont">{this.$tools.add(v.vipPrice,v.reservedMin)}</span></span>
                                                                </div>
                                                                <div className="vipPrice" style={{display:v.vipPriceName?'inline-block':'none'}}>
                                                    <span className="icon" >
                                                        {v.vipPriceName}</span>
                                                                    <span className="num">{v.vipPrice}</span>
                                                                </div>
                                                                <div className="extraDesc">{v.extraDesc}</div>
                                                            </div>
                                                            <div className="button-block">
                                                                <div className="button">购票</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="tuan-wrap"  >
                        <div className="no-seat" style={{display:this.props.cinemaDetail.showData.movies[this.state.index].shows[this.state.showIndex].plist.length>0?'none':'block'}}>
                            <div className="icon">
                                <img className={'noBody'} src={noBody}/>
                            </div>

                            <div className="text">今日暂无场次</div>
                            <div className="next-date-button">
                                点击查看场次
                            </div>
                        </div>

                        {/*影院零食部分*/}
                        <div className="gap" style={{height: '10px',backgroundColor:'#f0f0f0'}}></div>
                        <div className="tuan-list">
                            <div className="tuan-title mb-line-b" style={{display:this.props.cinemaDetail.dealList.divideDealList.length>0?'block':'none'}}>影院超值套餐</div>
                            {
                               this.props.cinemaDetail.dealList.divideDealList.map((L)=>
                                  L.dealList.map((v)=>(
                                      <div className="tuan-item mb-line-b" key={v.dealId}>
                                          <img src={this.$tools.movieImg(v.imageUrl)}/>
                                          <span className={v.cardTag==='HOT'?'hot-tag':'' }>{v.cardTag==='HOT'?'HOT':'' }</span>
                                          <div className="item-info">
                                              <div className="title">
                                                  <span>{v.titleTag}</span>
                                                  {v.title}
                                              </div>
                                              <div className="sell-num">{v.curNumberDesc}</div>
                                              <div className="price">
                                                <span className="sell-price">
                                                    <span>¥</span><span className="num">{v.price}</span>
                                                </span>

                                              </div>
                                              <div className="buy-btn">去购买</div>
                                          </div>
                                      </div>
                                  ))
                                )
                            }

                        </div>
                    </div>
                </div>:null


        )
    }
    componentDidMount(){
        this.props.getCinemaDetail(this.props.match.params.cinemaId)
    }

}
function mapStateToProps(state) {
    return {
        cinemaDetail: state.cinema.cinemaDetail,
    }
}

export  default connect(mapStateToProps,dispatch=>bindActionCreators(actionCinemaCreators,dispatch))(withRouter(CinemaDetail))