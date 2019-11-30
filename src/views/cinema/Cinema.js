import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {PullToRefresh} from 'antd-mobile';
import {bindActionCreators} from "redux";
import Header from '../../component/Header'
import actionCinemaCreators from "../../store/actionCreateors/cinema/index";
import '../../assets/css/cinema/cinema.css';

class Cinema extends React.Component {
    constructor(){
        super();
        this.state = {
            refreshing: false,
            cinemaPage : 1,
            width:document.documentElement.offsetWidth
        };
    }
    render() {
        return (
            <>
                {/* 影院头部*/}
                <Header head={"影院"}></Header>
                {/*定位及搜索*/}
                <section className="topbarc">
                    <div className="gray-bg topbar-bg ">
                        <div className="city-entry">
                            <span className="city-name">北京</span><i className="city-entry-arrow"></i>
                        </div>
                        <Link to={"/search/cinema"} className="search-entry search-input">
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAwFJREFUSA3FVs1qU0EUTibBRQiCRF3UB3BTcFHwJ0XRJ+gDhDaQ5vcJ3PgCfYL80AYSyQP4BIKQiosuhLoQXOjCbqQIJUgoyY3fdzNnmCRzk3uvBQfmzrlzzvm+OTNzz7mJxH9qyTC83W733mQyeTKbzbbQc8lk8hL9Ip1OfyqVSr/CYCzbBBKDQHU6nX2MZfQ8HNWyM949LOAU/bharb7F6DlsnFNOYhDmp9NpGx7bTi/35HkqlaphAadu9eLsCjFIS57nNRHlLct0AnmIiL5ivETPQf8Q4y56Gt1v0F8rpRog78pc0LhATFJEemIZXwHoKJvNNguFwm9r3hcHg8Gd0WjUwEJfY+K26BH54SZyQ8ztBcB7K9IzAO01Go2fAhg0NpvNB9C9Q9+hjY781bpt9y8MyBTP1CZFpC/CkJKIdrSHyMUmiKPxXBeSJvOb2mq1DiDLRbqCvFer1f7QIGzT9nuwpz/bNnZxfy6uPv0VYWvKouKZho1UfGTUkR/JOyI3uDIno2JygMEzPTHhRRJlnFH78yvglueJ78JRzEhQyFkMXbfX5Rg0p/2HWi/4K+YKq9qSWf2dymvs0cax8W1AEuesCSaHm2gGZwnfYCuszhhh1l6EMYohGJwlfANF4gt5w+qYBv+52Tg2vg2sWNowIVVll2nQNogqa3/mcDZP48/frKdiPcWqpKKkmXstfWRR+/uFg7hB9VpSpikMTPg690YmpR/834gjiI9FXh79IoEzUUibn6GUtHnG3Bslbbbb7QxIfwDjriY5r9frj0Aux7jALSnTYxGH0bXW7gDkQ9jIdaRfLFLCfEefUXA1UxapvKl6bBF1EXUZAa0sYIFYyBFt7D8QHBu/kuebyFeINXnsf65KpfIR94WXqrSO3ElMB33hDrBNh5DX/mVCf4It7ctFwntyE3kgsbXaRL/fvz8ejx8DMPR/9SbyUMT2IqLIa8mjAMWxdZB/y2QyT80/cRzQMD78lNDKOHOa84fwZbFYtCtiGJj4Noy81+uZcvkXH+aXwmK6+EsAAAAASUVORK5CYII="
                                alt=""/>
                            <span>搜影院</span>
                        </Link>
                    </div>
                </section>
                {/*下拉选项，影院在内*/}
                <section className="cinema singleton page active">
                    <div className="nav-wrap filter-nav-wrap">
                        <div className="tab mb-line-b">
                            <div className="item">全城<span className="drop"></span></div>
                            <div className="item">品牌<span className="drop"></span></div>
                            <div className="item">特色<span className="drop"></span></div>
                        </div>
                    </div>
                </section>
                        {/*影院*/}
                            <div className="cinema-list">
                                <div className="list-wrap">
                                    <PullToRefresh
                                        damping={60}
                                        style={{
                                            width:this.state.width,
                                            overflow: 'auto',
                                        }}
                                        indicator={{ deactivate: '上拉可以刷新' }}
                                        direction={'up'}
                                        refreshing={this.state.refreshing}
                                        onRefresh={() => {
                                            setTimeout(() => {
                                                this.props.upCinema(this.state.cinemaPage++)
                                            }, 1000);
                                        }}
                                    >
                                    {
                                        this.props.cinemaList.map((v, i) => (
                                            <Link to={'/cinemadetail/'+v.id} key={v.id}>
                                    <div className="item mb-line-b">
                                        <div className="title-block box-flex middle">
                                            <div className="title line-ellipsis">
                                                <span>{v.nm}</span>
                                                <span className="price-block">
                                                    {
                                                        v.sellPrice === ''?null:<span className="price">{v.sellPrice}<span className={"q"}>元起</span></span>
                                                    }
                                            </span>
                                            </div>
                                            <div className="location-block box-flex">
                                                <div className="flex line-ellipsis">{v.addr}</div>
                                                <div className="distance">{v.distance}</div>
                                            </div>
                                            <div className="flex"></div>
                                            {/*折扣卡等优惠判断*/}
                                            <div className="label-block">
                                                {
                                                    v.tag.allowRefund === 1?<div className="allowRefund">退</div>:null
                                                }
                                                {
                                                    v.tag.endorse === 1?<div className="endorse">改签</div>:null
                                                }
                                                {
                                                    v.tag.snack === 1?<div className="snack">小吃</div>:null
                                                }
                                                {
                                                    v.tag.vipTag?<div className="vipTag">折扣卡</div>:null
                                                }
                                                {
                                                    v.tag.hallType?v.tag.hallType.map((v,i)=>(
                                                            <div className="hallType" key={i}>{v}</div>
                                                    )):null
                                                }

                                            </div>
                                            {
                                                v.promotion.cardPromotionTag?<div className="discount-block">
                                                    <div>
                                                        <div className="discount-label normal card">
                                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg==" alt="" style={{height:'15px',width:'15px'}}/>
                                                        </div>
                                                        <div className="discount-label-text">{v.promotion.cardPromotionTag}</div>
                                                    </div>
                                                </div> :null
                                            }
                                        </div>
                                    </div>
                                            </Link>
                                        ))
                                    }
                                    </PullToRefresh>
                                </div>
                            </div>


            </>
        )
    }

    componentDidMount() {
        this.props.getCinema()
    }
}

function mapStateToProps(state) {
    return {
        cinemaList: state.cinema.cinemaList,
    }
}

export default connect(mapStateToProps, dispatch => bindActionCreators(actionCinemaCreators, dispatch)) (Cinema)