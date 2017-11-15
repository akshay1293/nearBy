import {
    SAVE_DATA, TEMP
} from '../constants/actionTypes';

export const saveData = (data) => {
    return {
        type: SAVE_DATA,
        payload: data
    }
}
