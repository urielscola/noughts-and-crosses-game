function checkWinners(board) {

	let winner;

    // check for horizontal winner
    if ((board[0]) && board[0] === board[1] && board[1] === board[2]) { return winner = board[0]; }
    if ((board[3]) && board[3] === board[4] && board[4] === board[5]) { return winner = board[3]; }
    if ((board[6]) && board[6] === board[7] && board[7] === board[8]) { return winner = board[6]; }

    // check for vertical winner
    if ((board[0]) && board[0] === board[3] && board[3] === board[6]) { return winner = board[0]; }
    if ((board[1]) && board[1] === board[4] && board[4] === board[7]) { return winner = board[1]; }
    if ((board[2]) && board[2] === board[5] && board[5] === board[8]) { return winner = board[2]; }

    // check for cross winner
    if ((board[0]) && board[0] === board[4] && board[4] === board[8]) { return winner = board[0]; }
	if ((board[2]) && board[2] === board[4] && board[4] === board[6]) { return winner = board[2]; }

	if (board.every(el => el != null)) { return winner = 'draw'; }

	return null;
}

export { checkWinners };