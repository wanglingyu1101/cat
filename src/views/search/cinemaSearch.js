import  React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import {withRouter} from 'react-router-dom'
import searchActionCreators from '../../store/actionCreateors/search/index'
import Header from '../../component/Header'
import {PullToRefresh} from 'antd-mobile'

let page = 2
class CinemaSearch extends React.Component{
    constructor(){
        super()
        this.state = {
            refreshing: false,
            height: document.documentElement.clientHeight,
            width:document.documentElement.clientWidth,
            showCat:'none'
        };
    }
    render(){
        return(
            <div>
                <Header back={true} head={"猫眼电影"}></Header>

                <div className="result">

                    <div className="list">
                        <PullToRefresh
                            damping={60}
                            style={{
                                height: this.state.height,
                                overflow: 'auto',
                            }}
                            indicator={{ deactivate: '上拉可以刷新' }}
                            direction={'up'}
                            refreshing={this.state.refreshing}
                            onRefresh={() => {
                                this.setState({ refreshing: false });
                                setTimeout(() => {
                                    this.props.getCinemaList(this.props.match.params.keyword,page++)
                                },1000);
                            }}
                        >
                            {
                                this.props.cinemaList ? this.props.cinemaList.map((v, i) => (

                                    <div className="list" key={i}>
                                        <div className="cinema cell">
                                            <div className="info">
                                                <p className="name-price">
                                                    <span className="name one-line">{v.nm}</span>
                                                    <span className="sell-price">
                          <span className="price">{v.sellPrice}</span>元起</span>
                                                </p>
                                                <p className="address one-line">{v.addr}</p>
                                                <p className="feature-tags">
                                                    {v.sell!==0?<span>座</span>:''}
                                                    {v.allowRefund!==0?<span>改签</span>:''}
                                                    {
                                                        v.hallType&&v.hallType.map((q,w)=>(
                                                            <span key={w}>{q}</span>
                                                        ))
                                                    }
                                                    <span className="featrue">{v.snack===1?'小吃':''}</span>
                                                </p>
                                            </div>
                                            <div className="distance">{v.distance}</div>
                                        </div>

                                    </div>
                                )) : null
                            }
                        </PullToRefresh>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getCinemaList(this.props.match.params.keyword)
        // http://m.maoyan.com/searchlist/movies?keyword=bing&ci=20&offset=20&limit=20
    }
}
function mapStateToProps(state) {
    return {
        cinemaList:state.search.cinemaList
    }
}
export  default connect(mapStateToProps,dispatch=>bindActionCreators(searchActionCreators,dispatch))(withRouter(CinemaSearch))