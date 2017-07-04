import React, { Component } from 'react';
import Button from '../user-interface/Button'

export default class PostForm extends Component{
  constructor(props){
    super(props)

    this.state={
      title:'',
      content:'',
      id:0
    }
  }
  updateName = (e) =>{
      this.setState({
      title: e.target.value
    })
  }
  updateContent = (e) =>{
      this.setState({
      content: e.target.value
    })
  }
  onSubmit = (e) =>{
    e.preventDefault()
    this.props.onSubmit({
      title : this.state.title,
      content: this.state.content,
      id :this.state.id
    })
    this.setState({
        id: this.state.id + 1
    })
  }
  render(){
    return(
      <form style={{
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        width:"80%"
        }}>
        <label style={{
          marginBottom:"10px",
          marginTop:"10px"
          
        }}>Title:</label>
        <input style={{
          marginBottom:"10px"
        }} onChange={this.updateName} type="text" value={this.state.title}/>
        <label style={{
          marginBottom:"10px",
          
        }}>Content:</label>
        <textarea style={{
          marginBottom:"10px"
        }} onChange={this.updateContent} value={this.state.content} cols="30" rows="10"></textarea>
        <Button color={"green"} id={this.state.id} onClick={this.onSubmit} label={"add Post"}/>
      </form >
    )
  }
}