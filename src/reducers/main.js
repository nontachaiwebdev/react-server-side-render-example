const initialState = {
  text: 'initial Text Render'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TEXT':
      return {
        ...state,
        text: 'Test Text'
      }
    default:
      return state
  }
}