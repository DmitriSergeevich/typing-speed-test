import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEngText, fetchRuText } from "../../actions/asyncActions";


const GameWindow = () => {
  const { text } = useSelector(state => state.gameReducer);
  const { lang, textSize } = useSelector(state => state.mainReducer);

  const dispatch = useDispatch();  
  const [curentletter, setCurentletter] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [sumTypeSpeed, setSumTypeSpeed] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [error, errorSet] = useState(false);

  
  const pastTimeShtamp = useRef(0);
  const allKeyDown = useRef(0);
  
  
  useEffect(()=>{
    dispatch(lang === 'ru-lang' ? fetchRuText(textSize) : fetchEngText(textSize))
  },[])

  useEffect(() => {
    
    const onKeyDown = (event) => {
      
      if (!event.repeat) {

        if (event.key !== text[curentletter] && event.code !== 'CapsLock' && event.code !== 'ShiftLeft' && event.code !== 'ShiftRight') {
          errorSet(true)
        }

        if (event.key === text[curentletter]) {
          
          if (pastTimeShtamp.current !== 0) {
            setSumTypeSpeed(
              event.timeStamp - pastTimeShtamp.current + sumTypeSpeed
            );
            setSpeed(
              curentletter !== 0 && sumTypeSpeed !== 0 ? Math.floor(60 / (sumTypeSpeed / curentletter / 1000)): 0
            )
          }
          
          setCurentletter(curentletter + 1);
          pastTimeShtamp.current = event.timeStamp;
          errorSet(false)

          if (curentletter === text.length - 1) {
            dispatch({type: 'SET_RESULTS', payload: {speed, accuracy}})
            dispatch({type:'TO_FINISH'})
          }
        }

        if (event.code !== 'CapsLock' && event.code !== 'ShiftLeft' && event.code !== 'ShiftRight') {
          allKeyDown.current++

          if(curentletter !== 0) {
            setAccuracy(Math.floor(( curentletter / (allKeyDown.current - 1)) * 100))
          }
          
        }  
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  });

  const clearParams = () => {
    setCurentletter(0)
    setSpeed(0)
    setSumTypeSpeed(0)
    setAccuracy(100)

    pastTimeShtamp.current = 0
    allKeyDown.current = 0
  }

  return (
    <div className="window-gameplay row-dir ">
      
      <div className="container fit-content bgc-light window-main-column">
        <div className="mainTxt">
          {text.split('').map(( e, k ) => {
            return (<span key={k} className={`wblack ${ k === curentletter ? "wgreen" : null} ${ error && k === curentletter ? "wred" : null}`}>{e}</span> )
          })}
          
        </div>
      </div>
      <div className="control-columns">
        <div className="control-params bgc-light window-main-column">
          <div className="">
            <div className="fs-16">Скорость:</div>
            <div className="fs-24"><span className="fs-32 bold-text">{ speed }</span> зн/мин</div>
          </div>
          <div className="mgt-30">
            <div className="fs-16">Точность:</div>
            <div className="fs-32 bold-text"><span>{accuracy}</span> %</div>
          </div>
        </div>
        <button id='replay' type="button" className="btn btn-primary window-main-btn btn-fat mgt-20" onClick={clearParams} 
          onFocus={(e)=> document.activeElement.blur() }
        >Заново</button>
        <button id='close' type="button" className="btn btn-outline-primary window-main-btn btn-fat mgt-20"
        onClick={()=>dispatch({type: 'TO_MENU'})}>Завершить</button>        
      </div>
    </div>  
  )
}

export default GameWindow;