import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const GameWindow = () => {
  const dispatch = useDispatch()
  const [text, setText] = useState('')
  const [curentletter, setCurentletter] = useState(0)
  //const [typeSpeed, setTypeSpeed] = useState(0)
  const [sumTypeSpeed, setSumTypeSpeed] = useState(0)
  const [accuracy, setAccuracy] = useState(100)
  const [isFinish, setIsFinish] = useState(false)
  
  const pastTimeShtamp = useRef(0)
  const allKeyDown = useRef(0)
  
  useEffect(()=>{
    fetch('https://baconipsum.com/api/?type=meat-and-filler&paras=1&format=text')
    .then(resp => resp.text())
    .then(text => {
      setText(text)
    })
    //setText('text')
   
  },[])

  useEffect(() => {  
    const onKeyDown = (event) => {
      
      if (!event.repeat) {

        if (event.key === text[curentletter]) {
          
          if (pastTimeShtamp.current !== 0) {
            setSumTypeSpeed(
              event.timeStamp - pastTimeShtamp.current + sumTypeSpeed
            );
          }

          setCurentletter(curentletter + 1);
          pastTimeShtamp.current = event.timeStamp;
        }

        if (event.code !== 'CapsLock' && event.code !== 'ShiftLeft' && event.code !== 'ShiftRight') {
          allKeyDown.current++

          if(curentletter !== 0) { 
            setAccuracy(Math.floor(( curentletter / allKeyDown.current) * 100))
          }
        }
        if (curentletter === text.length - 1) {
          setIsFinish(true)
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  });

  return (
    <div className="window-gameplay row-dir ">
      
      <div className="container fit-content bgc-light window-main-column">
        <div className="mainTxt">
          {text.split('').map(( e, k ) => {
            return ( k === curentletter ? <span key={k} className="wgreen">{e}</span> : <span key={k} className="wblack">{e}</span> )
          })}
          
        </div>
      </div>
      <div className="control-columns">
        <div className="control-params bgc-light window-main-column">
          <div className="">
            <div className="fs-16">Скорость:</div>
            <div className="fs-24"><span className="fs-32 bold-text">{ curentletter !== 0 && sumTypeSpeed !== 0 ? Math.floor(60 / (sumTypeSpeed / curentletter / 1000)) : 0}</span> зн/мин</div>
          </div>
          <div className="mgt-30">
            <div className="fs-16">Точность:</div>
            <div className="fs-32 bold-text"><span>{accuracy}</span> %</div>
          </div>
        </div>
        <button id='replay' type="button" className="btn btn-primary window-main-btn btn-fat mgt-20">Заново</button>
        <button id='close' type="button" className="btn btn-outline-primary window-main-btn btn-fat mgt-20"
        onClick={()=>dispatch({type: 'TO_MENU'})}>Завершить</button>        
      </div>
    </div>  
  )
}

export default GameWindow;