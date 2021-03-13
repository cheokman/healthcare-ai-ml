// change dummy intialstate
const initialState = {
  authenticated: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "case_1":
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducer;