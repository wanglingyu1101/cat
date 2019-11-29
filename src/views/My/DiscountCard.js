import React from 'react'
import '../../assets/css/discountCard.css'
import Header from '../../component/Header'

class DiscountCard extends React.Component {
    render() {

        return (
            <>
                <Header back={true} head={"我的折扣卡"}></Header>
                <div className="cardlist">
                    <div className="no-card">
                        <img className="img"
                             src="//s0.meituan.net/bs/?f=myfe/canary:/img/card.png"
                             alt="暂无会员卡"/>
                        <div>暂无影院会员卡</div>
                        <div>
                            <span className="link icon icon-add2 btn">查看本城市全部会员卡</span>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default DiscountCard