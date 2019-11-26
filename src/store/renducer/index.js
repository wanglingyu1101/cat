import movie from './movie'
import  cinema from './cinema'
import {combineReducers} from "redux"


const rootRenducer = combineReducers({
    movie,
    cinema
})
export default rootRenducer