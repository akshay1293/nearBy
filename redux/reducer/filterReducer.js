import {
    APPLY_FILTER, CLEAR_FILTER, SET_FILTER, CLICKED_ON_FILTER, SET_CURRENT_FILTER, SET_PREVIOUS_FILTER
} from '../constants/actionTypes';


const INITIAL_STATE = { filter: null, distance: 5000, applied: false, selector: { currentValue: null, previousValue: null } };

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case SET_FILTER:
            return { ...state, filter: action.payload.filter, applied: action.payload.applied }
        case APPLY_FILTER:
            return { ...state, applied: action.payload.applied }
        case SET_CURRENT_FILTER:
            return { ...state, selector: { currentValue: action.payload.current, previousValue: state.selector.previousValue } }
        case SET_PREVIOUS_FILTER:
            return { ...state, selector: { currentValue: state.selector.currentValue, previousValue: action.payload.previous } }
        default:
            return { ...state }
    }
}