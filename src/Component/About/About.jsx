import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_image from '../../assets/about_profile.svg'
const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_image} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>We are a well established construction company with over 20 years experience.
                         Specialising in the public and private sector,
                          We strive to form close working relationships 
                          with clients and industry professionals to
                           provide a full service that reflects 
                           attention to detail and quality, 
                           put simply we build solutions together.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Officia repellat ab, quam tempore sint 
                         nihil id pariatur iure vel impedit!
                          Et velit est, tempore voluptate laborum 
                          earum esse consequatur maxime!</p>
                </div>
                

            </div>
        </div>
        <div className="about-achievements">
                    <div className="about-achievement">
                        <h1>10+</h1>
                        <p>YEARS OF EXPERIENCE</p>
                    </div>
                    <hr />
                    <div className="about-achievement">
                        <h1>90+</h1>
                        <p>PROJECTS COMPLETED</p>
                    </div>
                    <hr />
                    <div className="about-achievement">
                        <h1>80+</h1>
                        <p>HAPPY CLIENTS</p>
                    </div>
                </div>

      
    </div>
  )
}

export default About
