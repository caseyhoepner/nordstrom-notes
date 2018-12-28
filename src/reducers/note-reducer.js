const noteReducer = (state = [], action) => {
  const stateIds = state.map(note => note.id)
  // console.log(action)
  switch (action.type) {
    case 'ADD_NOTE':
      if (!stateIds.includes(action.note.Id)) {
        return [...state, {
          id: action.note.Id, 
          text: action.note.text, 
          tag: action.note.tag,
          minutes: action.note.minutes,
          date: action.note.date,
          days: action.note.days 
        }]
      } else {
        return state;
      }

    default:
      return state;
  }
}

export default noteReducer;