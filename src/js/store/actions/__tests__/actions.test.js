import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

import { checkSlab, switchPlayer, endTurn, resetGame } from 'Actions';
import { CHECK_SLAB, SWITCH_PLAYERS, SET_MESSAGE, SET_ACTIVE, RESET_GAME, NO_WINNER } from 'Actions/types';


const middlewares = [thunk, promise];
const mockStore = configureStore(middlewares)

const initialState = {
    game: {
        board: [null, null, null, null, null, null, null, null, null],
        isActive: true
    },
    player: {
        active: 'X'
    },
    messasge: ''
};


describe('checkSlab action', () => {

    it('Possui type e payload corretos', () => {
        const action = checkSlab(2, initialState.player.active);

        expect(action.type === CHECK_SLAB);
        expect(action.payload === { position: 2, player: 'O' });
    });
});

describe('switchPlayer action', () => {

    it('Possui type e payload corretos', () => {

        const store = mockStore(initialState);

        const expectedActions = [SWITCH_PLAYERS, SET_MESSAGE];
        const expectedPayload = ['O', "O turn's."];

        store.dispatch(switchPlayer(store.getState().player.active));

        let receivedActions = store.getActions().map(action => action.type);
        let receivedPayload = store.getActions().map(action => action.payload);
        expect(receivedActions).toEqual(expectedActions);
        expect(receivedPayload).toEqual(expectedPayload);
    
    });
});

describe('endGame action', () => {

    it('Em caso de vitória do X', () => {

        initialState.game.board = ['X', 'X', 'X', 'O', 'O', null, null, null, null];

        const store = mockStore(initialState);

        const expectedActions = [SET_MESSAGE, SET_ACTIVE];
        const expectedPayload = ['X won the game!', false];

        store.dispatch(endTurn(store.getState().game.board));

        let receivedActions = store.getActions().map(action => action.type);
        let receivedPayload = store.getActions().map(action => action.payload);
        expect(receivedActions).toEqual(expectedActions);
        expect(receivedPayload).toEqual(expectedPayload);
    
    });

    it('Em caso de vitória do O', () => {

        initialState.game.board = ['O', 'O', 'O', 'X', 'X', null, null, null, null];

        const store = mockStore(initialState);

        const expectedActions = [SET_MESSAGE, SET_ACTIVE];
        const expectedPayload = ['O won the game!', false];

        store.dispatch(endTurn(store.getState().game.board));

        let receivedActions = store.getActions().map(action => action.type);
        let receivedPayload = store.getActions().map(action => action.payload);

        expect(receivedActions).toEqual(expectedActions);
        expect(receivedPayload).toEqual(expectedPayload);
    
    });

    it('Em um turno que não resulta em fim de jogo, deve retornar game.active == true e action NO_WINNER', () => {

        initialState.game.board = [null, null, null, null, null, null, null, null, null];

        const store = mockStore(initialState);

        const expectedActions = [NO_WINNER];

        store.dispatch(endTurn(store.getState().game.board));

        let receivedActions = store.getActions().map(action => action.type);

        expect(receivedActions).toEqual(expectedActions);
        expect(store.getState().game.isActive).toEqual(true);
    
    });

    it('Caso não haja mais casas disponíveis e ninguém tenha ganho, deve ter comportamento de empate', () => {

        initialState.game.board = ['O', 'X', 'O', 'X', 'X', 'O', 'O', 'O', 'X'];

        const store = mockStore(initialState);

        const expectedActions = [SET_MESSAGE, SET_ACTIVE];
        const expectedPayload = ["The match ended with no winners.", false];

        store.dispatch(endTurn(store.getState().game.board));

        let receivedActions = store.getActions().map(action => action.type);
        let receivedPayload = store.getActions().map(action => action.payload);

        expect(receivedActions).toEqual(expectedActions);
        expect(receivedPayload).toEqual(expectedPayload);
    
    });

});

describe('resetGame action', () => {

    it('Possui type e payload corretos', () => {

        const store = mockStore(initialState);

        const expectedActions = [SET_MESSAGE, RESET_GAME];
        const expectedPayload = ["X turn's.", undefined];

        store.dispatch(resetGame());

        let receivedActions = store.getActions().map(action => action.type);
        let receivedPayload = store.getActions().map(action => action.payload);
        expect(receivedActions).toEqual(expectedActions);
        expect(receivedPayload).toEqual(expectedPayload);
        
        setTimeout(() => {
            expect(store.getState().game.isActive).toEqual(true);
            expect(store.getState().game.board).toEqual([null, null, null, null, null, null, null, null, null]);
        }, 500);
    
    });
});