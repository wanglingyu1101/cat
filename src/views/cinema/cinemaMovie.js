import React from 'react';
import Header from '../../component/Header'
import DlAppBar from "../../component/dl_app_bar";
import '../../assets/css/cinemaMovie.css'
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {PullToRefresh} from 'antd-mobile';
import actionCinemaCreators from "../../store/actionCreateors/cinemaMovie";
import {bindActionCreators} from "redux";


class CinemaMovie extends React.Component {
    constructor(){
        super();
        this.state={
            deCinemaPage:1
        }
    }
    render() {
        return (
            <div>
                <Header back={true} head={this.props.detailMovie.nm}></Header>
                <DlAppBar></DlAppBar>

                <div className="movie-detail">
                    <div className="movie-filter"></div>
                    <div className="poster-bg"
                         style={{backgroundImage:'url('+this.$tools.movieImg(this.props.detailMovie.img)+')'}}></div>
                    <div className="detail box-flex">
                        <div className="poster">
                            <img alt="" src={this.$tools.movieImg(this.props.detailMovie.img)}/>
                        </div>
                        <div className="content flex">
                            <div className="title middle line-ellipsis">{this.props.detailMovie.nm}</div>
                            <div className="title-en-name line-ellipsis">{this.props.detailMovie.enm}</div>
                            {
                                this.props.detailMovie.comScorePersona === true?<div className="score line-ellipsis">{this.props.detailMovie.sc}<span className="snum">({this.$tools.people(this.props.detailMovie.snum)}万人评)</span></div>:<div className="score line-ellipsis"> <span style={{fontSize:'14px'}}>{this.props.detailMovie.wish}人想看</span> </div>
                            }
                            <div className="type line-ellipsis">
                                <span>{this.props.detailMovie.cat}</span>
                                <div className="type-group">
                                    {
                                        this.props.detailMovie.version === ""?null:<img alt="" style={{width: '42px'}} className="sd-imax"
                                                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAeCAYAAADTsBuJAAAD+0lEQVRoge2aPUwUQRSAPy4YiZh4DbT8VJhIvA4KkyOhBq+Uyi2gFlssPAtoPW01cWm0RaxVTCi0EkOhFXe0WoiJGhJJ1uK9cefW/ZnF3K3R/ZLNDDNvfnhv5s3bvRkIggBgGLgIjACDlPSSE+AT8B74NhAEwXngCnCm0Gn9f/wAdgeBKf5O5T8regI9Ygi4DIwCUxXE7ZT0j2PgneZHKpQ+vwiONR2sFDqNEkoDFExpgIJx9f+TwDJwySprA0+A11bZCjCR0EcbeAp8zDnHKDWgBfj6oH/XgC3Np9EAVoE9TaNUtR+AJrCTMP4R4GkaZUv7iWvfhcsOmAQ2EOW/QZT+BlH0GjBtyU6o3L71gIRcC8B9YN5hzDSqQB0Yt8pqWtZ0aN9S2VpCfUPr68QbaE+fq4QLINr/VcQwO1mTcdkBS8A54B7w3CpfRHbFIqGiDU9i8tPALeAGshsOHMbOywVkVfoJ9Q1gLKMPo/RXiCLHgU6MzJzW2+PNIf/foZZn4rIDZoDvdCsfQtcz7DIQYqR1zS86tsnLF9J3QdyKtqkhL0mbhK7MS5D1dLwWYiTbdTWId02/4WKAReBaTPmspnl8+r7Kz2YJnpIWssIbMXVziFvZTGlvDOQjykxbyeYMuaCyW5q/qXVO5I2C5hGXtIG4n4/A45x9tBGX1gt8TeNWuqdpM6FtFTHcIaHv9hGDerEtpH4T2TV1JMjICgK6OK0BTDS0Tf6ophe+39BBFFJHVrxhHLiO+PVOQtsGsoJtBfqaeiljbiXknchrgDXEJd1CIiFzCOdhMqd8XpqaelbZaqQurZ1vlXUQo0WjLkPVkrfPA2eyDDCMRC+jkfJ9wpWS1wATyKHeKzqI0q4THo4e8gFsJ6HNHGF09BkIrKeu5XFuzfj9O3SfB85khaGTSOTSRsIrm2+I+4kaJ415lX+Ro81paAIvEaUc8btrieJpeo/46GVVZVYjZXXE2E0tayChaYvsiAvINsA+slonkJ1gx/tGmW2XgVR+RfvLe3DnZYcwgjnSvJ8gW0V2yyHJSqsiC9DTfmrAXcTteJach0RAN3QOmbvB5UXsgXa4jvj9AySMNJ8cHsa0WbLyxoWNIspf488/R7jQBB4RuogkPE3TdkiL0AAm5DRtO5bcEbIL3iKGGifjfcDFAM8Rd7OMvJTNaHkbUX70LRi6DdBGFL5t9dUPfMQIVdKVa1Z92mrtIGdIXeXGkGgrrs0eYvDbOoe4d5JfDARBsJAmEMMw/VHiv/qTpGEBTvc5ul8r+L+g/D2gYEoDFExpgIKpIDe1SvrLWU1PKsg1uZL+MUT4a9yn8mpicfwAdgf0cu555IpieTm395jLuR+Arz8BrLjpSMoYSlEAAAAASUVORK5CYII="/>
                                    }
                                </div>
                            </div>
                            <div className="src line-ellipsis">{this.props.detailMovie.src}/{this.props.detailMovie.dur}分钟</div>
                            <div className="pubDesc line-ellipsis">{this.props.detailMovie.pubDesc}</div>
                        </div>
                    </div>
                    <div className="arrow-g iconfont icon-xiayige"></div>
                </div>

                <div id="showDays">
                    <ul id="timeline" className="mb-line-b" ref={'showDay'}>
                        {
                            this.props.deMovieList.showDays?this.props.deMovieList.showDays.dates.map((v,i)=>(
                                <li className="showDay" key={i} onClick={(e)=>{
                                        Array.from(this.refs.showDay.children).map(function (v) {
                                            v.className = 'showDay'
                                        });
                                        this.props.getMovieCinemaList(this.props.match.params.movieId,e.target.innerText)
                                        e.target.className = 'showDay chosen'
                                }}>{v.date}</li>
                            )):null
                        }
                    </ul>
                </div>

                <div className="nav-wrap filter-nav-wrap">
                    <div className="tab mb-line-b">
                        <div className="item">全城<span className="drop"></span></div>
                        <div className="item">品牌<span className="drop"></span></div>
                        <div className="item">特色<span className="drop"></span></div>
                    </div>
                    <div className="close-tab">
                        <div className="tab-content">
                            <div className="page special">
                                <div id="special-content" style={{height: '373.2px'}}>

                                    <div className="item-title">特色功能</div>
                                    <div className="item-list">
                                        {
                                            this.props.MovieFilter.service?this.props.MovieFilter.service.subItems.length === 1?null:this.props.MovieFilter.service.subItems.map(v=>(
                                                <div className="item chosen" key={v.id}>{v.name}</div>
                                            )):null
                                        }

                                    </div>

                                    <div className="item-title">特殊厅</div>
                                    <div className="item-list">
                                        {
                                            this.props.MovieFilter.hallType?this.props.MovieFilter.hallType.subItems.length === 1?null:this.props.MovieFilter.hallType.subItems.map(v=>(
                                                <div className="item chosen" key={v.id}>{v.name}</div>
                                            )):null
                                        }
                                    </div>
                                </div>
                                <div id="special-btn">
                                    <span className="btn" id="cancel-btn">重置</span>
                                    <span className="btn" id="confirm-btn">确定</span>
                                </div>
                            </div>
                            <div className="page brand">
                                <div id="brand-content" style={{height: '373.2px'}}>
                                    {
                                        this.props.MovieFilter.brand?this.props.MovieFilter.brand.subItems.length === 1?null:this.props.MovieFilter.brand.subItems.map(v=>(
                                            <div className="item brand-list chosen" key={v.id}>
                                                <span className="brand-name">{v.name}</span>
                                                <span className="brand-count">{v.count}</span>
                                            </div>
                                        )):null
                                    }
                                </div>
                            </div>
                            <div className="page region">

                                <div id="region-tab">
                                    <ul className="tab">
                                        <li className="item chosen">商区</li>
                                        <li className="item">地铁站</li>
                                    </ul>
                                </div>
                                <div id="region-list" style={{height: '435.4px'}}>
                                    <div id="region-sidenav">
                                        <div id="district">
                                            {
                                                this.props.MovieFilter.district?this.props.MovieFilter.district.subItems.length === 1?null:this.props.MovieFilter.district.subItems.map(v=>(
                                                    <div className="district-li item chosen" key={v.id}>{v.name} ({v.count})</div>
                                                )):null
                                            }

                                        </div>
                                        <div id="subway" style={{display: 'none'}}>
                                            {
                                                this.props.MovieFilter.subway? this.props.MovieFilter.subway.subItems.length === 1?null: this.props.MovieFilter.subway.subItems.map(v=>(
                                                    <div className="district-li item" key={v.id}>{v.name} ({v.count})</div>
                                                )):null
                                            }
                                        </div>
                                    </div>
                                    <div id="region-list-item">
                                        <div id="filter-list">
                                            <div className="item chosen">
                                                <span className="item-name">全部</span>
                                                <span className="item-count">14</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="cinema-list cinema" style={{marginTop:'0',minHeight:'700px'}}>
                    <PullToRefresh
                        damping={60}
                        style={{
                            width: this.state.width,
                            overflow: 'auto',
                        }}
                        indicator={{deactivate: '上拉可以刷新'}}
                        direction={'up'}
                        refreshing={this.state.refreshing}
                        onRefresh={() => {
                            setTimeout(() => {
                                this.props.upMovieCinemaList(this.state.deCinemaPage++,this.props.movieId)
                            }, 1000);
                        }}
                    >
                    {
                        this.props.deMovieList.cinemas?this.props.deMovieList.cinemas.map((v)=>(
                            <div className="list-wrap" key={v.id}>
                                <div className="item mb-line-b">
                                    <div className="title-block box-flex middle">
                                        <div className="title line-ellipsis">
                                            <span>{v.nm}</span>
                                            {
                                                v.sellPrice?<span className="price-block">
                                                    <span className="price">{v.sellPrice}</span>
                                                    <span className="q">元起</span>
                                                </span>:null
                                            }
                                        </div>
                                        <div className="location-block box-flex">
                                            <div className="flex line-ellipsis">{v.addr}</div>
                                            <div className="distance">{v.distance}</div>
                                        </div>
                                        <div className="flex"></div>
                                        <div className="label-block">

                                            {
                                                v.tag.allowRefund === 1 ?
                                                    <div className="allowRefund">退</div> : null
                                            }
                                            {
                                                v.tag.endorse === 1 ? <div className="endorse">改签</div> : null
                                            }
                                            {
                                                v.tag.snack === 1 ? <div className="snack">小吃</div> : null
                                            }
                                            {
                                                v.tag.vipTag ? <div className="vipTag">折扣卡</div> : null
                                            }
                                            {
                                                v.tag.hallType ? v.tag.hallType.map((v, i) => (
                                                    <div className="hallType" key={i}>{v}</div>
                                                )) : null
                                            }
                                        </div>
                                        {
                                            v.promotion.cardPromotionTag ? <div className="discount-block">
                                                <div>
                                                    <div className="discount-label normal card">
                                                        <img
                                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg=="
                                                            alt="" style={{height: '15px', width: '15px'}}/>
                                                    </div>
                                                    <div
                                                        className="discount-label-text">{v.promotion.cardPromotionTag}</div>
                                                </div>
                                            </div> : null
                                        }
                                        {
                                        v.showTimes?<div className="min-show-block  disabled  J-fload">
                                            <span>近期场次：</span>
                                            <span className="time-line">{v.showTimes}</span>
                                        </div>:null
                                    }
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
        this.props.getCinemaMovieDetail(this.props.match.params.movieId)
        this.props.getCinemaMovieFilter(this.props.match.params.movieId)
        this.props.getMovieCinemaList(this.props.match.params.movieId)
    }
}


function mapStateToProps(state) {
    return {
        detailMovie:state.cinemaMovie.detailMovie,
        MovieFilter:state.cinemaMovie.MovieFilter,
        deMovieList:state.cinemaMovie.deMovieList
    }
}

export default connect(mapStateToProps, dispatch => bindActionCreators(actionCinemaCreators, dispatch))(withRouter(CinemaMovie))