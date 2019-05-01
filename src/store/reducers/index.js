import {combineReducers} from 'redux'

import cars from './cars'
import types from './types'
import tasks from './tasks'

export default combineReducers({
    cars,
    types,
    tasks
})