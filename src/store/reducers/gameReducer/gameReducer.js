const initialGameState = {
  speed: 0,
  accuracy: 0,
  text: "",
  isLoading: true,
};

const gameReducer = (state = initialGameState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_RESULTS":
      return { ...state, speed: payload.speed, accuracy: payload.accuracy };
    case "SET_TEXT":
      return { ...state, text: payload, isLoading: false };
    case "SET_LOADING":
      return { ...state, isLoading: payload };

    default:
      return { ...state };
  }
};

export default gameReducer;
