import { useDispatch, useSelector } from "react-redux";

const MainWindow = () => {
  const dispatch = useDispatch();
  const { lang, textSize } = useSelector(state => state.mainReducer)

  const setTextSize = (e) => {
    const id = e.target.id
    
    switch (id) {
      case 's-size' : dispatch({type: 'SET_TEXT_SIZE', payload: 1});
      break;
      case 'm-size' : dispatch({type: 'SET_TEXT_SIZE', payload: 2});
      break;
      case 'l-size' : dispatch({type: 'SET_TEXT_SIZE', payload: 3});
      break;
      default: dispatch({type: 'SET_TEXT_SIZE', payload: 'm-size'});
    }
  }

  const setLang = (e) => {
    const id = e.target.id

    switch (id) {
      case "ru-lang" : dispatch({type: 'SET_LANG', payload: id});
      break;
      case "eng-lang" : dispatch({type: 'SET_LANG', payload: id});
      break;
     
      default: dispatch({type: 'SET_LANG', payload: 'ru-lang'});
    }
  }

  return (
    <div className="window-main">
      <div className="man-img"></div>
      <div className="txt-header mgt-30">Привет! Хочешь узнать как быстро ты печатаешь?</div>
      
      <div className="row-dir mgt-40">
        <div className="mgr-24 txt-menu">Тогда выбери размер текста:</div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="text-size" id="s-size" onClick={setTextSize} defaultChecked={textSize === 1 ? true : false}/>
          <label className="form-check-label" htmlFor="s-size">
            Small
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="text-size" id="m-size" onClick={setTextSize} defaultChecked={textSize === 2 ? true : false}/>
          <label className="form-check-label" htmlFor="m-size">
            Medium
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="text-size" id="l-size" onClick={setTextSize} defaultChecked={textSize === 3 ? true : false}/>
          <label className="form-check-label" htmlFor="l-size">
            Large
          </label>
        </div>
      </div>

      <div className="row-dir mgt-30">
        <div className="mgr-24 txt-menu">Укажи язык:</div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="text-lang" id="ru-lang" onClick={setLang} defaultChecked={lang ==='ru-lang' ? true : false}/>
          <label className="form-check-label" htmlFor="ru-lang">
            Русский язык
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="text-lang" id="eng-lang" onClick={setLang} defaultChecked={lang ==='eng-lang' ? true : false}/>
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