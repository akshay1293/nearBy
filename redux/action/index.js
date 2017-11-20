import {
    SAVE_DATA, SET_LOCATION, CLEAR_LOCATION
} from '../constants/actionTypes';

export const saveData = (data) => {
    return {
        type: SAVE_DATA,
        payload: data
    }
}

export const setLocation = (data) => {

    return {

        type: SET_LOCATION,
        payload: data,
    }
}

export const clearLocation = () => {

    return {

        type: CLEAR_LOCATION
    }
}
