import React from 'react'
import './Benefits.css'
import flexibility from '../../assets/asset 7.svg'
import ownership from '../../assets/asset 8.svg'
import growth from '../../assets/asset 9.svg'
import heard from '../../assets/asset 9.svg'
import spirit from '../../assets/asset 10.svg'
import work from '../../assets/asset 11.svg'
import transparent from '../../assets/asset 12.svg'
import passion from '../../assets/asset 13.svg'
 
const Benefits = () => {
  return (
    <div className='benefits'> 
        <h4>Benefits</h4>
        <h2>Life At MetaLogic</h2>
        <div className="benefits-cards">
            <div className="benefits-card">
                <div className="benefits-logo">
                    <img src={flexibility} alt="" />
                </div>
                <h3>Flexibility at work</h3>
                <p>Do your best work at a time and place that fits us and your work-life balance.</p>             
            </div>
            <div className="benefits-card">
                <div className="benefits-logo">
                    <img src={ownership} alt="" />
                </div>
                <h3>Take Ownership</h3>
                <p>Take responsibility to solve customer challenges by acting as your own boss.</p>             
            </div>
            <div className="benefits-card">
                <div className="benefits-logo">
                    <img src={growth} alt="" />
                </div>
                <h3>Unlimited Growth</h3>
                <p>With no inner circle… absolutely everyone has the same opportunity to thrive.</p>             
            </div>
            <div className="benefits-card">
                <div className="benefits-logo">
                    <img src={heard} alt="" />
                </div>
                <h3>Make Yourself Heard</h3>
                <p>We encourage diverse perspectives - making it count in achieving our collective goals.</p>             
            </div>
            <div className="benefits-card">
                <div className="benefits-logo">
                    <img src={spirit} alt="" />
                </div>
                <h3>Team Spirit</h3>
                <p>Come together, work as one – this is at the heart of how we work, achieve results and collaborate.</p>             
            </div>
            <div className="benefits-card">
                <div className="benefits-logo">
                    <img src={work} alt="" />
                </div>
                <h3>Inclusivity at Work</h3>
                <p>We believe that everyone is entitled to equal opportunities to learn, lead, and grow in all directions</p>             
            </div>
            <div className="benefits-card">
                <div className="benefits-logo">
                    <img src={transparent} alt="" />
                </div>
                <h3>Transparent Environment</h3>
                <p>Build confidence in a culture of trust and open communication - with each other and our clients.</p>             
            </div>
            <div className="benefits-card">
                <div className="benefits-logo">
                    <img src={passion} alt="" />
                </div>
                <h3>Fuel Your Passion</h3>
                <p>We encourage you to strive, push the limits and achieve your dreams by being best you can be.</p>             
            </div>
        </div>
    </div>
  )
}

export default Benefits
