import React from 'react'
import '../../assets/css/my/myshop.css'
import Header from '../../component/Header'
class OnlineCinema extends React.Component {
    render() {
        return (
            <>
                <Header back={true} head={"猫眼电影"}></Header>
                <div className="no-data">
                    <div className="wrapper">
                        <div className="tip-text">您最近还没有新订单，赶快去下一单吧</div>
                    </div>
                </div>
            </>
        )
    }
}

export default OnlineCinema