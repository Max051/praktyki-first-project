const InitalState = {
  postCollection: [],
  postToShow: {}
};

const posts = (state = InitalState, action) => {
  switch (action.type) {
    case "ADD POST":
      const d = new Date();
      return {
        postCollection: [
          ...state.postCollection,
          {
            title: action.data.title,
            content: action.data.content,
            timestamp: d.toDateString,
            id: action.data.id
          }
        ],
        postToShow: state.postToShow
      };

    case "REMOVE POST":
      const newPostCollection = state.postCollection.filter(el => {
        console.log(action.idToRemove);
        console.log(el.id);
        return el.id !== action.idToRemove;
      });

      console.log(action.idToRemove);
      //    console.log(newpostCollection[0].id)
      return {
        postCollection: newPostCollection,
        postToShow: state.postToShow
      };
    case "SHOW_POST":
      const post = state.postCollection.filter(item => {
        return item.id == action.payload;
      })[0];
      return {
        postCollection: state.postCollection,
        postToShow: post
      };
    default:
      return state;
  }
};
export default posts;
