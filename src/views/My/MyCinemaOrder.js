import React from 'react'
import '../../assets/css/my/myCinemaOrder.css'
import Header from '../../component/Header'
class MyCinemaOrder extends React.Component {
    render() {
        return (
            <div>
                <Header back={true} head={"我的电影订单"}></Header>
                <div className="order-content">
                    <div className="order-list">
                        <div className="order-item mb-line-tb">
                            <div className="order-title mb-line-b">
                                <div className="cinema-name line-ellipsis">
                                    横店电影城(顺城店)
                                </div>
                            </div>
                            <div className="order-detail-link">
                                <div className="order-info">
                                    <img
                                        src="//p0.meituan.net/114.160/movie/c6b9bfb37fdb6dc01f700bd3f8d383c92054736.jpg"
                                        alt=""/>
                                    <div className="order-desc">
                                        <div className="movie-name line-ellipsis">一出好戏&nbsp;&nbsp;<span>1张</span></div>
                                        <div className="showTime line-ellipsis">2018-08-12 周日 19:30</div>
                                        <div className="position line-ellipsis">4号激光厅
                                            <span>5排11座</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-more  mb-line-t">
                                <div className="price">总价：<span>22.9元</span></div>
                                <div className="status">已完成</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyCinemaOrder