const clicks = (state = { value: 0 }, action) => {
  switch (action.type) {
    case 'SET_CLICKS':
      return { ...state, value: action.value };

    default:
      return state;
  }
};

export default clicks;
