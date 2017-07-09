const session = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        email: action.data.email,
        token: action.data.token
      };
    case "Logout":
      return { email: null, token: null };
    default:
      return state;
  }
};
export default session;
