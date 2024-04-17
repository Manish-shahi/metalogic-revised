import React from 'react' 
import './Values.css'
import book from '../../assets/asset 1.svg'
import team from '../../assets/asset 2.svg'
import innovation from '../../assets/asset 3.svg'
import mentorship from '../../assets/asset 4.svg'
import impact from '../../assets/asset 5.svg'
import adaptability from '../../assets/asset 6.svg'
const Values = () => {
  return (
    <div className='values'>
        <h4>Values</h4>
        <h2>We Believe in</h2>
        <p>We believe in creating an environment where individuals can thrive and make a <br /> meaningful impact.</p>
        <div className="values-cards">
            <div className="values-card">
                <div className="values-logo">
                    <img src={book} alt="" />
                </div>
                <h3>Continuous Learning</h3>
                <p>We invest in our team's growth through ongoing training, mentorship, and opportunities to expand your skill set. We're dedicated to your professional development journey.</p>
            </div>
            <div className="values-card">
                <div className="values-logo">
                    <img src={team} alt="" />
                </div>
                <h3>Team Work</h3>
                <p>We believe that best solutions comes from diverse perspective and collaborative efforts.</p>
            </div>
            <div className="values-card">
                <div className="values-logo">
                    <img src={innovation} alt="" />
                </div>
                <h3>Innovation</h3>
                <p>Whether it's the quality of our work, the impact we make, or the relationships we build, we consistently strive for the highest standards.</p>
            </div>
            <div className="values-card">
                <div className="values-logo">
                    <img src={mentorship} alt="" />
                </div>
                <h3>Mentorship</h3>
                <p>We embrace change, learn from challenges, and remain resilient in the face of obstacles, always seeking opportunities for improvement.</p>
            </div>
            <div className="values-card">
                <div className="values-logo">
                    <img src={impact} alt="" />
                </div>
                <h3>Tangible Impact Impact</h3>
                <p>We're committed to delivering solutions that not only meet but exceed their expectations.</p>
            </div>
            <div className="values-card">
                <div className="values-logo">
                    <img src={adaptability} alt="" />
                </div>
                <h3>Adaptability</h3>
                <p>Thrive in a fast-paced world with resilience as your ally, valuing and cultivating adaptability in your career journey</p>
            </div>
        </div>
    </div>
  )
}

export default Values
