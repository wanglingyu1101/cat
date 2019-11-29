import React from 'react';
import Header from '../../component/Header'
import DlAppBar from "../../component/dl_app_bar";
import '../../assets/css/cinemaMovie.css'
class CinemaMovie extends React.Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div>
                <Header back={true} head={"冰雪奇缘2"}></Header>
                <DlAppBar></DlAppBar>

                <div className="movie-detail">
                    <div className="movie-filter"></div>
                    <div className="poster-bg"
                         style={{backgroundImage: 'url(//p0.meituan.net/71.100/moviemachine/58ee13be6dc60bf5e636cf915bbbaaa55787785.jpg)'}}></div>
                    <div className="detail box-flex">
                        <div className="poster">
                            <img src="//p0.meituan.net/148.208/moviemachine/58ee13be6dc60bf5e636cf915bbbaaa55787785.jpg"/>
                        </div>
                        <div className="content flex">
                            <div className="title middle line-ellipsis">冰雪奇缘2</div>
                            <div className="title-en-name line-ellipsis">Frozen II</div>
                            <div className="score line-ellipsis">9.0<span className="snum">(12.7万人评)</span>
                            </div>
                            <div className="type line-ellipsis">
                                <span>喜剧,动画,冒险</span>
                                <div className="type-group"><img style={{width: '42px'}} className="sd-imax"
                                                                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAeCAYAAADTsBuJAAAD+0lEQVRoge2aPUwUQRSAPy4YiZh4DbT8VJhIvA4KkyOhBq+Uyi2gFlssPAtoPW01cWm0RaxVTCi0EkOhFXe0WoiJGhJJ1uK9cefW/ZnF3K3R/ZLNDDNvfnhv5s3bvRkIggBgGLgIjACDlPSSE+AT8B74NhAEwXngCnCm0Gn9f/wAdgeBKf5O5T8regI9Ygi4DIwCUxXE7ZT0j2PgneZHKpQ+vwiONR2sFDqNEkoDFExpgIJx9f+TwDJwySprA0+A11bZCjCR0EcbeAp8zDnHKDWgBfj6oH/XgC3Np9EAVoE9TaNUtR+AJrCTMP4R4GkaZUv7iWvfhcsOmAQ2EOW/QZT+BlH0GjBtyU6o3L71gIRcC8B9YN5hzDSqQB0Yt8pqWtZ0aN9S2VpCfUPr68QbaE+fq4QLINr/VcQwO1mTcdkBS8A54B7w3CpfRHbFIqGiDU9i8tPALeAGshsOHMbOywVkVfoJ9Q1gLKMPo/RXiCLHgU6MzJzW2+PNIf/foZZn4rIDZoDvdCsfQtcz7DIQYqR1zS86tsnLF9J3QdyKtqkhL0mbhK7MS5D1dLwWYiTbdTWId02/4WKAReBaTPmspnl8+r7Kz2YJnpIWssIbMXVziFvZTGlvDOQjykxbyeYMuaCyW5q/qXVO5I2C5hGXtIG4n4/A45x9tBGX1gt8TeNWuqdpM6FtFTHcIaHv9hGDerEtpH4T2TV1JMjICgK6OK0BTDS0Tf6ophe+39BBFFJHVrxhHLiO+PVOQtsGsoJtBfqaeiljbiXknchrgDXEJd1CIiFzCOdhMqd8XpqaelbZaqQurZ1vlXUQo0WjLkPVkrfPA2eyDDCMRC+jkfJ9wpWS1wATyKHeKzqI0q4THo4e8gFsJ6HNHGF09BkIrKeu5XFuzfj9O3SfB85khaGTSOTSRsIrm2+I+4kaJ415lX+Ro81paAIvEaUc8btrieJpeo/46GVVZVYjZXXE2E0tayChaYvsiAvINsA+slonkJ1gx/tGmW2XgVR+RfvLe3DnZYcwgjnSvJ8gW0V2yyHJSqsiC9DTfmrAXcTteJach0RAN3QOmbvB5UXsgXa4jvj9AySMNJ8cHsa0WbLyxoWNIspf488/R7jQBB4RuogkPE3TdkiL0AAm5DRtO5bcEbIL3iKGGifjfcDFAM8Rd7OMvJTNaHkbUX70LRi6DdBGFL5t9dUPfMQIVdKVa1Z92mrtIGdIXeXGkGgrrs0eYvDbOoe4d5JfDARBsJAmEMMw/VHiv/qTpGEBTvc5ul8r+L+g/D2gYEoDFExpgIKpIDe1SvrLWU1PKsg1uZL+MUT4a9yn8mpicfwAdgf0cu555IpieTm395jLuR+Arz8BrLjpSMoYSlEAAAAASUVORK5CYII="/>
                                </div>
                            </div>
                            <div className="src line-ellipsis">美国/104分钟</div>
                            <div className="pubDesc line-ellipsis">2019-11-22大陆上映</div>
                        </div>
                    </div>
                    <div className="arrow-g iconfont icon-xiayige"></div>
                </div>

                <div id="showDays">
                    <ul id="timeline" className="mb-line-b">
                        <li data-day="2019-11-29" className="showDay chosen">后天11月29日</li>
                        <li data-day="2019-11-30" className="showDay">周六11月30日</li>
                        <li data-day="2019-12-01" className="showDay">周日12月01日</li>
                        <li data-day="2019-12-02" className="showDay">周一12月02日</li>
                        <li data-day="2019-12-03" className="showDay">周二12月03日</li>
                        <li data-day="2019-12-07" className="showDay">周六12月07日</li>
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
                    <div className="list-wrap">
                        <div className="item mb-line-b">
                            <div className="title-block box-flex middle">
                                <div className="title line-ellipsis">
                                    <span>华美国际影城</span>
                                    <span className="price-block">
                <span className="price">19.9</span><span className="q">元起</span>
            </span>
                                </div>
                                <div className="location-block box-flex">
                                    <div className="flex line-ellipsis">大兴区旧宫小红门路39号</div>
                                    <div className="distance">1877.9km</div>
                                </div>
                                <div className="flex"></div>
                                <div className="label-block">
                                    <div className="allowRefund">退</div>
                                    <div className="endorse">改签</div>
                                    <div className="snack">小吃</div>
                                    <div className="vipTag">折扣卡</div>
                                    <div className="hallType">4K厅</div>
                                </div>
                            </div>
                            <div className="min-show-block  disabled  J-fload">
                                <span>近期场次：</span>
                                <span className="time-line">10:25 </span>
                                <span className="time-line"> 11:25 </span>
                                <span className="time-line"> 11:55</span>
                            </div>
                        </div>
                    </div>

                    <div className="list-wrap">
                        <div className="item mb-line-b">
                            <div className="title-block box-flex middle">
                                <div className="title line-ellipsis">
                                    <span>华美国际影城</span>
                                    <span className="price-block">
                <span className="price">19.9</span><span className="q">元起</span>
            </span>
                                </div>
                                <div className="location-block box-flex">
                                    <div className="flex line-ellipsis">大兴区旧宫小红门路39号</div>
                                    <div className="distance">1877.9km</div>
                                </div>
                                <div className="flex"></div>
                                <div className="label-block">
                                    <div className="allowRefund">退</div>
                                    <div className="endorse">改签</div>
                                    <div className="snack">小吃</div>
                                    <div className="vipTag">折扣卡</div>
                                    <div className="hallType">4K厅</div>
                                </div>
                            </div>
                            <div className="min-show-block  disabled  J-fload">
                                <span>近期场次：</span>
                                <span className="time-line">10:25 </span>
                                <span className="time-line"> 11:25 </span>
                                <span className="time-line"> 11:55</span>
                            </div>
                        </div>
                    </div>

                    <div className="list-wrap">
                        <div className="item mb-line-b">
                            <div className="title-block box-flex middle">
                                <div className="title line-ellipsis">
                                    <span>华美国际影城</span>
                                    <span className="price-block">
                <span className="price">19.9</span><span className="q">元起</span>
            </span>
                                </div>
                                <div className="location-block box-flex">
                                    <div className="flex line-ellipsis">大兴区旧宫小红门路39号</div>
                                    <div className="distance">1877.9km</div>
                                </div>
                                <div className="flex"></div>
                                <div className="label-block">
                                    <div className="allowRefund">退</div>
                                    <div className="endorse">改签</div>
                                    <div className="snack">小吃</div>
                                    <div className="vipTag">折扣卡</div>
                                    <div className="hallType">4K厅</div>
                                </div>
                            </div>
                            <div className="min-show-block  disabled  J-fload">
                                <span>近期场次：</span>
                                <span className="time-line">10:25 </span>
                                <span className="time-line"> 11:25 </span>
                                <span className="time-line"> 11:55</span>
                            </div>
                        </div>
                    </div>

                    <div className="list-wrap">
                        <div className="item mb-line-b">
                            <div className="title-block box-flex middle">
                                <div className="title line-ellipsis">
                                    <span>华美国际影城</span>
                                    <span className="price-block">
                <span className="price">19.9</span><span className="q">元起</span>
            </span>
                                </div>
                                <div className="location-block box-flex">
                                    <div className="flex line-ellipsis">大兴区旧宫小红门路39号</div>
                                    <div className="distance">1877.9km</div>
                                </div>
                                <div className="flex"></div>
                                <div className="label-block">
                                    <div className="allowRefund">退</div>
                                    <div className="endorse">改签</div>
                                    <div className="snack">小吃</div>
                                    <div className="vipTag">折扣卡</div>
                                    <div className="hallType">4K厅</div>
                                </div>
                            </div>
                            <div className="min-show-block  disabled  J-fload">
                                <span>近期场次：</span>
                                <span className="time-line">10:25 </span>
                                <span className="time-line"> 11:25 </span>
                                <span className="time-line"> 11:55</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


export default CinemaMovie