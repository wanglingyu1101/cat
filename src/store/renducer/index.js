import movie from './movie'
import  cinema from './cinema'
import search from './search'
import login from './login'
import {combineReducers} from "redux"


const rootRenducer = combineReducers({
    movie,
    cinema,
    search,
    login
})
export default rootRenducer