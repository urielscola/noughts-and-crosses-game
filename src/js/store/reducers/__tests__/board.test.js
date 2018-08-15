import { CHECK_SLAB, SET_ACTIVE, RESET_GAME } from 'Actions/types';
import boardReducer from '../board-reducer';

const initialState = {
    board: [null, null, null, null, null, null, null, null, null],
    isActive: true
};

describe('Board reducer', () => {

    it('Lida com a action CHECK_SLAB', () => {

        const action = {
            type: CHECK_SLAB,
            payload: {
                position: 0,
                player: 'X'
            }
        }


        const newState = boardReducer(initialState, action);
        const expectedPayload = { board: ['X', null, null, null, null, null, null, null, null], isActive: true };

        expect(newState).toEqual(expectedPayload);
    });

    it('Lida com a action SET_ACTIVE', () => {

        const action = {
            type: SET_ACTIVE,
            payload: false
        }


        const newState = boardReducer(initialState, action);
        const expectedPayload = { board: [null, null, null, null, null, null, null, null, null], isActive: false };

        expect(newState).toEqual(expectedPayload);
    });

    it('Lida com a action RESET_GAME', () => {

        const action = {
            type: RESET_GAME
        }

        const newState = boardReducer(initialState, action);

        expect(newState).toEqual(initialState);
    });

    it('Lida com actions inválidas', () => {

        const action = {
            type: 'INVALID',
            payload: 123
        }

        const newState = boardReducer(initialState, action);
        
        expect(newState).toEqual(initialState);
    });
});