import React from 'react';
import { RiLinkedinLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterLine } from "react-icons/ri";
// import { GrCode } from "react-icons/gr";
import "./index.css";
import { Link } from 'react-router-dom';
import Header from '../Header';

const Home=()=>(
      <div className='home-container'>
        <div className='personal-information-container'>
         <div className='portfolio'>  
          <p className='portfolio'>Portfolio.</p>
        </div> 

        <h3>Hello, I am</h3>
            <h1>Jayakrishna Pujari</h1>
            <p>I am a frontend web developer, learned skills from NxtWave CCBP 4.0 Technologies.</p>

            <div className='social-media'>
            <Link to="#" className='icon'><RiLinkedinLine /></Link>
            <Link to="#" className='icon'><IoLogoInstagram /></Link>
            <Link to="#" className='icon'><RiTwitterLine /></Link>
            </div>
            <Link to="#" className='button'>Download Resume</Link>
        </div>
        <div className='overplay'>
            {/* <div className='header'>
           <Header />
           </div> */}
 
        </div>
      </div>
)


export default Home