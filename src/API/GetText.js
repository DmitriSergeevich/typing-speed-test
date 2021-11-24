class GetText {
  async getRuText (size) {
    fetch(`https://fish-text.ru/get?format=html&number=${size}`)
    .then(resp => resp.text())
    .then(text => {
      const regExp = /(<p>)|(<\/p>)/;  
      return text.replace(regExp, '').replace(regExp, '');
    })
  }

  async getEngText (size) {
    fetch(`https://baconipsum.com/api/?type=meat-and-filler&paras=${size}&format=text`)  
    .then(resp => resp.text())
    .then(text => {
      return text;
    })
  }

}

const getText = new GetText();
export default getText;