import './index.css';
import Header from '../Header';
import Readmore from '../Readmore';
const About=()=>(
    <>
        <Header />
        <div className='about-container'>
            
            <img src="https://res.cloudinary.com/dpxprzxtl/image/upload/v1725791450/about_m4upld.png" alt="My Photo" className='about-img'/>
                <div className='about-information'>
                <h3 className='about-heading'>About <span className='span'>Me</span></h3>
                <p className='para1'>Hi, I'm Here To Help Your Next Project!</p>
                <p className='para2'>I have done coding challenges for frontend webdevelopment through Nxtwave,practie done on hands on projects. 
                    I am very passinated to do work as a frontend webdevelopment.I am a proficient in HTML,CSS,and Javascript,ReactJS.
                </p>
                <Readmore/>
                </div>
        </div>

    </>
 )

export default About