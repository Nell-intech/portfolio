import './index.css';
import { Routes, Route} from 'react-router-dom'
// import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// Pages folder
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Resume from './Pages/Resume';



function App() {

  return (
    <>
    
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/projects/:symbol" element={<Project stocks={stocksData} />} /> */}
          {/* stocks:symbol holds 1 project from projects */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
    </>
  );
}

export default App;
