import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import searchActionCreators from '../../store/actionCreateors/search/index'
import Header from '../../component/Header'
import '../../assets/css/search.css'

class Search extends React.Component {
    render() {
        return (
            <>
                <Header head={"猫眼电影"} back={true}></Header>
                <input type="text" placeholder="搜电影、搜影院" onChange={this.searchMovie.bind(this)}/>
                {
                    this.props.searchMovieList ? this.props.searchMovieList.map((v, i) => (
                        <div key={i}>
                            <p>{v.nm}{v.version} {v.sc === 0 ? '暂无评分' : v.sc}</p>
                            <p>{v.enm}</p>
                            <p>{v.cat}</p>
                            <p>{v.rt}</p>
                            <img src={this.$tools.movieImg(v.img)} alt=""/>
                            <hr/>
                            <div className="search-wrapper">
                                <div className="search-header">
                                    <div className="input-wrapper">
                                        {/*<img className="search-icon" src="//s0.meituan.net/bs/?f=myfe/canary:/static/deploy/images/search.png" alt=""/>*/}
                                        <input className="search-input" type="text" placeholder="搜电影、搜影院"
                                               onChange={this.searchMovie.bind(this)} ref={'search'}/>
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
                                {
                                    this.props.searchMovieList ? this.props.searchMovieList.map((v, i) => (
                                        <div id={'Smovie'} key={i}>
                                            {/*<img src={v.img?this.$tools.movieImg(v.img):''} alt=""/>*/}
                                            <h3>{v.nm}</h3> {v.version}
                                            <p>{v.dir}</p>
                                            <p>{v.cat}</p>
                                            <p>{v.rt}</p>
                                            <p>{v.sc}</p>
                                        </div>
                                    )) : null
                                }
                                <p style={{padding: '7px'}}
                                   display={this.props.searchCinemaList ? 'block' : 'none'}>影院</p>
                                <hr/>
                                {
                                    this.props.searchCinemaList ? this.props.searchCinemaList.map((v, i) => (
                                        <div key={i}></div>
                                    )) : null
                                }
                            </div>
                        </div>
                    )):null
                }
            </>
        )
    }

    async searchMovie(e) {
        // if(e.target.value !== "")
        await this.props.upMovieList(e.target.value)
        console.log(this.props.searchMovieList)
    }

    cancel() {
        this.refs.search.value = ''
    }
}

function mapStateToProps(state) {
    return {
        searchMovieList: state.search.searchMovieList,
        searchCinemaList: state.search.searchCinemaList
    }
}

export default connect(mapStateToProps, dispatch => bindActionCreators(searchActionCreators, dispatch))(Search)