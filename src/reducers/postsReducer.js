const InitalState = {
  postCollection: []
}

const posts = (state = InitalState , action) => {
  switch (action.type) {
    case 'ADD POST':
      return {
        postCollection: [
          ...state.postCollection,
          {
            title: action.data.title,
            content: action.data.content,
            timestamp: Date(),
            id: action.data.id
          }
        ]
      }

    case 'REMOVE POST':
      const newPostCollection = state.postCollection.filter(el => {
        console.log(action.idToRemove)
        console.log(el.id)
        return el.id !== action.idToRemove
      })

      console.log(action.idToRemove)
      //    console.log(newpostCollection[0].id)
      return {
        postCollection: newPostCollection
      }
    default:
      return state
  }
}
export default posts
