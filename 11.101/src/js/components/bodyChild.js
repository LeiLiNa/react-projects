import React from "react";
export default class BodyChild extends React.Component{
    render(){
        return(
            <div>
                <p>我是bodyIndex的子节点 <input type="text" onChange={this.props.handleInputChang}/></p>
            </div>
        )
    }
}