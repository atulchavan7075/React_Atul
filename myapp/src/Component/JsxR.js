import React from "react";

function JsxR(props){
    // return(
    //     <div>
    //                 <h1>Hii Atul  am from JsxR</h1>
    //     </div>
    
    // )
    return React.createElement('div',{id:1,className:'onediv'},React.createElement('h1',{id:2},"Hi i am h1"))


}

export default JsxR