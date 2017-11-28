import {
    SAVE_DATA, SET_LOCATION, CLEAR_LOCATION, SET_ORIGIN, APPLY_FILTER, CLEAR_FILTER, SET_FILTER
} from '../constants/actionTypes';

export const saveData = () => {
    return {
        type: SAVE_DATA,
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

export const setOrigin = (data) => {

    return {

        type: SET_ORIGIN,
        payload: data
    }
}

export const setFilter = (data) => {

    return {
        type: SET_FILTER,
        payload: data
    }

}

export const applyFilter = (data) => {

    return {

        type: APPLY_FILTER,
        payload: data
    }
}

