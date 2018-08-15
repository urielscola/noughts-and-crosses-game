
import { CHECK_SLAB, SWITCH_PLAYERS, SET_MESSAGE, SET_ACTIVE, RESET_GAME, NO_WINNER } from 'Actions/types';
import { checkWinners } from '../../helpers/utils';



export function checkSlab(index, player) {
	
	return {
		type: CHECK_SLAB,
		payload: { position: index, player: player }
	}
	
}

export function switchPlayer(actualPlayer) {

	actualPlayer = actualPlayer === 'X' ? 'O' : 'X';

	return function(dispatch) {
		dispatch({ type: SWITCH_PLAYERS, payload: actualPlayer });
		dispatch({ type: SET_MESSAGE, payload: `${actualPlayer} turn's.` });
	}

}

export function endTurn(board) {

	const winner = checkWinners(board);

	if (winner === 'draw') {
		return dispatch => { 
			dispatch({ type: SET_MESSAGE, payload: "The match ended with no winners." }); 
			dispatch({ type: SET_ACTIVE, payload: false });
		}
	} else if (winner) {
		return dispatch => {
			dispatch({ type: SET_MESSAGE, payload: `${winner} won the game!` });
			dispatch({ type: SET_ACTIVE, payload: false });
		}
	}

	return {
		type: NO_WINNER
	}
}

export const resetGame = () => dispatch => {
	dispatch({ type: SET_MESSAGE, payload: "X turn's." });
	dispatch({ type: RESET_GAME });
}