
import React,{useState} from 'react'

export default function TextForm(props) {
    const HandleUpClick = ()=>{
        
        let newText=text.toUpperCase();
         
        
        setText(newText)
    }
    const HandleLoClick = ()=>{
        
        let newText=text.toLowerCase();
         
        
        setText(newText)
    }
    const HandleCopy = ()=>{
        
        let text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const RemoveExtraSpace = ()=>{
        
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "))
    }
    const HandleOnChange = (event)=>{
        
        setText(event.target.value)
    }
    const [text,setText]=useState("Enter you text here")
  return (
    <div>
        <h3>{props.heading}</h3>
      
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={HandleOnChange} id="mybox" rows="8"></textarea>
        </div>
   
        <div className="container">

            <button className="btn btn-primary mx-1" onClick={HandleUpClick}>convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={HandleLoClick}>convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={HandleCopy}>copy text</button>
            <button className="btn btn-primary mx-1" onClick={RemoveExtraSpace}>Remove Extra Space</button>
        </div>

    </div>
  )
}
