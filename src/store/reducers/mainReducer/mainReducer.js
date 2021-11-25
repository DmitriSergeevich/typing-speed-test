const initialMainState = {
  isGame: false,
  isFinish: false,
  textSize: 2,
  lang: "ru-lang",
};

const mainReducer = (state = initialMainState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "TO_GAME":
      return { ...state, isGame: true };
    case "TO_MENU":
      return { ...state, isGame: false, isFinish: false };
    case "TO_FINISH":
      return { ...state, isFinish: true };
    case "SET_LANG":
      return { ...state, lang: payload };
    case "SET_TEXT_SIZE":
      return { ...state, textSize: payload };

    default:
      return { ...state };
  }
};

export default mainReducer;
