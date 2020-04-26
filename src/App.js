import React, { Component, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from  './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';
import Terminal  from './components/TerminalComp';
import {render} from "react-dom";
const App = () =>  {
 
  const [showWebsite, setShowWebsite] = useState(false);
  let returnValue;
  if(showWebsite != true){
    returnValue = (<Terminal setState={() => setShowWebsite(true)}/>)
  } else {
    returnValue = (<div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <Testimonials resumeData={resumeData}/>
        <ContactUs resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>)
  }
    return returnValue;
  }


export default App;