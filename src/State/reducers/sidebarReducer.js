const initialState = {
  isOpen: true,
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return { ...state, isOpen: !state.isOpen };
    case "TOGGLE_CLOSESIDEBAR":
      return { ...state, isOpen: false };
    case "TOGGLE_OPENSIDEBAR":
      return { ...state, isOpen: true };
    default:
      return state;
  }
};

export default sidebarReducer;
