import React from 'react'
import './Opportunities.css'
import search from '../../assets/asset 26.svg'
import round from '../../assets/asset 27.svg'
 
const Opportunities = () => {
  return (
    <div className='opportunities'>
      <div className="container">
        <h4>Opportunities</h4>
        <h2>Available Vacancies</h2>
        <input className='input-one' type="text" placeholder='Job Title/Keyword' />
        <div className="search">
            <input type="number" placeholder='Label' />
            <div className='search-icon'>
                <img src={search} alt="" />
            </div>
        </div>
        <h5>2 Job Offers</h5>
        <div className="job">
            <div className="job-title">
                <h6>Frontend Intern (MERN Stack)</h6>
                <h6>(219 applicants )</h6>
            </div>
            <p>Full Time Lalitpur, Kathmandu</p>
            <button className='closed-btn'><img src={round} alt="" />Closed</button>
        </div>
        <hr />
        <div className="job">
            <div className="job-title">
                <h6>Marketing Executive</h6>
                <h6>(1 applicants )</h6>
            </div>
            <p>	Full Time Nepal (with potential for international travel)</p>
            <button className='apply-btn'><img src="" alt="" />Apply</button>
        </div>
      </div>
    </div>
  )
}

export default Opportunities
