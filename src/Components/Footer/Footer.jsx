import React from 'react'
import './Footer.css'
import logo from '../../assets/asset 0.png'
const Footer = () => { 
  return (
    <div className='footer'>
        <div className='footer-top'>
        <div className="metalogic">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="meta-text">
                <h2>MetaLogic</h2>
                <p className='meta-p'>Software Private Limited</p>
                <div className="location">
                    <i class="fa fa-location-dot"></i>
                    <p>Saptakhel, Lalitpur (Head office)</p>
                </div>
                <div className="phone">
                    <i class="fa fa-phone"></i>
                    <p>+ 977 9851353599</p>
                </div>
                <div className="mail">
                    <i class="fa-regular fa-envelope"></i>
                    <p>info@metalogic.com.np</p>
                </div>
            </div>
        </div>

        <div className="company">
            <h4>Company</h4>
            <p>Feedback</p>
            <p>Partnership</p>
            <p>Terms and Conditions</p>
        </div>

        <div className="services">
            <h4>Services</h4>
            <p>Custom Software Development</p>
            <p>Web Development</p>
            <p>Mobile App Development</p>
            <p>Cloud Computing Services</p>
            <p>Quality Assurance and Testing</p>
            <p>UI/UX Designing</p>
            <p>Maintenance and Support</p>
            <p>Dev Ops</p>
            <p>Blockchain Solutions</p>
        </div>

        <div className="join">
            <h4>Join</h4>
            <p>Careers at MetaLogic</p>
            <p>Internships</p>
        </div>

        <div className="social">
            <h4>Join us on Social Medias</h4>
            <div className="social-logos">
                <div className="whatsapp">
                    <i class="fa-brands fa-whatsapp fa-xl"></i>
                </div>
                <div className="facebook">
                <i class="fa-brands fa-facebook-f fa-xl"></i>
                </div>
                <div className="insta">
                    <i class="fa-brands fa-instagram fa-xl"></i>
                </div>
                <div className="linkedin">
                    <i class="fa-brands fa-linkedin-in fa-xl"></i>
                </div>
            </div>
        </div>
        </div>
        <div className="copyright">
            <p>&copy; Copyright 2024 MetaLogic. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
