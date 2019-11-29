import React from 'react'
import MovieOnInfo from './MovieOnInfo'
import MovieComing from './MovieComing'
import {NavLink, Route, Link} from 'react-router-dom'
import Header from '../../component/Header'
import GuardRouter from '../../router/GuardRouter'
import '../../assets/css/movieOnInfo.css'
import DlAppBar from "../../component/dl_app_bar";

class Movie extends React.Component {
    render() {
        return (
            <>
                <Header head={"猫眼电影"}></Header>
                <DlAppBar></DlAppBar>
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
}

export default Movie