const initialState = {
  step: 1,
  progress: 0,
};

const tutorialReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_STEP':
      return {
        ...state,
        step: action.payload,
      };
    case 'SET_PROGRESS':
      return {
        ...state,
        progress: action.payload,
      };
    default:
      return state;
  }
};

export default tutorialReducer;
