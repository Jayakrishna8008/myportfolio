import Header from '../Header'
import Readmore from '../Readmore';
import './index.css';
import { HiMiniCodeBracket } from "react-icons/hi2";

const Services=()=>(
 <>
 <Header/>
 <h2>My <span className='span'>Services</span></h2>
 <div className='services-container'>
    <div className='services-box'>
        <HiMiniCodeBracket className='web-icon' />
        <h3>Web Development</h3>
        <p>I can build website with HTML,CSS,Bootstrap,Javascript,Reactjs Technologies.As well as I know Python.SQL,NodeJs,ExpressJs,</p>
        <Readmore/>
    </div>
 </div>
 </>
)

export default Services