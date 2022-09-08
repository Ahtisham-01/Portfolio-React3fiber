import React from 'react'
import './aboutme.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF ,faTwitter,faLinkedin,faInstagram } from '@fortawesome/free-brands-svg-icons';


export const aboutme = () => {
  return (
    <div>
      <div className="about-wrapper">
        <div className="about-left">
          <div className="about-left-content">
          <div>
            <div className = "shadow">
              <div className = "about-img">
                <img src = "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png" alt = "about image"/>
              </div>
            </div>
            <h2>Ehtisham Kiani</h2>
            <h3>Web developer</h3>
          </div>
    
          <ul className = "icons">
            <li><i className = ""><FontAwesomeIcon icon={faFacebookF} /></i></li>
            <li><i className = ""><FontAwesomeIcon icon={faTwitter} /></i></li>

            <li><i className = "fab fa-linkedin"><FontAwesomeIcon icon={faLinkedin} /></i></li>
            <li><i className = "fab fa-instagram"><FontAwesomeIcon icon={faInstagram} /></i></li>

          </ul>
          </div>
        </div>
        <div className = "about-right">
        <h2>Hello<span>!</span></h2>
        <h2>Here's who I am & what I do</h2>
        <div className = "about-btns">
          <button type = "button" className = "btn btn-pink">resume / CV</button>
          <button type = "button" className = "btn btn-white">Git hub</button>
        </div>
        <div className = "about-para">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, aspernatur possimus ullam quaerat, laboriosam ex voluptate aliquid laborum, obcaecati ratione accusamus! Ea nisi modi dolor nam numquam? Temporibus, molestias amet.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus iure tempora alias laudantium sapiente impedit!</p>
        </div>
      
            </div>
      </div>
    </div>
  )
}
export default aboutme
