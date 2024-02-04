import React, {Component} from "react";

export default class PropsC extends Component{
    render(){
        return(
            <h1>Hello i am {this.props.fn} {this.props.ln}</h1>
        )
    }
}
 