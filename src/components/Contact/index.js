import  './index.css';
import Header from '../Header';
const Contact=()=>(
 <>
  <Header/>
  {/* <h2>Contact <span className='span'> Me!</span></h2> */}
  <h3 className='contact-heading'>Contact <span className='span'>Me!</span></h3>

  <form>
  <div className='input-box'>
  <input type='text' placeholder='Full Name' className='input-text'/>
  <input type='email' placeholder='Email Address' className='input-text'/>
    </div>
    <div className='input-box'>
        <input type='text' placeholder='Mobile Number' className='input-text'/>
        <input type='email' placeholder='Email Subject' className='input-text'/>
    </div>
    <textarea cols='30' rows='10' placeholder='Your Message' className='textarea'></textarea>
    < input type='submit' value='Send Message' className='contact-button'/>
   </form>
 </>
)


export default Contact 