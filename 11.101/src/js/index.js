var React = require("react");
var ReactDOM = require("react-dom");

import ComponentHeader from "./components/header";
import BodyIndex from "./components/bodyIndex";
import Footer from "./components/foot";
 class ComponentIndex extends React.Component{
     render(){
         return (
             //return 返回只能有一个html节点

             <div>
                 <ComponentHeader/>
                 <BodyIndex username={"nick"}/>
                 <Footer/>
             </div>

         )
     }
 }

 ReactDOM.render(<ComponentIndex/>,document.getElementById("example"));
