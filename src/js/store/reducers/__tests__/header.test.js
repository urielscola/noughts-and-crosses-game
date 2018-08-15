import { SET_MESSAGE } from 'Actions/types';
import boardReducer from '../board-reducer';

const initialState = '';

describe('Header reducer', () => {

    it('Lida com a action SET_MESSAGE', () => {

        const action = {
            type: SET_MESSAGE,
            payload: 'Nova mensagem'
        }


        const newState = boardReducer(initialState, action);
        const expectedPayload = 'Nova mensagem';

        setTimeout(() => {
            expect(newState).toEqual(expectedPayload);
        }, 0)
    });

});