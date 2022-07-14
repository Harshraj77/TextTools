import Navbar from "./components/Navbar";
import "./App.css";
import TextForm from "./components/TextForm";
import { useState } from "react";
import About from "./components/About";
import Alert from './components/Alert'
import {
  Routes,
  Route
} from "react-router-dom";


function App() {
  //dark mode logics
    const[mode, setmode] =useState('light');//whether dark mode enabled or not
    const toggleMode = ()=> {
      if(mode==='light'){
        setmode('dark');
        document.body.style.backgroundColor ='grey';
        showAlert("Dark mode has been enabled", "success");
      }
      else{
        setmode('light');
        document.body.style.backgroundColor ='white';
        showAlert("Light mode has been enabled","success");
      }
    }
    
    //for alerts
    const[alert,setAlert] =useState(null); //alert is a object
    
    //showing alerts
    const showAlert = (message,type) =>{
      setAlert({
        msg: message,
        type: type //can use the same names or different
      })
      setTimeout(()=>{
        setAlert(null);
      },1500)
    }

  return (
    <div className="App">
      {/* giving props to navbar  */}
      <Navbar title="TextTools" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="my-3">
     
      {/* <About/>  */}
      <Routes>
        <Route exact path='/' element={ <TextForm heading="Enter the Text below to analyize" mode={mode} showAlert={showAlert}/> }>
        </Route>
        <Route exact path='/about' element={<About mode={mode}/>}></Route>
      </Routes>
      </div>
    </div> 
  );
}

export default App;
