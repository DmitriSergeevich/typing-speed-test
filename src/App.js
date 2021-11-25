import { useSelector } from "react-redux";
import "./App.css";
import { ErrorBoundry } from "./components/ErrorBoundry/ErrorBoundry";
import FinishWindow from "./components/FinishWindow/FinishWindow";
import GamePlay from "./components/GamePlay/GamePlay";
import MainWindow from "./components/Main-window/MainWindow";

const App = () => {
  const { isGame, isFinish } = useSelector((state) => state.mainReducer);

  return (
    <ErrorBoundry>
      {isFinish ? <FinishWindow /> : null}
      <div className="wrap container">
        {isGame ? <GamePlay /> : <MainWindow />}
      </div>
    </ErrorBoundry>
      
    
  );
};

export default App;
