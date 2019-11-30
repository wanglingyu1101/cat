import  React from 'react'
import {withRouter} from 'react-router-dom'
import Header from '../../component/Header'
import {connect} from 'react-redux'
import  {bindActionCreators} from 'redux'
import searchActionCreators from '../../store/actionCreateors/search'
import {PullToRefresh} from 'antd-mobile'
let page = 2
class MovieSearch extends  React.Component{
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
            <div >
                <Header back={true} head={"猫眼电影"}></Header>

                <div className="result">

                <div className="listsss">
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
                                this.props.getMovieList(this.props.match.params.keyword,page++)
                            },1000);
                        }}
                    >
                        {
                            this.props.movieList.length>0 ? this.props.movieList.map((v, i) => (

                                <div className="movie cell"  key={i}>
                                    <img className="poster" src={this.$tools.movieImg(v.img)} alt=""/>
                                    <div className="info">
                                        <div className="name-score">
                                            <p className="name">
                                                <span className="one-line">{v.nm}</span>
                                                <span className="version "></span>
                                            </p>
                                            {
                                                v.sc===0?<span style={{
                                                        fontSize: "14px",
                                                        color:"#666",
                                                        flexShrink: 0
                                                    }}>暂无评分</span>
                                                    : <span className="score"><span className="num">{v.sc}</span>分</span>
                                            }
                                        </div>
                                        <div className="detail-section">
                                            <div className="detail-items">
                                                <p className="ename one-line">{v.enm}</p>
                                                <p className="catogary">{v.cat}</p>
                                                <p className="release">{v.rt}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )):null
                        }
                    </PullToRefresh>
                </div>
                    </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getMovieList(this.props.match.params.keyword)
        // http://m.maoyan.com/searchlist/movies?keyword=bing&ci=20&offset=20&limit=20

    } 
}
function mapStateToProps(state) {
    return {
        movieList: state.search.movieList,
    }
}
export  default  connect(mapStateToProps,dispatch=>bindActionCreators(searchActionCreators,dispatch))(withRouter(MovieSearch))