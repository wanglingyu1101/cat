import  React from 'react'
import MovieOnInfo from './MovieOnInfo'
import MovieComing from './MovieComing'
import {NavLink,Route} from 'react-router-dom'

import GuardRouter from '../router/GuardRouter'
class Movie extends React.Component{
    render(){
        return (
            <>
				<nav>
					<NavLink style={{margin:"30px",color:"skyblue"}} activeStyle={{margin:"30px",color:"red"}} to={'/movie'} exact>正在热映</NavLink>
					<NavLink style={{margin:"30px",color:"skyblue"}} activeStyle={{margin:"30px",color:"red"}} to={'/movie/coming'}>即将上映</NavLink>
				</nav>

                <Route path={'/movie/coming'} render={()=><GuardRouter component={MovieComing}></GuardRouter>}></Route>
                <Route path={'/movie'} render={()=><GuardRouter component={MovieOnInfo} ></GuardRouter>} exact></Route>

            </>
        )
    }
}
export  default Movie