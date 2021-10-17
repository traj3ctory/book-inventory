const Reducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_BOOKS":
      return {
        ...state,
        books: action.payload,
      };
    case "SET_CHARACTER":
      return {
        ...state,
        character: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SEARCH_BOOKS":
      return {
        ...state,
        bookFound: action.payload,
      };
    case "SEARCH_CHARACTERS":
      return {
        ...state,
        characterFound: action.payload,
      };
    case "EMPTY":
      return {
        ...state,
        message: action.payload,
      };
    case "SEARCH_PARAMS":
      return {
        ...state,
        searchParams: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
