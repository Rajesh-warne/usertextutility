
import React,{useState} from 'react'
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export default function App() {
  
  const[mode,setMode]=useState('light')
  const[alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#233044';
      showAlert("dark mode has enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("light mode has enabled","success")
    }
  }
  
  return (
    <>
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} about="About Us"/>
      <Alerts alert={alert}/>
      <div className='container my-3'>
        <Routes>
          <Route path="/about" element={<About mode={mode}/>} />
          <Route path="/" element={<TextForm showAlert={showAlert} mode={mode} heading="Enter your text here to analyze"/>} />
        </Routes>
      </div>
    </Router>
      {/* <div className="container">
        <About/>
      </div> */}
      

    </>
    
  );
}


