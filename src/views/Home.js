import  React from 'react'
import {NavLink,Route,withRouter} from  'react-router-dom'

<<<<<<< HEAD
import Movie from './Movie'
import Cinema from './Cinema'
import My from './My/My'
=======
import Movie from './movie/Movie'
import Cinema from './cinema/Cinema'
import My from './My'
>>>>>>> fefee7f0186dd72fe8113081ccd49c3a80deb3aa
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