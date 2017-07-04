import React, { Component } from 'react';
import Button from '../user-interface/Button'

export default class Post extends Component{
  render(){
    return(
      <div  style={{display:"flex",justifyContent:"space-around"}}>
        <h2>{this.props.post.title}</h2>
        <p>{this.props.post.content}</p>
        <span>{this.props.post.timestamp}</span>
        <Button color={"red"} id={this.props.post.id} onClick={this.props.removePost} label={"x"}/>
      </div>
    )
  }
}
