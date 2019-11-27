import  React from 'react'
import {NavLink,Route,withRouter} from  'react-router-dom'

import Movie from './Movie'
import Cinema from './Cinema'
import My from './My'
import GuardRouter from '../router/GuardRouter'

class Home extends React.Component{
    render(){
        return (
            <>
                <nav>
                    <NavLink style={{margin:"30px",color:"skyblue"}} activeStyle={{margin:"30px",color:"red"}} to={'/movie'} >电影</NavLink>
                    <NavLink style={{margin:"30px",color:"skyblue"}} activeStyle={{margin:"30px",color:"red"}} to={'/cinema'}>影院</NavLink>
                    <NavLink style={{margin:"30px",color:"skyblue"}} activeStyle={{margin:"30px",color:"red"}} to={'/my'}>我的</NavLink>
                </nav>

                    <Route path={'/cinema'} render={()=><GuardRouter component={Cinema}></GuardRouter>}></Route>
                    <Route path={'/my'} render={()=><GuardRouter component={My}></GuardRouter>}></Route>
                    <Route path={'/movie'} render={()=><GuardRouter component={Movie}></GuardRouter>}></Route>

            </>
        )
    }
    UNSAFE_componentWillMount(){
        if(this.props.location.pathname === '/'){
            this.props.history.push("/movie")
        }
    }
}
export  default withRouter(Home)