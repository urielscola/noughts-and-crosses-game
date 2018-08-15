import { CHECK_SLAB, SET_ACTIVE, RESET_GAME } from 'Actions/types';

const initialState = {
    board: [null, null, null, null, null, null, null, null, null],
    isActive: true
};

export default function(state = initialState, action) {
    switch (action.type) {
        case CHECK_SLAB:
            let newState = [...state.board];
            newState[action.payload.position] = action.payload.player;
            return { ...state, board: [...newState] };
        case SET_ACTIVE: 
            return { ...state, isActive: action.payload }
        case RESET_GAME:
            return initialState;
        default:
            return state;
    }
}