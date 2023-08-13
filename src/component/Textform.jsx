import { useState } from "react";
import React from "react";
import './Textform.css';
export default function Textform(props) {
  const[myStyle,newStyle]=useState
 ( {
    color:"white",
    backgroundColor: "black"
  })
  const [button,newButton]=useState("Enable Lightmode")
 const changeTheme=()=>
 {
  if(myStyle.color=="white")
  {
    newStyle({
      color:"black",
    backgroundColor: "white"
    })
    newButton("Enable Darkmode")
    document.title="textUtil-LIghtMode"
  }
  else
  {
    newStyle({
      color:"white",
      backgroundColor: "black"
    })
    newButton("Enable Lihgtmode")
    document.title="textUtil-DarkMOde"

  }
 }


    const handelupClick=()=>
    {
       
        let newtext=text.toUpperCase();
        setText(newtext)
    }
    const clearText=()=>
    {
      let ctext=""
      setText(ctext)
    }
    const handellowerClick=()=>
    {
let oldtext=text.toLowerCase();
setText(oldtext)
    }
    const handelOnchange=(event)=>
    {
      
        setText(event.target.value)
       
    }
    const [text,setText]=useState("")
  return (
    <>
    <div style={myStyle}>
    <h1>{props.heading}</h1>
      <div className="mb-3" style={myStyle}>
        <label htmlFor="myBox" className="form-label">
          Textarea
        </label>
        <textarea
        style={myStyle}
          className="form-control"
          value={text}
          onChange={handelOnchange}
          id="myBox"
          rows="7"
        ></textarea>
        <button className="btn btn-primary my-3 mx-2" onClick={handelupClick} >Convert to uppercase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handellowerClick} >Convert to lowercase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={clearText} >Clear Text</button>
        <button className="btn btn-primary my-3 mx-2" onClick={changeTheme}>{button}</button>


      </div>
      <div className="contener" style={myStyle}>
      <h2>Text summary</h2>
      <p>There are {text.split(" ").length} Words and {text.length} Letters </p>
      <p>You can read the text  in <span className="time">{0.008*text.split(" ").length}</span> minutes approximatily!</p>
      <h3>Text summary</h3>
      <p>{text}</p>
      </div>
</div>
    </>
  );
}
