import { useDispatch, useSelector } from "react-redux";
import actionCreators from "../../store/actionCreators/actionCreators";
import MainWindow from "../MainWindow/MainWindow";

const MainWindowControl = () => {
  const dispatch = useDispatch();
  const { lang, textSize } = useSelector((state) => state.mainReducer);

  const setTextSize = (e) => {
    const id = e.target.id;

    switch (id) {
      case "s-size":
        dispatch(actionCreators.setTextSize(id));
        break;
      case "m-size":
        dispatch(actionCreators.setTextSize(id));
        break;
      case "l-size":
        dispatch(actionCreators.setTextSize(id));
        break;
      default:
        dispatch(actionCreators.setTextSize("m-size"));
    }
  };

  const setLang = (e) => {
    const id = e.target.id;

    switch (id) {
      case "ru-lang":
        dispatch(actionCreators.setLang(id));
        break;
      case "eng-lang":
        dispatch(actionCreators.setLang(id));
        break;

      default:
        dispatch(actionCreators.setLang("ru-lang"));
    }
  };

  const sizeButtonsParam = [
    {
      lable: "Small",
      id: "s-size",
      name: "set-size",
    },
    {
      lable: "Medium",
      id: "m-size",
      name: "set-size",
    },
    {
      lable: "Large",
      id: "l-size",
      name: "set-size",
    },
  ];

  const langButtonsParam = [
    {
      lable: "Русский язык",
      id: "ru-lang",
      name: "set-lang",
    },
    {
      lable: "Английский язык",
      id: "eng-lang",
      name: "set-lang",
    },
  ];

  return (
    <MainWindow
      sizeButtonsParam={sizeButtonsParam}
      langButtonsParam={langButtonsParam}
      setTextSize={setTextSize}
      setLang={setLang}
      textSize={textSize}
      lang={lang}
    />
  );
};

export default MainWindowControl;
