import { useSelector } from 'react-redux'
import './App.css'
import GameWindow from './components/Main-window/GameWindow'
import MainWindow from './components/Main-window/MainWindow'

const App = () => {
  const isGame = useSelector(state => state.mainReducer.isGame)
  
  return (
    <>
    <div className="finish-blur">
      <div className="finish-modal">
      <div className="modal-man"></div>
      <div className="dialog">
        <div className="dialog-triangle"></div>
        <div className="dialog-block">
          <p className="fs-24 bold-text">Йоу!</p>
          <p className="fs-24 bold-text">Давай посмотрим твои результаты!</p>
          <div className="row-dir bgc-light window-main-column dialog-results">
            <div>
              <div className="fs-16">Скорость:</div>
              <div className="fs-24"><span className="fs-32 bold-text">100</span> зн/мин</div>
            </div>
            <div>
              <div className="fs-16">Точность:</div>
              <div className="fs-32 bold-text"><span>150</span>%</div>
            </div>
          </div>
          <button id='replay' type="button" className="btn btn-primary window-main-btn btn-fat mgt-20">В меню</button>
        </div>
      </div>

      </div>
      
    </div>
    <div className="wrap container">
      { isGame ? <GameWindow/> : <MainWindow/> }
    </div>
    
    </>
    
  )
}

export default App