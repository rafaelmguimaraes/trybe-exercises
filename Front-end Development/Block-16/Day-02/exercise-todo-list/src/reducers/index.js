const INITIAL_STATE = {
  tasklist: [],
  searchText: '',
  logActions: [],
};

function listReducer(state = INITIAL_STATE, action) {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'ADD_ELEMENT':
      newState.logActions.push({tasklist: [...state.tasklist], searchText: state.searchText});
      newState.tasklist.push(action.value);
      return newState;      
    case 'UPDATE_ELEMENT':
      newState.logActions.push({tasklist: [...state.tasklist], searchText: state.searchText});
      newState.tasklist[state.tasklist.findIndex(task => task.text === action.value.text)].done = action.value.done;
      return newState;
    case 'FILTER_ELEMENT':
      newState.logActions.push({tasklist: state.tasklist, searchText: state.searchText});  
      newState.searchText = action.value;
      return newState;
    case 'UNDO_ACTION':
      if (state.logActions.length > 0) {
        const { tasklist, searchText } = newState.logActions.pop();
        newState.tasklist = [...tasklist];
        newState.searchText = searchText
        return newState;
      } else {
        return state;
      }
    default:
      return state;
  }
}

export default listReducer;