import {
    SAVE_DATA
} from '../constants/actionTypes';

const INITIAL_STATE = { lat: null, long: null };


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SAVE_DATA:
            return { ...state }
        default:
            return { ...state }
    }
}