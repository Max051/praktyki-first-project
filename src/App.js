import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types'

import PostList from './components/PostsList'
import PostForm from './components/PostForm'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      posts:[],
        searchValue:''
    }
    this.addPost = this.addPost.bind(this)
  }
  addPost = post =>{
    const d = new Date().toDateString()
    this.setState({posts: [...this.state.posts,{...post,timestamp:d}]})
  }
  removePostFromPosts = e => {
      this.setState({posts: this.state.posts.filter((el)=> el.id != e.target.id )})
    }
  search = (e)=>{
    this.setState({
      searchValue: e.target.value
    })
  }
  render() {
    return (
      <div className="App">

        <input type="text" onChange={this.search} placeholder="search" style={{float:"left"}}/>
       
        <PostForm onSubmit={this.addPost}/>
        <PostList valueToFilter={this.state.searchValue} posts={this.state.posts} removeFromList={this.removePostFromPosts}/>
      </div>
    );
  }
}

export default App;
