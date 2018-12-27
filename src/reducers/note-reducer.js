const noteReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [...state, {text: action.text, tag: action.tag}]

    default:
      return state;
  }
}

export default noteReducer;