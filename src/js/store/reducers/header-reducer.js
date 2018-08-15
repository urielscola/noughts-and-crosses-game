import { SET_MESSAGE } from 'Actions/types';

const initialState = "X turn's";

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_MESSAGE:
            return action.payload;
        default:
            return state;
    }
}