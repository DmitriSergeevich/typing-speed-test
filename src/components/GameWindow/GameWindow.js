import { useDispatch } from "react-redux";
import actionCreators from "../store/actionCreators/actionCreators";
import { Spinner } from "../Spinner/Spinner";

const GameWindow = (props) => {
  const { isLoading, text, curentletter, error, speed, accuracy, clearParams } =
    props;
  const dispatch = useDispatch();

  return (
    <div className="window-gameplay row-dir ">
      <div className="container fit-content bgc-light window-main-column">
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="mainTxt">
            {text.split("").map((e, k) => {
              return (
                <span
                  key={k}
                  className={`wblack ${k === curentletter ? "wblue" : null} ${
                    error && k === curentletter ? "wred" : null
                  }`}
                >
                  {e}
                </span>
              );
            })}
          </div>
        )}
      </div>
      <div className="control-columns">
        <div className="control-params bgc-light window-main-column">
          <div className="">
            <div className="fs-16">Скорость:</div>
            <div className="fs-24">
              <span className="fs-32 bold-text">{speed}</span> зн/мин
            </div>
          </div>
          <div className="mgt-30">
            <div className="fs-16">Точность:</div>
            <div className="fs-32 bold-text">
              <span>{accuracy}</span> %
            </div>
          </div>
        </div>
        <button
          id="replay"
          type="button"
          className="btn btn-primary window-main-btn btn-fat mgt-20"
          onClick={clearParams}
          onFocus={(e) => document.activeElement.blur()}
        >
          Заново
        </button>
        <button
          id="close"
          type="button"
          className="btn btn-outline-primary window-main-btn btn-fat mgt-20"
          onClick={() => {
            dispatch(actionCreators.toMenu());
            dispatch(actionCreators.setText(""));
            dispatch(actionCreators.setLoading(true));
            clearParams();
          }}
        >
          Завершить
        </button>
      </div>
    </div>
  );
};

export default GameWindow;
