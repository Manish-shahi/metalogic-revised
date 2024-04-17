import React from 'react' 
import './Subscribe.css'
import msg from '../../assets/asset 30.svg'

const Subscribe = () => {
  return (
    <div className='subscribe'>
        <h2>Subscribe to our News Letters</h2>
        <p>Stay informed, inspired, and equipped with the latest trends and breakthroughs in your field.</p>
        <div className="search-subscribe">
            <input type="text" placeholder='Please Enter Your Email'/>
            <button>
                <img src={msg} alt="" />
                <h3>Subscribe</h3>
            </button>
        </div>
    </div>
  )
}

export default Subscribe
