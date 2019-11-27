import React from 'react'
import '../../assets/css/my.css'
class My extends React.Component {
    render() {
        return (
            <div>
                <div className="my-center">
                    <div className="header">
                        <img src="https://img.meituan.net/avatar/baf5a17d101ccb1cb52df6fae1166dee39970.jpg" className="head-icon" alt=""/>
                            <div className="name"></div>
                    </div>
                    <div className="container">
                        <div className="group">
                            <div className="mb-outline-tb">
                                <div className="orders">
                                    <div className="title">我的订单</div>
                                    <div className="mb-outline-b title-line"></div>
                                    <div className="list list-two">
                                        <div className="order-item movie">
                                            <a data-type="mip" href="/mycinemaorder"><p>电影</p></a>
                                        </div>
                                        <div className="order-item store"><a href="/myshop"><p>商城</p></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group">
                            <div className="mb-outline-tb">
                                <div className="coupon item mb-line-b"><a href="/onlinecinema"><span>在线观影</span></a></div>
                                <div className="coupon item mb-line-b"><a href="/coupon"><span>优惠券</span></a></div>
                                <div className="coupon item mb-line-b"><a href="/discountcard"><span>折扣卡</span></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default My