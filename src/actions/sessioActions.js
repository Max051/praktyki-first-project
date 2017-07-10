export const Login = response => {
  console.log(response);
  return {
    type: "LOGIN",
    data: {
      email: response.email,
      token: response.auth_token,
      user_id: response.user_id
    }
  };
};
export const Logout = () => {
  return {
    type: "Logout"
  };
};
