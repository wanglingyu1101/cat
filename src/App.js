import React from 'react';
import {Route,Switch} from 'react-router-dom'
import Home from './views/Home'
import Login from './views/Login'
import Search from './views/Search'
import GuardRouter from './router/GuardRouter'
import MovieSearch from "./views/MovieSearch"

class App extends  React.Component{
  render(){
    return(
        <>
            <Switch>
                <Route path={'/search'} render={()=><GuardRouter component={Search}></GuardRouter>}></Route>
                <Route path={'/login'} render={()=><GuardRouter component={Login}></GuardRouter>}></Route>
                <Route path={'/moviesearch/:keyword/:ci/:offset/:limit'} render={()=><GuardRouter component={MovieSearch} ></GuardRouter>}></Route>
                <Route path={'/'} render={()=><GuardRouter component={Home} ></GuardRouter>}></Route>
            </Switch>
        </>
    )
  }
}

export default App;
