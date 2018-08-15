import { SWITCH_PLAYERS } from 'Actions/types';
import boardReducer from '../board-reducer';

const initialState = { active: 'X' };

describe('Player reducer', () => {

    it('Lida com a action SWITCH_PLAYERS', () => {

        const action = {
            type: SWITCH_PLAYERS,
            payload: 'O'
        }


        const newState = boardReducer(initialState, action);
        const expectedPayload = 'O';

        setTimeout(() => {
            expect(newState).toEqual(expectedPayload);
        }, 0)
    });

});