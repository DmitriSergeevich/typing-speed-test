import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';

const initialMainState = {
  isGame: false,
  isFinish: false,
  textSize: 2,
  lang: 'ru-lang',
}

const mainReducer = (state = initialMainState, action) => {
  const {type, payload} = action;
  
  switch (type) {
    case 'TO_GAME' :
      return {...state, isGame: true};
    case 'TO_MENU' :
      return {...state, isGame: false, isFinish: false};
    case 'TO_FINISH' :
      return {...state, isFinish: true};
    case 'SET_LANG' :
      return {...state, lang: payload};
    case 'SET_TEXT_SIZE' :    
      return {...state, textSize: payload};

    default: return {...state};
  }
}

const initialGameState = {
  speed: 0,
  accuracy: 0,
  text: '',
}

const gameReducer = (state = initialGameState, action) => {
  const {type, payload} = action;
  
  switch (type) {
    case 'SET_RESULTS' :
      return {...state, speed: payload.speed, accuracy: payload.accuracy};  
    case 'GET_TEXT' :
      return {...state, text: payload};
    
    default: return {...state};
  }
}

const rootReducer = combineReducers({mainReducer, gameReducer})
export const store = createStore(rootReducer, applyMiddleware(thunk))