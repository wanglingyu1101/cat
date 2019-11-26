import movie from './movie'
import  cinema from './cinema'
import search from './search'
import {combineReducers} from "redux"


const rootRenducer = combineReducers({
    movie,
    cinema,
    search
})
export default rootRenducer