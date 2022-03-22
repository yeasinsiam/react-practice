import { combineReducers } from "redux";
import { cardReducer } from "./card/Reducer";

const rootReducer = combineReducers({
  // card
  card: cardReducer,
});

export default rootReducer;
