import React from "react";
export default class BodyIndex extends React.Component{
    render(){
        var username = "lelina";
        var boolInput = false;
        return(
            <div>
                <h3>{username == "" ? "用户还没有登录" : "用户名" + username}</h3>
                <p><input type="button" value="默认按钮" disabled={boolInput}/></p>
               {/**/}
            </div>
        )
    }
}
