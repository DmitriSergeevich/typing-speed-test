import { useDispatch } from "react-redux";
import actionCreators from "../../store/actionCreators/actionCreators";
import RadioButton from "../RadioButton/RadioButton";

const MainWindow = ({sizeButtonsParam, langButtonsParam, setTextSize, setLang, textSize, lang}) => {
const dispatch = useDispatch();

  return (
    <div className="window-main">
      <div className="man-img"></div>
      <div className="txt-header mgt-30">
        Привет! Хочешь узнать как быстро ты печатаешь?
      </div>

      <div className="row-dir mgt-40">
        <div className="mgr-24 txt-menu">Тогда выбери размер текста:</div>
        {sizeButtonsParam.map((e) => (
          <RadioButton
            id={e.id}
            lable={e.lable}
            callback={setTextSize}
            isDefault={textSize}
            name={e.name}
          />
        ))}
      </div>

      <div className="row-dir mgt-30">
        <div className="mgr-24 txt-menu">Укажи язык:</div>
        {langButtonsParam.map((e) => (
          <RadioButton
            id={e.id}
            lable={e.lable}
            callback={setLang}
            isDefault={lang}
            name={e.name}
          />
        ))}
      </div>
      <div className="mgt-30 txt-menu">И начинай!</div>
      <button
        className="btn btn-primary btn-wide mgt-68 btn-fat"
        type="button"
        id="start-btn"
        onClick={() => dispatch(actionCreators.toGame())}
      >
        Начинаю!
      </button>
    </div>
  );
};

export default MainWindow;