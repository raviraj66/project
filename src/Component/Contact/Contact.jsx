import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
// const Contact = () => {
//     const [result ,setResult]=React.useState("")
//     const onSubmit = async (event) => {
//         event.preventDefault();
//         setResult("Sending....");
//         const formData = new FormData(event.target);
    
//         formData.append("access_key", "970429d1-320a-4307-b38f-b73916517a00");
    
//         const response = await fetch("https://api.web3forms.com/submit", {
//           method: "POST",
//           body: formData
//         });
    
//         const data = await response.json();
    
//         if (data.success) {
//           setResult("Form Submitted Successfully");
//           event.target.reset();
//         } else {
//           console.log("Error", data);
//           setResult(data.message);
//         }
//     };
      

export default function Contact() {
    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "970429d1-320a-4307-b38f-b73916517a00");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1> Let's talk</h1>
                <p> We've found that we deliver the greatest value to our clients when we establish ongoing relationships that allow us to materially 
                    contribute to their long-term success.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" />
                        <p>kamlaenterprise@mail.com</p>
                    </div>
                    <div className="contact-detail">
                       <img src={call_icon} alt="" /> 
                       <p>+91 7002556607</p>
                    </div>
                    <div className="contact-detail">
                       <img src={location_icon} alt="" /> 
                       <p>Saguna-More , Danapur, Patna,IN</p>
                    </div>
                </div>
            </div>
            <form  onSubmit={onSubmit} className='contact-right'>
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name'name ='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email'name='email' />
            <label htmlFor="">Write your message here</label>
            <textarea name="message"  rows="8" placeholder='Enter your message '></textarea>
            <button type='submit' className='contact-submit'>Submit now</button>
        </form>

        </div>
        
      
    </div>
  )
}

// export default Contact
// 970429d1-320a-4307-b38f-b73916517a00
