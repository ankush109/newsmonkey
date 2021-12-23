import './App.css';

import React, {useState} from 'react'
import NavBar from './components/NavBar';
import News from './components/News';


 
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
   Routes,
  Route
} from "react-router-dom";

const App=()=> {

  const[progress,setprogress] =useState(0)


    return (
      <div>
        <BrowserRouter>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
       
      />
        <Routes>
          
          <Route exact path="/" element={<News setprogress={setprogress} key='general' pageSize={5} country="in" category="general"/>} />

          <Route exact path="/business" element={<News setprogress={setprogress} key='business' pageSize={5} country="in" category="business"/>} />
          <Route exact path="/entertainment" element={<News setprogress={setprogress} key='entertainment' pageSize={5} country="in" category="entertainment"/>} />
          <Route exact path="/health" element={<News setprogress={setprogress} key='health' pageSize={5} country="in" category="health"/>} />
          <Route exact path="/science" element={<News setprogress={setprogress} key='science' pageSize={5} country="in" category="science"/>} />
          <Route exact path="/sports" element={<News setprogress={setprogress} key='sports'pageSize={5} country="in" category="sports"/>} />
          <Route exact path="/technology" element={<News setprogress={setprogress} key ='technology' pageSize={5} country="in" category="technology"/>} />
        
        </Routes>
 
        </BrowserRouter>,
      </div>
    )
  
}
export default App;
