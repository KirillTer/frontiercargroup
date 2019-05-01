import * as R from 'ramda'
import {FEATCH_TYPES_SUCCESS} from '../actions/actionTypes'

const initialState = {}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FEATCH_TYPES_SUCCESS:
            return R.merge(state, payload)
        default: return state
    }
}