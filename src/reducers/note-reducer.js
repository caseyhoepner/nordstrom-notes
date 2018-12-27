const noteReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [...state, {id: action.note.Id, text: action.note.text, tag: action.note.tag}]

    default:
      return state;
  }
}

export default noteReducer;