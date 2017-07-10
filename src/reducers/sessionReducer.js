const session = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        email: action.data.email,
        token: action.data.token,
        user_id: action.data.user_id
      };
    case "Logout":
      return { email: null, token: null };
    default:
      return state;
  }
};
export default session;
