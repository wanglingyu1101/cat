import React from 'react'
import '../../assets/css/myshop.css'

class OnlineCinema extends React.Component {
    render() {
        return (
            <div className="no-data">
                <div className="wrapper">
                    <div className="tip-text">您最近还没有新订单，赶快去下一单吧</div>
                </div>
            </div>
        )
    }
}

export default OnlineCinema