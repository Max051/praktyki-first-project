import React, { Component } from 'react';
import Post from './Post'
export default class PostList extends Component{
    removePost = () => {
        this.props.removeFromList()
    }
    filterMap(){
        const posts = this.props.posts
        if (this.props.valueToFilter.length > 0) {
            return posts.valueToFilter((el) => el.title.includes(this.props.valueToFilter))
        }

        return posts
    }
     
    
  render(){
    return(
      <ul>{this.filterMap().map((post,i)=> <Post removePost={this.props.removeFromList} key={i} post={post}/>)}</ul>
    )
  }
}