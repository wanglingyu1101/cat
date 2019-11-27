import React from 'react';
import {Route,Switch} from 'react-router-dom'
import Home from './views/Home'
import Login from './views/login/Login'
import Search from './views/search/Search'
import GuardRouter from './router/GuardRouter'
import Coupon from "./views/My/Coupon";
import DiscountCard from "./views/My/DiscountCard";
import MyCinemaOrder from "./views/My/MyCinemaOrder";
import MyShop from "./views/My/MyShop";
import OnlineCinema from "./views/My/OnlineCinema";
import SearchCinema from './views/search/cinemaSearch'

class App extends  React.Component{
  render(){
    return(
        <>
            <Switch>
                <Route path={'/coupon'} render={()=><GuardRouter component={Coupon}></GuardRouter>}></Route>
                <Route path={'/discountcard'} render={()=><GuardRouter component={DiscountCard}></GuardRouter>}></Route>
                <Route path={'/mycinemaorder'} render={()=><GuardRouter component={MyCinemaOrder}></GuardRouter>}></Route>
                <Route path={'/myshop'} render={()=><GuardRouter component={MyShop}></GuardRouter>}></Route>
                <Route path={'/onlinecinema'} render={()=><GuardRouter component={OnlineCinema}></GuardRouter>}></Route>
                <Route path={'/search'} render={()=><GuardRouter component={Search}></GuardRouter>}></Route>
                <Route path={'/searchcinema'} render={()=><GuardRouter component={SearchCinema}></GuardRouter>}></Route>
                <Route path={'/moviesearch/:keyword/:ci/:offset/:limit'} render={()=><GuardRouter component={Search}></GuardRouter>}></Route>
                <Route path={'/login'} render={()=><GuardRouter component={Login}></GuardRouter>}></Route>
                <Route path={'/'} render={()=><GuardRouter component={Home}></GuardRouter>}></Route>
            </Switch>
        </>
    )
  }
}

export default App;
