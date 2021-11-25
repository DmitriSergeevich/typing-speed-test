import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEngText, fetchRuText } from "../actions/asyncActions";
import actionCreators from "../store/actionCreators/actionCreators";
import GameWindow from "../GameWindow/GameWindow";

const GamePlay = () => {
  const { text, isLoading } = useSelector((state) => state.gameReducer);
  const { lang, textSize } = useSelector((state) => state.mainReducer);

  const dispatch = useDispatch();
  const [curentletter, setCurentletter] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [sumTypeSpeed, setSumTypeSpeed] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [error, setError] = useState(false);

  const pastTimeShtamp = useRef(0);
  const allKeyDown = useRef(0);

  useEffect(() => {
    dispatch(
      lang === "ru-lang" ? fetchRuText(textSize) : fetchEngText(textSize)
    );
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (!event.repeat) {
        if (
          event.key !== text[curentletter] &&
          event.code !== "CapsLock" &&
          event.code !== "ShiftLeft" &&
          event.code !== "ShiftRight"
        ) {
          setError(true);
        }

        if (event.key === text[curentletter]) {
          if (pastTimeShtamp.current !== 0) {
            setSumTypeSpeed(
              event.timeStamp - pastTimeShtamp.current + sumTypeSpeed
            );
            setSpeed(
              curentletter !== 0 && sumTypeSpeed !== 0
                ? Math.floor(60 / (sumTypeSpeed / curentletter / 1000))
                : 0
            );
          }

          setCurentletter(curentletter + 1);
          pastTimeShtamp.current = event.timeStamp;
          setError(false);

          if (curentletter === text.length - 1) {
            dispatch(actionCreators.setResults({ speed, accuracy }));
            dispatch(actionCreators.toFinish());
          }
        }

        if (
          event.code !== "CapsLock" &&
          event.code !== "ShiftLeft" &&
          event.code !== "ShiftRight"
        ) {
          allKeyDown.current++;

          if (curentletter !== 0) {
            setAccuracy(
              Math.floor((curentletter / (allKeyDown.current - 1)) * 100)
            );
          }
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  });

  const clearParams = () => {
    setCurentletter(0);
    setSpeed(0);
    setSumTypeSpeed(0);
    setAccuracy(100);
    setError(false);
    pastTimeShtamp.current = 0;
    allKeyDown.current = 0;
  };

  return (
    <GameWindow
      isLoading={isLoading}
      text={text}
      curentletter={curentletter}
      error={error}
      speed={speed}
      accuracy={accuracy}
      clearParams={clearParams}
    />
  );
};

export default GamePlay;
