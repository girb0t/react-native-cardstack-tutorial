export default (state = null, action) => {
  debugger
  switch (action.type) {
    case 'SELECT_LIBRARY':
      return action.payload;
    default:
      return state;
  }
};
