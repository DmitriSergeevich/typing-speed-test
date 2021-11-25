const actionCreators = {
  toGame: ()=>({type : 'TO_GAME'}),
  toMenu: ()=>({type : 'TO_MENU'}),
  toFinish: ()=>({type : 'TO_FINISH'}),
  setLang: (lang)=>({type: 'SET_LANG', payload: lang}),
  setTextSize: (size)=>({type: 'SET_TEXT_SIZE', payload: size}),
  setResults: ({speed, accuracy})=>({type: 'SET_RESULTS', payload: {speed, accuracy}}),
  setText: (text)=>({type: 'SET_TEXT', payload: text}),
  setLoading: (loading)=>({type: 'SET_LOADING', payload: loading}),
}
export default actionCreators;