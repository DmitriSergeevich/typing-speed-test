import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';

const initialState = {isGame: true}

const mainReducer = (state = initialState, action) => {
  const {type, payload} = action;
  
  switch (type) {
    case 'TO_GAME' : return {...state, isGame: true};
    case 'TO_MENU' : return {...state, isGame: false};

    default: return {...state};
  }
}

const rootReducer = combineReducers({mainReducer})
export const store = createStore(rootReducer, applyMiddleware(thunk))