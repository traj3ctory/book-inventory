
export const loaderReducer = (state :any, action:any) => {
    switch (action.type) {
      case "ADD_USER":
        return [
          ...state,
          {
            status: action.status,
          },
        ];
    //   case "REMOVE_USER":
    //     return state.filter((detail) => detail.id !== action.id);
    //   case "UPDATE_USER":
    //     state = state.map((user) =>
    //       user.id !== action.detail.id ? user : action.detail
    //     );
  
        return [...state];
  
      default:
        return state;
    }
  };