import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import {withRouter} from 'react-router-dom'
import searchActionCreators from '../../store/actionCreateors/search/index'
import Header from '../../component/Header'
import '../../assets/css/search/search.css'

class Search extends React.Component {
    render() {
        return (
            <>
                <Header head={"猫眼电影"} back={true}></Header>

                <div className="search-wrapper">
                    <div className="search-header">
                        <div className="input-wrapper">
                            {/*<img className="search-icon" src="//s0.meituan.net/bs/?f=myfe/canary:/static/deploy/images/search.png" alt=""/>*/}
                            <input className="search-input" type="text" placeholder={this.props.match.params.title==='movie'?'搜电影':'搜影院'}
                                   onChange={this.search.bind(this)} ref={'search'}/>
                            <img className="del-input" style={{display: "none"}}
                                 src="//s0.meituan.net/bs/?f=myfe/canary:/static/deploy/images/close.png"
                                 alt=""/>
                        </div>
                        <div className="cancel" onClick={this.cancel.bind(this)}>取消</div>
                    </div>

                    <div className="search-history">
                    </div>
                    <div className="search-result" style={{display: "none"}}>
                        <div className="result-wrapper"></div>
                    </div>

                    <div className="result">
                        <h3 style={{display:this.props.match.params.title === 'movie'?'block':'none'}}>电影/电视剧/综艺</h3>
                        <div className="list">


                            {
                                this.props.searchMovieList ? this.props.searchMovieList.slice(0,3).map((v, i) => (

                                    <div className="movie cell"  key={i}
                                         style={{display:this.props.match.params.title === 'movie'?'block':'none'}}>
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

                        </div>

                        <div className="more-result" style={{display:this.props.match.params.title === 'movie'&&this.props.searchMovieList&&this.props.searchMovieList.length>0?'block':'none'}} onClick={()=>this.props.history.push("/moviesearch/"+this.refs.search.value)}>查看全部{this.props.total}部影视剧</div>


                    </div>




                    <div className="result"
                         style={{display:this.props.match.params.title !== 'movie'?'block':'none'}}>
                        <h3>影院</h3>

                    {
                        this.props.searchCinemaList ? this.props.searchCinemaList.slice(0,3).map((v, i) => (

                                <div className="list" key={i}>
                                    <div className="cinema cell" data-id="9914">
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

                    <div className="more-result" style={{display:this.props.match.params.title !== 'movie'&&this.props.searchCinemaList&&this.props.searchCinemaList.length>0?'block':'none'}} onClick={()=>this.props.history.push("/cinemasearch/"+this.refs.search.value)}>查看全部{this.props.total}影院</div>
                </div>
            </div>

            </>
        )
    }

    async search(e) {
        if(this.props.match.params.title === 'movie')
        await this.props.upMovieList(e.target.value)
        else
            await this.props.upCinemaList(e.target.value)
     }
    async cancel() {
        this.refs.search.value = '';
        await this.props.upMovieList()
    }
    toMovieDetail(){
        this.props.history.push("/moviesearch/"+this.refs.search.value)
    }
    toCinemaDetail(){
        this.props.history.push("/cinemasearch/"+this.refs.search.value)
    }

}

function mapStateToProps(state) {
    return {
        searchMovieList: state.search.searchMovieList,
        searchCinemaList: state.search.searchCinemaList,
        total:state.search.total
    }
}

export default connect(mapStateToProps, dispatch => bindActionCreators(searchActionCreators, dispatch))(withRouter(Search))