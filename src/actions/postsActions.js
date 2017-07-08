export const addPostStore = post => {
  return { type: "ADD POST", data: post };
};
export const removeFromStore = postId => {
  return {
    type: "REMOVE POST",
    idToRemove: postId
  };
};
export const showPost = post => {
  return {
    type: "SHOW_POST",
    payload: post
  };
  // this.props.router.push("posts-details");
};
