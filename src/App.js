
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


export default function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About Us"/>
      <div className='container my-3'>

      <TextForm heading="Enter your text here to analyze"/>

      </div>
      <div className="container">
        
      </div>

      </>
    
  );
}


