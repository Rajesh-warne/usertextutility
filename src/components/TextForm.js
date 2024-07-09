
import React,{useState} from 'react'

export default function TextForm(props) {
    const HandleUpClick = ()=>{
        
        let newText=text.toUpperCase();
         
        
        setText(newText)
        props.showAlert("Converted to Upper Case!","success")
    }
    const HandleLoClick = ()=>{
        
        let newText=text.toLowerCase();
         
        
        setText(newText)
        props.showAlert("Converted to Lower Case!","success")
    }
    const HandleCopy = ()=>{
        
        let text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clip board!","success")
    }
    const RemoveExtraSpace = ()=>{
        
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlert("Extra spaces are removed!","success")
    }
    const HandleOnChange = (event)=>{
        
        setText(event.target.value)
    }
    const HandleOnClick = ()=>{
        
        
    }
    const [text,setText]=useState("Enter you text here")
  return (
    <div style={{color:props.mode==='light'? 'black' :  'white'}}>
        <h3>{props.heading}</h3>
      
        <div className="mb-3">
            <textarea className="form-control" onClick={HandleOnClick} value={text} onChange={HandleOnChange} style={{background:props.mode==='light'? 'white' :  '#233044',color:props.mode==='light'? 'black' :  'white'}} id="mybox" rows="8"></textarea>
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
