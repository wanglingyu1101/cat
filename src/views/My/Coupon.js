import  React from 'react'
import '../../assets/css/coupon.css'
import Header from '../../component/Header'
class Coupon extends React.Component{
    render(){
        return (
            <div>
                <Header head={"我的优惠券"} back={true}></Header>
                <div className="coupon">
                    <div className="input-wrapper">
                        <input type="text" placeholder="请输入优惠券密码" className="coupon-psw"/>
                    </div>
                    <p className="add-coupon">添加</p>
                </div>
                <div className="container">
                    <div className="coupon-list">
                        <div className="coupon-item outTime" data-detailurl="">
                            <div className="coupon-left">
                                <div className="left-wrapper">

                                    <div className="desc">2<span>元</span></div>

                                    <div className="type">代金券</div>
                                </div>
                            </div>
                            <div className="coupon-right">
                                <div className="title line-ellipsis">【美团支付专享】2元观影红包</div>
                                <div className="limitDesc">满30可用，不可与其他优惠活动同享。 购票时，请在“活动与抵用券”栏选择该券</div>

                                <div className="range-status-container">
                                    <div className="range-status range-has-border">有效期 2019-06-06 至 2019-06-08</div>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </div>
        )
    }
}
export  default Coupon