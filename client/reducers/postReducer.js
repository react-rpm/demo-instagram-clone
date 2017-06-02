function posts(state = [], action) {
  switch (action.type){
    case 'INCREMENT_LIKES':
      const i = action.index;
    newState[action.index].likes ++;
      return newState;
    default:
      return state;
  };
}

export default posts;
