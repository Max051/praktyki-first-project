import React, { Component } from 'react';
class Button extends Component{
    render(){
        return(
            <button id={this.props.id} onClick={this.props.onClick} style={{
                display:"block",
                 border:"1px black solid",
                 backgroundColor: this.props.color,
                 color:"white",
                 borderRadius: "10px",
                 padding:"10px"
                 }}>{this.props.label}</button>
        )
    }
}
export default Button