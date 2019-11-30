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
                            <img src={this.$tools.movieImg(this.props.detailMovie.img)}/>
                        </div>
                        <div className="content flex">
                            <div className="title middle line-ellipsis">{this.props.detailMovie.nm}</div>
                            <div className="title-en-name line-ellipsis">{this.props.detailMovie.enm}</div>
                            <div className="score line-ellipsis">{this.props.detailMovie.sc}
                                {
                                    this.props.detailMovie.snum?<span className="snum">({this.$tools.people(this.props.detailMovie.snum)}万人评)</span>:null
                                }
                            </div>
                            <div className="type line-ellipsis">
                                <span>{this.props.detailMovie.cat}</span>
                                <div className="type-group"><img style={{width: '42px'}} className="sd-imax"
                                                                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAeCAYAAADTsBuJAAAD+0lEQVRoge2aPUwUQRSAPy4YiZh4DbT8VJhIvA4KkyOhBq+Uyi2gFlssPAtoPW01cWm0RaxVTCi0EkOhFXe0WoiJGhJJ1uK9cefW/ZnF3K3R/ZLNDDNvfnhv5s3bvRkIggBgGLgIjACDlPSSE+AT8B74NhAEwXngCnCm0Gn9f/wAdgeBKf5O5T8regI9Ygi4DIwCUxXE7ZT0j2PgneZHKpQ+vwiONR2sFDqNEkoDFExpgIJx9f+TwDJwySprA0+A11bZCjCR0EcbeAp8zDnHKDWgBfj6oH/XgC3Np9EAVoE9TaNUtR+AJrCTMP4R4GkaZUv7iWvfhcsOmAQ2EOW/QZT+BlH0GjBtyU6o3L71gIRcC8B9YN5hzDSqQB0Yt8pqWtZ0aN9S2VpCfUPr68QbaE+fq4QLINr/VcQwO1mTcdkBS8A54B7w3CpfRHbFIqGiDU9i8tPALeAGshsOHMbOywVkVfoJ9Q1gLKMPo/RXiCLHgU6MzJzW2+PNIf/foZZn4rIDZoDvdCsfQtcz7DIQYqR1zS86tsnLF9J3QdyKtqkhL0mbhK7MS5D1dLwWYiTbdTWId02/4WKAReBaTPmspnl8+r7Kz2YJnpIWssIbMXVziFvZTGlvDOQjykxbyeYMuaCyW5q/qXVO5I2C5hGXtIG4n4/A45x9tBGX1gt8TeNWuqdpM6FtFTHcIaHv9hGDerEtpH4T2TV1JMjICgK6OK0BTDS0Tf6ophe+39BBFFJHVrxhHLiO+PVOQtsGsoJtBfqaeiljbiXknchrgDXEJd1CIiFzCOdhMqd8XpqaelbZaqQurZ1vlXUQo0WjLkPVkrfPA2eyDDCMRC+jkfJ9wpWS1wATyKHeKzqI0q4THo4e8gFsJ6HNHGF09BkIrKeu5XFuzfj9O3SfB85khaGTSOTSRsIrm2+I+4kaJ415lX+Ro81paAIvEaUc8btrieJpeo/46GVVZVYjZXXE2E0tayChaYvsiAvINsA+slonkJ1gx/tGmW2XgVR+RfvLe3DnZYcwgjnSvJ8gW0V2yyHJSqsiC9DTfmrAXcTteJach0RAN3QOmbvB5UXsgXa4jvj9AySMNJ8cHsa0WbLyxoWNIspf488/R7jQBB4RuogkPE3TdkiL0AAm5DRtO5bcEbIL3iKGGifjfcDFAM8Rd7OMvJTNaHkbUX70LRi6DdBGFL5t9dUPfMQIVdKVa1Z92mrtIGdIXeXGkGgrrs0eYvDbOoe4d5JfDARBsJAmEMMw/VHiv/qTpGEBTvc5ul8r+L+g/D2gYEoDFExpgIKpIDe1SvrLWU1PKsg1uZL+MUT4a9yn8mpicfwAdgf0cu555IpieTm395jLuR+Arz8BrLjpSMoYSlEAAAAASUVORK5CYII="/>
                                </div>
                            </div>
                            <div className="src line-ellipsis">{this.props.detailMovie.fra}/{this.props.detailMovie.dur}分钟</div>
                            <div className="pubDesc line-ellipsis">{this.props.detailMovie.pubDesc}</div>
                        </div>
                    </div>
                    <div className="arrow-g iconfont icon-xiayige"></div>
                </div>

                <div id="showDays">
                    <ul id="timeline" className="mb-line-b">
                        {
                            this.props.deMovieList.showDays?this.props.deMovieList.showDays.dates.map((v,i)=>(
                                <li className="showDay" key={i} className="showDay chosen">{v.date}</li>
                            )):null
                        }
                    </ul>
                </div>

                <div className="nav-wrap filter-nav-wrap">
                    <div className="tab mb-line-b">
                        <div className="item" data-tab=".region">全城<span className="drop"></span></div>
                        <div className="item" data-tab=".brand">品牌<span className="drop"></span></div>
                        <div className="item" data-tab=".special">特色<span className="drop"></span></div>
                    </div>
                    <div className="close-tab">
                        <div className="tab-content">
                            <div className="page special">
                                <div id="special-content" style={{height: '373.2px'}}>


                                    <div className="item-title">特色功能</div>
                                    <div className="item-list">

                                        <div className="item chosen" data-id="-1" data-type="service">全部</div>

                                        <div className="item" data-id="3" data-type="service">可改签</div>

                                        <div className="item" data-id="2" data-type="service">可退票</div>

                                    </div>

                                    <div className="item-title">特殊厅</div>
                                    <div className="item-list">

                                        <div className="item chosen" data-id="-1" data-type="hallType">全部</div>

                                        <div className="item" data-id="2" data-type="hallType">IMAX厅</div>

                                        <div className="item" data-id="3" data-type="hallType">CGS中国巨幕厅</div>

                                        <div className="item" data-id="9" data-type="hallType">杜比全景声厅</div>

                                        <div className="item" data-id="22" data-type="hallType">Dolby Cinema厅</div>

                                        <div className="item" data-id="10" data-type="hallType">RealD厅</div>

                                        <div className="item" data-id="11" data-type="hallType">RealD 6FL厅</div>

                                        <div className="item" data-id="5" data-type="hallType">LUXE巨幕厅</div>

                                        <div className="item" data-id="4" data-type="hallType">4DX厅</div>

                                        <div className="item" data-id="25" data-type="hallType">DTS:X 临境音厅</div>

                                        <div className="item" data-id="24" data-type="hallType">儿童厅</div>

                                        <div className="item" data-id="8" data-type="hallType">4K厅</div>

                                        <div className="item" data-id="7" data-type="hallType">4D厅</div>

                                        <div className="item" data-id="14" data-type="hallType">60帧厅</div>

                                        <div className="item" data-id="6" data-type="hallType">巨幕厅</div>

                                        <div className="item" data-id="27" data-type="hallType">CINITY厅</div>

                                    </div>


                                </div>
                                <div id="special-btn">
                                    <span className="btn" id="cancel-btn">重置</span>
                                    <span className="btn" id="confirm-btn">确定</span>
                                </div>
                            </div>
                            <div className="page brand">
                                <div id="brand-content" style={{height: '373.2px'}}>


                                    <div className="item brand-list chosen" data-id="-1" data-type="brand">
                                        <span className="brand-name">全部</span>
                                        <span className="brand-count">227</span>
                                    </div>

                                    <div className="item brand-list" data-id="102642" data-type="brand">
                                        <span className="brand-name">万达影城</span>
                                        <span className="brand-count">13</span>
                                    </div>

                                    <div className="item brand-list" data-id="384262" data-type="brand">
                                        <span className="brand-name">大地影院</span>
                                        <span className="brand-count">11</span>
                                    </div>

                                    <div className="item brand-list" data-id="30227" data-type="brand">
                                        <span className="brand-name">耀莱成龙国际影城</span>
                                        <span className="brand-count">11</span>
                                    </div>

                                    <div className="item brand-list" data-id="24472" data-type="brand">
                                        <span className="brand-name">保利国际影城</span>
                                        <span className="brand-count">9</span>
                                    </div>

                                    <div className="item brand-list" data-id="24595" data-type="brand">
                                        <span className="brand-name">博纳国际影城</span>
                                        <span className="brand-count">8</span>
                                    </div>

                                    <div className="item brand-list" data-id="2020418" data-type="brand">
                                        <span className="brand-name">CGV影城</span>
                                        <span className="brand-count">6</span>
                                    </div>

                                    <div className="item brand-list" data-id="1079568" data-type="brand">
                                        <span className="brand-name">金逸影城</span>
                                        <span className="brand-count">5</span>
                                    </div>

                                    <div className="item brand-list" data-id="23745" data-type="brand">
                                        <span className="brand-name">中影国际影城</span>
                                        <span className="brand-count">5</span>
                                    </div>

                                    <div className="item brand-list" data-id="24745" data-type="brand">
                                        <span className="brand-name">橙天嘉禾影城</span>
                                        <span className="brand-count">4</span>
                                    </div>

                                    <div className="item brand-list" data-id="24377" data-type="brand">
                                        <span className="brand-name">百老汇影城</span>
                                        <span className="brand-count">4</span>
                                    </div>

                                    <div className="item brand-list" data-id="29894" data-type="brand">
                                        <span className="brand-name">新华国际影城</span>
                                        <span className="brand-count">3</span>
                                    </div>

                                    <div className="item brand-list" data-id="24071" data-type="brand">
                                        <span className="brand-name">UME国际影城</span>
                                        <span className="brand-count">3</span>
                                    </div>

                                    <div className="item brand-list" data-id="30053" data-type="brand">
                                        <span className="brand-name">幸福蓝海国际影城</span>
                                        <span className="brand-count">3</span>
                                    </div>

                                    <div className="item brand-list" data-id="1162239" data-type="brand">
                                        <span className="brand-name">首都电影院</span>
                                        <span className="brand-count">3</span>
                                    </div>

                                    <div className="item brand-list" data-id="275830" data-type="brand">
                                        <span className="brand-name">华谊兄弟影院</span>
                                        <span className="brand-count">3</span>
                                    </div>

                                    <div className="item brand-list" data-id="292030" data-type="brand">
                                        <span className="brand-name">卢米埃影城</span>
                                        <span className="brand-count">3</span>
                                    </div>

                                    <div className="item brand-list" data-id="30032" data-type="brand">
                                        <span className="brand-name">星美国际影城</span>
                                        <span className="brand-count">2</span>
                                    </div>

                                    <div className="item brand-list" data-id="29462" data-type="brand">
                                        <span className="brand-name">沃美影城</span>
                                        <span className="brand-count">2</span>
                                    </div>

                                    <div className="item brand-list" data-id="27617" data-type="brand">
                                        <span className="brand-name">美嘉欢乐影城</span>
                                        <span className="brand-count">2</span>
                                    </div>

                                    <div className="item brand-list" data-id="26413" data-type="brand">
                                        <span className="brand-name">嘉华国际影城</span>
                                        <span className="brand-count">2</span>
                                    </div>

                                    <div className="item brand-list" data-id="23854" data-type="brand">
                                        <span className="brand-name">17.5影城</span>
                                        <span className="brand-count">2</span>
                                    </div>

                                    <div className="item brand-list" data-id="28975" data-type="brand">
                                        <span className="brand-name">太平洋电影城</span>
                                        <span className="brand-count">2</span>
                                    </div>

                                    <div className="item brand-list" data-id="2880988" data-type="brand">
                                        <span className="brand-name">SFC上影影城</span>
                                        <span className="brand-count">2</span>
                                    </div>

                                    <div className="item brand-list" data-id="352923" data-type="brand">
                                        <span className="brand-name">嘉美国际影城</span>
                                        <span className="brand-count">1</span>
                                    </div>

                                    <div className="item brand-list" data-id="133085" data-type="brand">
                                        <span className="brand-name">东都影城</span>
                                        <span className="brand-count">1</span>
                                    </div>

                                    <div className="item brand-list" data-id="27424" data-type="brand">
                                        <span className="brand-name">鲁信影城</span>
                                        <span className="brand-count">1</span>
                                    </div>

                                    <div className="item brand-list" data-id="28916" data-type="brand">
                                        <span className="brand-name">搜秀影城</span>
                                        <span className="brand-count">1</span>
                                    </div>

                                    <div className="item brand-list" data-id="26045" data-type="brand">
                                        <span className="brand-name">横店电影城</span>
                                        <span className="brand-count">1</span>
                                    </div>

                                    <div className="item brand-list" data-id="0" data-type="brand">
                                        <span className="brand-name">其他</span>
                                        <span className="brand-count">114</span>
                                    </div>


                                </div>
                            </div>
                            <div className="page region">

                                <div id="region-tab">
                                    <ul className="tab">
                                        <li className="item chosen" data-type="region" data-subnav="#district">商区</li>
                                        <li className="item" data-type="region" data-subnav="#subway">地铁站</li>
                                    </ul>
                                </div>
                                <div id="region-list" style={{height: '435.4px'}}>
                                    <div id="region-sidenav">
                                        <div id="district">

                                            <div className="district-li item chosen" data-type="district" data-id="-1">全部(227)</div>

                                            <div className="district-li item" data-type="district" data-id="14">朝阳区(71)</div>

                                            <div className="district-li item" data-type="district" data-id="17">海淀区(31)</div>

                                            <div className="district-li item" data-type="district" data-id="20">丰台区(24)</div>

                                            <div className="district-li item" data-type="district" data-id="4752">大兴区(16)</div>

                                            <div className="district-li item" data-type="district" data-id="4750">昌平区(14)</div>

                                            <div className="district-li item" data-type="district" data-id="15">东城区(13)</div>

                                            <div className="district-li item" data-type="district" data-id="4751">通州区(12)</div>

                                            <div className="district-li item" data-type="district" data-id="16">西城区(11)</div>

                                            <div className="district-li item" data-type="district" data-id="710">房山区(10)</div>

                                            <div className="district-li item" data-type="district" data-id="708">顺义区(8)</div>

                                            <div className="district-li item" data-type="district" data-id="711">怀柔区(5)</div>

                                            <div className="district-li item" data-type="district" data-id="709">门头沟区(3)</div>

                                            <div className="district-li item" data-type="district" data-id="2073">平谷区(3)</div>

                                            <div className="district-li item" data-type="district" data-id="2074">密云区(3)</div>

                                            <div className="district-li item" data-type="district" data-id="172">石景山区(2)</div>

                                            <div className="district-li item" data-type="district" data-id="2075">延庆区(1)</div>

                                        </div>
                                        <div id="subway" style={{display: 'none'}}>

                                            <div className="district-li item" data-type="line" data-id="-1">全部(227)</div>

                                            <div className="district-li item" data-type="line" data-id="4">1号线(30)</div>

                                            <div className="district-li item" data-type="line" data-id="5">2号线(20)</div>

                                            <div className="district-li item" data-type="line" data-id="6">4号线(29)</div>

                                            <div className="district-li item" data-type="line" data-id="7">5号线(41)</div>

                                            <div className="district-li item" data-type="line" data-id="8">6号线(20)</div>

                                            <div className="district-li item" data-type="line" data-id="76">7号线(14)</div>

                                            <div className="district-li item" data-type="line" data-id="9">8号线(15)</div>

                                            <div className="district-li item" data-type="line" data-id="10">9号线(9)</div>

                                            <div className="district-li item" data-type="line" data-id="1">10号线(52)</div>

                                            <div className="district-li item" data-type="line" data-id="2">13号线(20)</div>

                                            <div className="district-li item" data-type="line" data-id="75">14号线(23)</div>

                                            <div className="district-li item" data-type="line" data-id="3">15号线(19)</div>

                                            <div className="district-li item" data-type="line" data-id="199">s1线(3)</div>

                                            <div className="district-li item" data-type="line" data-id="11">亦庄线(7)</div>

                                            <div className="district-li item" data-type="line" data-id="12">八通线(11)</div>

                                            <div className="district-li item" data-type="line" data-id="197">大兴国际机场线(1)</div>

                                            <div className="district-li item" data-type="line" data-id="13">大兴线(13)</div>

                                            <div className="district-li item" data-type="line" data-id="14">房山线(5)</div>

                                            <div className="district-li item" data-type="line" data-id="15">昌平线(3)</div>

                                            <div className="district-li item" data-type="line" data-id="16">机场线(4)</div>

                                            <div className="district-li item" data-type="line" data-id="200">西郊线(3)</div>

                                        </div>
                                    </div>
                                    <div id="region-list-item"></div>
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
        this.props.getCinemaMovieDetail(this.props.movieId)
        this.props.getCinemaMovieFilter(this.props.movieId)
        this.props.getMovieCinemaList(this.props.movieId)
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