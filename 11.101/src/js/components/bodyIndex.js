import React from "react";
import BodyChild from "./bodyChild";
export default class BodyIndex extends React.Component{
    constructor(){
        super();//调用基内的所有的初始化方法
        //对于模块来说属于自身的属性
        // 自身的state，不影响其他的组件
        this.state = {
            username:"leilina"
        }


    };
    changeUserName(){
        this.setState({username:"yangwenbiao"});
    };
    handleInputChang(event){
        this.setState({username:event.target.value});
    }
    render(){
        setTimeout(()=>{
           this.setState({username:"yangwenbiao"})  //修改state
        },4000);
        return(
            <div>
                <h3>{this.state.username} {this.props.username}</h3>
                <p>{this.state.username}</p>
                <button onClick={this.changeUserName.bind(this)}>提交</button>
                <BodyChild/>
            </div>
        )
    }
}

//props 对于模块来说属于外来的属性 接受别的组件的属性，接受到的外来属性不会影响别的组见的属性
//事件与数据的双向绑定
//当前页面的事件绑定
//定义一个函数
// 这样调用this.changeUserName(定义的函数).bind(this)