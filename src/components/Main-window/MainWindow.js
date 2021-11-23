import { useDispatch } from "react-redux";

const MainWindow = () => {
  const dispatch = useDispatch()
  return (
    <div className="window-main">
      <div className="man-img"></div>
      <div className="txt-header mgt-30">Привет! Хочешь узнать как быстро ты печатаешь?</div>
      
      <div className="row-dir mgt-40">
        <div className="mgr-24 txt-menu">Тогда выбери размер текста:</div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="text-size" id="s-size"/>
          <label className="form-check-label" htmlFor="s-size">
            Small
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="text-size" id="m-size" defaultChecked/>
          <label className="form-check-label" htmlFor="m-size">
            Medium
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="text-size" id="l-size"/>
          <label className="form-check-label" htmlFor="l-size">
            Large
          </label>
        </div>
      </div>

      <div className="row-dir mgt-30">
        <div className="mgr-24 txt-menu">Укажи язык:</div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="text-lang" id="ru-lang" defaultChecked/>
          <label className="form-check-label" htmlFor="ru-lang">
            Русский язык
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="text-lang" id="eng-lang"/>
          <label className="form-check-label" htmlFor="eng-lang">
            Английский язык
          </label>
        </div>
      </div>
      <div className="mgt-30 txt-menu">И начинай!</div>
      <button className="btn btn-primary btn-wide mgt-68 btn-fat" type="button" id='start-btn'
      onClick={()=>dispatch({type: 'TO_GAME'})}>Начинаю!</button>

    </div>
  )
}

export default MainWindow;