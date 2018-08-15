import { SWITCH_PLAYERS } from 'Actions/types';

const initialState = {
    active: 'X'
}

export default function(state = initialState, action) {
    switch (action.type) {
        case SWITCH_PLAYERS:
            return { ...state, active: action.payload };
        default:
            return state;
    }
}