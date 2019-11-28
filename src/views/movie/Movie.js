import React from 'react'
import MovieOnInfo from './MovieOnInfo'
import MovieComing from './MovieComing'
import {NavLink, Route, Link} from 'react-router-dom'
import Header from '../../component/Header'
import GuardRouter from '../../router/GuardRouter'
import '../../assets/css/movieOnInfo.css'

class Movie extends React.Component {
    constructor() {
        super();
        this.state = {
            dl_top: {display: 'block'},
            dl_bot: {display: 'none'}
        }
    }

    render() {
        return (
            <>
                <Header head={"猫眼电影"}></Header>
                <a id="download-tip" style={this.state.dl_bot} className="download-tip"
                   href="/app?channel=mymovie1yuan-dy"></a>
                <div className="download-app-bar" style={this.state.dl_top}>
                    <img src={"//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/avatar.png"} alt="logo"
                         style={{width: "42px", height: "42px"}}/>
                    <div className="app-name-desc">
                        <div className="app-name">猫眼</div>
                        <div className="app-desc">在线选座，热门影讯，爱上看电影</div>
                    </div>
                    <div className="btn-open-app">立即打开</div>
                </div>
                <section className="topbar">
                    <div className="white-bg topbar-bg">
                        <div className="city-entry">
                            <span className="city-name">北京</span><i className="city-entry-arrow"></i>
                        </div>
                        <div className="switch-hot" data-active=".n-hot">
                            <div className="hot-item active" data-tab=".n-hot">
                                <NavLink style={{color: "skyblue"}} activeStyle={{color: "red"}} to={'/movie'}
                                         exact>正在热映</NavLink>
                            </div>
                            <div className="hot-item " data-tab=".f-hot">
                                <NavLink style={{color: "skyblue"}} activeStyle={{color: "red"}}
                                         to={'/movie/coming'}>即将上映</NavLink>
                            </div>
                        </div>
                        <Link to={'/search'}>
                            <div className="search-entry search-icon" data-type="movie"></div>
                        </Link>
                    </div>
                </section>

                <Route path={'/movie/coming'}
                       render={() => <GuardRouter component={MovieComing}></GuardRouter>}></Route>
                <Route path={'/movie'} render={() => <GuardRouter component={MovieOnInfo}></GuardRouter>} exact></Route>
            </>
        )
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll() {
        if (document.documentElement.scrollTop > 0) {
            this.setState({
                dl_top: {display: 'none'},
                dl_bot: {display: 'block'}
            })
        } else {
            this.setState({
                dl_top: {display: 'block'},
                dl_bot: {display: 'none'}
            })
        }
    }
}

export default Movie