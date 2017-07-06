const session = (state = {} , action) => {
  switch (action.type) {
    case 'Login':
      return {
        login: action.data.login,
        password: action.data.password
      }
    case 'Logout':
      return {}
    default:
      return state
  }
}
export default session
