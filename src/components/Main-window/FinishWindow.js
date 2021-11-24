import { useDispatch, useSelector } from "react-redux";

const FinishWindow = () => {
  const {speed, accuracy} = useSelector(state => state.gameReducer)
  const dispatch = useDispatch()
  return (
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
              <div className="fs-24"><span className="fs-32 bold-text">{ speed }</span> зн/мин</div>
            </div>
            <div>
              <div className="fs-16">Точность:</div>
              <div className="fs-32 bold-text"><span>{ accuracy }</span>%</div>
            </div>
          </div>
          <button id='finish' type="button" className="btn btn-primary window-main-btn btn-fat mgt-20" onClick={()=>dispatch({type: 'TO_MENU'})}>В меню</button>
        </div>
      </div>
      </div>
    </div>

  )
}

export default FinishWindow;