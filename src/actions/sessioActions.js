export const Login = response => {
  console.log(response);
  return {
    type: "LOGIN",
    data: {
      email: response.data.data.email,
      token: response.data.data.auth_token
    }
  };
};
export const Logout = () => {
  return {
    type: "Logout"
  };
};
