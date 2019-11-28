import React from 'react'
import '../../assets/css/discountCard.css'
import Header from '../../component/Header'

class DiscountCard extends React.Component {
    render() {

        return (
            <>
                <Header back={true} head={"我的折扣卡"}></Header>
                <div className="cardlist" data-reactid=".19g61vwspt2.4">
                    <div className="no-card" data-reactid=".19g61vwspt2.4.2">
                        <img className="img"
                             src="//s0.meituan.net/bs/?f=myfe/canary:/img/card.png"
                             alt="暂无会员卡"
                             data-reactid=".19g61vwspt2.4.2.0"/>
                        <div data-reactid=".19g61vwspt2.4.2.1">暂无影院会员卡</div>
                        <div data-reactid=".19g61vwspt2.4.2.2"><span
                            className="link icon icon-add2 btn">查看本城市全部会员卡</span></div>
                    </div>
                </div>
            </>
        )
    }
}

export default DiscountCard