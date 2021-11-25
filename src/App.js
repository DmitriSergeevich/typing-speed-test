import { useSelector } from "react-redux";
import "./App.css";
import FinishWindow from "./components/FinishWindow/FinishWindow";
import GamePlay from "./components/GamePlay/GamePlay";
import MainWindow from "./components/Main-window/MainWindow";

const App = () => {
  const { isGame, isFinish } = useSelector((state) => state.mainReducer);

  return (
    <>
      {isFinish ? <FinishWindow /> : null}
      <div className="wrap container">
        {isGame ? <GamePlay /> : <MainWindow />}
      </div>
    </>
  );
};

export default App;
