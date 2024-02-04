import React from "react";

 
export default function InputUser(){

    function hii(){
       let color =  document.getElementById('textBox').value;
       document.body.style.backgroundColor = color;
    }
    return(
        <div>
            <input type="text" id="textBox" />
            <button onClick={hii}>Click me!</button>

        </div>
    )
}