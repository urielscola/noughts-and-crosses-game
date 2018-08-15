import { combineReducers } from "redux";
import boardReducer  from "./board-reducer";
import playerReducer  from "./player-reducer";
import headerReducer  from "./header-reducer";


const rootReducer = combineReducers({
  game: boardReducer,
  player: playerReducer,
  message: headerReducer
});

export default rootReducer;