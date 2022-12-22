import React from 'react'
import "./about.css"

const About = () => {
  return (
      <div className='portfolio__cards' id='about'>
          <div className='portfolio__cards-skills'>
            <h1 className='gradient__text section__title'>Skills</h1>  
            <div className='portfolio__cards-skills__content'>
              <div className=''>
                
              </div>
            </div>
          </div>
          <div className='portfolio__cards-about'>
              <h1 className='gradient__text section__title'>About Me</h1>
              <p>
                  My name is Nicolay and I am a frontend developer in training. Currently,
                  I am working as an apprentice in the IT industry.
                  I have developed this website using React as a personal side project, and I am constantly striving to improve my skills and knowledge in the field.
                  Thank you for visiting.
              </p>
              <a href="mailto:nicolay409@gmail.com">Contact Me</a>
          </div>
          <div className='portfolio__cards-education'>
            <h1 className='gradient__text section__title'>Education</h1>        
          </div>
    </div>
  )
}

export default About