const session = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        email: action.data.login,
        token: action.data.token
      };
    case "Logout":
      return { email: null, token: null };
    default:
      return state;
  }
};
export default session;
