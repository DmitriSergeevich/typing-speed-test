import actionCreators from "../store/actionCreators/actionCreators";

export const fetchRuText = (size) => {
  return (dispatch) => {
    fetch(`https://fish-text.ru/get?format=html&number=${size}`)
      .then((resp) => resp.text())
      .then((text) => {
        const regExp = /(<p>)|(<\/p>)/;
        dispatch(
          actionCreators.setText(text.replace(regExp, "").replace(regExp, ""))
        );
      });
  };
};
export const fetchEngText = (size) => {
  return (dispatch) => {
    fetch(`https://baconipsum.com/api/?type=meat-and-filler&paras=${size}&format=text`)
      .then((resp) => resp.text())
      .then((text) => {
        dispatch(actionCreators.setText(text));
      });
  };
};
