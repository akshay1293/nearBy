import {
    SAVE_DATA, SET_LOCATION, CLEAR_LOCATION, SET_ORIGIN
} from '../constants/actionTypes';

const INITIAL_STATE = { lat: null, lng: null, name: null, origin: { lat: null, lng: null, address: null } };


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SAVE_DATA:
            return { ...state }
        case SET_LOCATION:
            return { ...state, lat: action.payload.lat, lng: action.payload.lng, name: action.payload.name }
        case CLEAR_LOCATION:
            return { ...state, lat: null, lng: null, name: null }
        case SET_ORIGIN:
            return { ...state, origin: { lat: action.payload.lat, lng: action.payload.lng, address: action.payload.address } }
        default:
            return { ...state }
    }
}