import React from 'react'
import './MetalogicCares.css'
import performance from '../../assets/asset 14.svg'
import health from '../../assets/asset 15.svg'
import paidleave from '../../assets/asset 16.svg'
import learning from '../../assets/asset 17.svg'
import food from '../../assets/asset 18.svg'
import team from '../../assets/asset 19.svg' 

const MetalogicCares = () => {
  return (
    <div className='meta-care'>
        <div className="meta-care-text">
            <h2>Metalogic Cares For You</h2>
            <p>We're less about valuing perks and more about valuing people. Our employee benefits are built around enhancing your wellbeing - at work and at home</p>
        </div>
        <div className="meta-care-cards"> 
            <div className="meta-card">
                <div className="meta-logo">
                    <img src={performance} alt="" />
                </div>
                <h3>Performance Bonus</h3>
            </div>
            <div className="meta-card">
                <div className="meta-logo">
                    <img src={health} alt="" />
                </div>
                <h3>Health Benefits</h3>
            </div>
            <div className="meta-card">
                <div className="meta-logo">
                    <img src={paidleave} alt="" />
                </div>
                <h3>Paid Leave Policy</h3>
            </div>
            <div className="meta-card">
                <div className="meta-logo">
                    <img src={learning} alt="" />
                </div>
                <h3>Learning And Development</h3>
            </div>
            <div className="meta-card">
                <div className="meta-logo">
                    <img src={food} alt="" />
                </div>
                <h3>Food Credit</h3>
            </div>
            <div className="meta-card">
                <div className="meta-logo">
                    <img src={team} alt="" />
                </div>
                <h3>Team Activities</h3>
            </div>
        </div>
    </div>
  )
}

export default MetalogicCares
