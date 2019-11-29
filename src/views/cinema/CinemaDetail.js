import  React from 'react'
import Header from '../../component/Header'
import "../../assets/css/cinemadetail.css"

class CinemaDetail extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return(
            <div>
                {/*头部*/}
                <Header head={"大地影院"} back={true}></Header>
                {/*内容*/}
                <div className="body" style={{}}>
                    <a id="download-header" href="/app?channel=mymovie1yuan-dy" data-cid="c_76cEz" data-view-bid=""
                       data-bid="b_53up23as"
                       data-lab="{&quot;position&quot;:&quot;home&quot;, &quot;utm_content&quot;: &quot;&quot;, &quot;utm_source&quot;: &quot;&quot;}">
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
                    <a id="download-tip" className="download-tip" href="/app?channel=mymovie1yuan-dy" data-cid="c_76cEz" data-view-bid=""
                       data-bid="b_53up23as"
                       data-lab="{&quot;position&quot;:&quot;bottom&quot;, &quot;utm_content&quot;: &quot;&quot;, &quot;utm_source&quot;: &quot;&quot;}"
                       style={{display: 'none'}}></a>
                    <div className="body-wrap">
                        <div className="cinema-wrap">
                            <div className="cinema-block">
                                <div className="cinema-info">
                                    <div className="title line-ellipsis">大地院线影城（珠江摩尔店）</div>
                                    <div className="location line-ellipsis">昌平区回龙观镇北清路1号院7号楼内7-101-26</div>
                                    <div className="location-icon" data-bid="dp_wx_cinema_map">
                                        <img src="data:image/png;base64,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"/>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <div className="cinema-nav swiper-container swiper-container-horizontal">
                                            <div className="post-bg"
                                                 style={{backgroundImage: `url(&quot;//p0.meituan.net/148.208/moviemachine/58ee13be6dc60bf5e636cf915bbbaaa55787785.jpg&quot;)`}}></div>
                                            <div className="post-bg-filter"></div>
                                            <div className="swiper-wrapper"
                                                 style={{transform: 'translate3d(159.5px, 0px, 0px)',transitionDuration: '0ms'}}>
                                                <div className="swiper-slide swiper-slide-active"
                                                     data-obj="{&quot;movieId&quot;:247949,&quot;globalReleased&quot;:true,&quot;desc&quot;:&quot;104分钟 | 喜剧 | 克里斯汀·贝尔&quot;,&quot;nm&quot;:&quot;冰雪奇缘2&quot;,&quot;sc&quot;:&quot;9.0&quot;,&quot;wish&quot;:204361,&quot;bgImage&quot;:&quot;http://p0.meituan.net/148.208/moviemachine/58ee13be6dc60bf5e636cf915bbbaaa55787785.jpg&quot;,&quot;preferential&quot;:0}">
                                                    <div className="post" data-bid="dp_wx_cinema_movie_pic_click">
                                                        <img src="//p0.meituan.net/148.208/moviemachine/58ee13be6dc60bf5e636cf915bbbaaa55787785.jpg"/>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="movie-info">
                                            <div className="movie-title line-ellipsis">
                                                <span className="title">冰雪奇缘2</span>
                                                <span className="grade">
						<span>9.0<span className="small">分</span></span>

					</span>

                                            </div>
                                            <div className="movie-desc line-ellipsis">104分钟 | 喜剧 | 克里斯汀·贝尔</div>
                                        </div>
                                    </div>
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
                                        <div className="nav-item active" data-bid="dp_wx_cinema_show_date" data-id="2019-11-27">
                                            <span className="date-title">今天11月27日</span>

                                        </div>
                                        <div className="nav-item active" data-bid="dp_wx_cinema_show_date" data-id="2019-11-28">
                                            <span className="date-title">今天11月28日</span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="seat-wrap">
                            <div className="discount-block">

                                <div className="vip-tips">
                                    <a>
                                        <div className="label">折扣卡</div>
                                        <div className="label-text line-ellipsis">现在开卡，首单2张最高立减6元</div>
                                        <div className="process">20元起开卡</div>
                                    </a>
                                </div>
                            </div>
                            <div className="seat-inner-wrap">
                                <div className="seat-list">
                                    <div className="list-wrap">
                                        <div className="item-outer mb-line-b" data-bid="dp_wx_cinema_show_item">

                                            <div className="item box-flex">
                                                <div className="time-block">
                                                    <div className="begin">16:00</div>
                                                    <div className="end">17:44<span className="tui">散场</span></div>

                                                </div>
                                                <div className="info-block">
                                                    <div className="lan">原版 3D</div>
                                                    <div className="hall">1号激光厅</div>
                                                </div>
                                                <div className="price">
                                                    <div className="sellPr"><span className="d">¥</span><span><span className="stonefont"></span></span>
                                                    </div>
                                                    <div className="vipPrice"><span className="icon">折扣卡</span><span className="num">¥28</span>
                                                    </div>
                                                    <div className="extraDesc">折扣卡首单特惠</div>
                                                </div>
                                                <div className="button-block">
                                                    <div className="button" data-bid="dp_wx_cinema_show_btn">购票</div>


                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="tuan-wrap">
                    <div className="no-seat">
                        <div className="icon"><img src="data:image/png;base64,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"/></div>

                        <div className="text">今日暂无场次</div>
                        <div className="next-date-button" data-id="2019-11-27">
                            点击查看11月27日场次
                        </div>
                    </div>

                    <div className="gap" style={{height: '10px',backgroundColor:'#f0f0f0'}}></div>
                    <div className="tuan-list">
                        <div className="tuan-title mb-line-b">影院超值套餐</div>
                        <div className="tuan-item mb-line-b">
                            <img data-ui-type="image-viewer"
                                 src="//p0.meituan.net/440.0/movie/4b94cdb55d271185e2ecb17a97a6f61f1020393.png@750w_750h_1e_1c"/>

                                <span className="hot-tag ">HOT</span>

                                <div className="item-info"
                                     data-href="/deal/submitorder/100269074?_v_=yes&amp;promotionsId=0&amp;cinemaId=26195&amp;category=11&amp;poiId=0&amp;channelId=4"
                                     data-bid="dp_wx_cinema_deal_list">
                                    <div className="title">

                                        <span>双人</span>

                                        85oz爆米花1桶+22oz可乐2杯
                                    </div>

                                    <div className="sell-num">已售464</div>
                                    <div className="price">

				<span className="sell-price">
					<span>¥</span><span className="num">38</span>
				</span>

                                    </div>
                                    <div className="buy-btn">去购买</div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CinemaDetail