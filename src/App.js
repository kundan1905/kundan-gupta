import './App.css';
import React, { useState ,useEffect} from 'react';
import Main from './compoent/Main';
import Maincontain from './compoent/maincontain';

function App() {
  
  useEffect(()=>{
   
    window.addEventListener('scroll',handlescroll);
    return() =>{ window.removeEventListener('scroll',handlescroll);
  }
  });
  const handlescroll =()=>{
    const header=document.querySelector('.header-1');
     const scrolltop=window.scrollY;
     scrolltop>=100 ? header.classList.add('sticky') : header.classList.remove('sticky');
      
    };

  return (
<>
  <header className="header-1">
    <div className="header_contain" >
      
        <div className="logo">KUNDAN GUPTA </div>
      </div>
      <div className="header_main">
        <a href="/">PROFIL</a>
        <a href="/">RESUME</a>
        <a href="/">EXPERIENCE</a>
        <a></a>
      </div>
</header>
 <div className="main">
 <Main/>
 <Maincontain />
 
 
 </div>
 
 </>


  );
}

export default App ;
 
