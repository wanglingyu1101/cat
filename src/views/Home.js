
import React from 'react'
import {NavLink, Route, withRouter} from 'react-router-dom'
import Movie from './movie/Movie'
import Cinema from './cinema/Cinema'
import My from './My/My'
import '../assets/css/bottom.css'
import GuardRouter from '../router/GuardRouter'
class Home extends React.Component {
    render() {
        return (
            <>
                <nav className="bottom-nav-bar">
                    <NavLink className="navLink" activeStyle={{color: "red"}}
                             to={'/movie'}><p className="iconfont icon-dianying"></p>电影</NavLink>
                    <NavLink className="navLink" activeStyle={{color: "red"}}
                             to={'/cinema'}> <p className="iconfont icon-yingyuan"></p> 影院</NavLink>
                    <NavLink className="navLink" activeStyle={{color: "red"}}
                             to={'/my'}> <p className="iconfont icon-wode"></p>我的</NavLink>
                </nav>
                <Route path={'/cinema'} render={() => <GuardRouter component={Cinema}></GuardRouter>}></Route>
                <Route path={'/my'} render={() => <GuardRouter component={My}></GuardRouter>}></Route>
                <Route path={'/movie'} render={() => <GuardRouter component={Movie}></GuardRouter>}></Route>
            </>
        )
    }

    UNSAFE_componentWillMount() {
        if (this.props.location.pathname === '/') {
            this.props.history.push("/movie")
        }
    }
}

export default withRouter(Home)