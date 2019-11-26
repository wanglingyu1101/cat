import thunk from 'redux-thunk'
import {applyMiddleware,createStore} from 'redux'
import rootRenducer from './renducer'

export  default  createStore(rootRenducer,applyMiddleware(thunk))