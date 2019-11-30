import React from 'react';
import {Route,Switch,withRouter} from 'react-router-dom'
import Home from './views/Home'
import Login from './views/login/Login'
import Search from './views/search/Search'
import GuardRouter from './router/GuardRouter'
import Coupon from "./views/My/Coupon";
import DiscountCard from "./views/My/DiscountCard";
import MyCinemaOrder from "./views/My/MyCinemaOrder";
import MyShop from "./views/My/MyShop";
import OnlineCinema from "./views/My/OnlineCinema";
import MovieSearch from './views/search/MovieSearch';
import CinemaSearch from './views/search/cinemaSearch'
import CinemaMovie from "./views/cinema/cinemaMovie";
import  CinemaDetail from './views/cinema/CinemaDetail'


class App extends  React.Component{
  render(){
    return(
        <>
            <Switch>
                {/*根据电影搜影院*/}
                <Route path={'/cinema/movie/:movieId'} render={()=><GuardRouter component={CinemaMovie}></GuardRouter>}></Route>
                <Route path={'/my/coupon'} render={()=><GuardRouter component={Coupon}></GuardRouter>}></Route>
                <Route path={'/my/discountcard'} render={()=><GuardRouter component={DiscountCard}></GuardRouter>}></Route>
                <Route path={'/my/mycinemaorder'} render={()=><GuardRouter component={MyCinemaOrder}></GuardRouter>}></Route>
                <Route path={'/my/myshop'} render={()=><GuardRouter component={MyShop}></GuardRouter>}></Route>
                <Route path={'/my/onlinecinema'} render={()=><GuardRouter component={OnlineCinema}></GuardRouter>}></Route>

                <Route path={'/cinemadetail/:cinemaId'} render={()=><GuardRouter component={CinemaDetail}></GuardRouter>}></Route>





                <Route path={'/search/:title'} render={()=><GuardRouter component={Search}></GuardRouter>}></Route>
                <Route path={'/cinemasearch/:keyword'} render={()=><GuardRouter component={CinemaSearch}></GuardRouter>}></Route>
                <Route path={'/moviesearch/:keyword'} render={()=><GuardRouter component={MovieSearch}></GuardRouter>}></Route>


                <Route path={'/login'} render={()=><GuardRouter component={Login}></GuardRouter>}></Route>
                <Route path={'/'} render={()=><GuardRouter component={Home}></GuardRouter>}></Route>
            </Switch>
        </>
    )
  }
}

export default withRouter(App);
