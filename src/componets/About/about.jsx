import React from 'react'
import './about.css'
import ME from '../../assets/ck.jpg'
import {GiAchievement} from 'react-icons/gi'

const About = () => {
  
  return (
    <section id='about'>
      <div className='getToKnow'>
        <h5 className='getTO'>Get to know</h5>
        <h2>About Me</h2>
      </div>

  
      <div className='container about_container'>
          <div className="about_content"> 
            <div className="about_cards">
              <article className='about_card'>
                < GiAchievement className='about_icon'/>
                <h5>Experience</h5>
                <small> Fresher </small>
              </article>
            </div>
            <p> 
              A Graduate of Bachelor of Science in Computer Engineering at Mariano Marcos State University. 
              Worked under CCK City Network as a Software Engineer Intern for a Month and as a probationary Software Engineer for 3 months.
              Trained to build an eCommerce website and debug a payroll system.
            </p>
          </div>
      </div>
    </section>
  )
}

export default About