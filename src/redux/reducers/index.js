import {combineReducers} from 'redux'

import authReducer from './auth'
import movieReducer from './movie'

const reducer = combineReducers ({
    auth : authReducer,
    movie : movieReducer
})

export default reducer