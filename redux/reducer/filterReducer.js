import {
    APPLY_FILTER, CLEAR_FILTER, SET_FILTER
} from '../constants/actionTypes';


const INITIAL_STATE = { filter: null, distance: 5000, applied: false };

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case SET_FILTER:
            return { ...state, filter: action.payload.filter, applied: action.payload.applied }
        case APPLY_FILTER:
            return { ...state, applied: action.payload.applied }
        default:
            return { ...state }
    }
}