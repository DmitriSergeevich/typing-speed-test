import { useSelector } from 'react-redux'
import './App.css'
import FinishWindow from './components/Main-window/FinishWindow'
import GameWindow from './components/Main-window/GameWindow'
import MainWindow from './components/Main-window/MainWindow'

const App = () => {
  const {isGame, isFinish} = useSelector(state => state.mainReducer) 
  
  return (
    <>
      { isFinish ? <FinishWindow/> : null }
      <div className="wrap container">
        { isGame ? <GameWindow/> : <MainWindow/> }
      </div>  
    </>  
  )
}

export default App