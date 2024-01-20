import React from 'react'
import img from "./images/logo.svg"
import img1 from "./images/illustration-mockups.svg"

function Hero() {
  return (
    <div>
         <div className="container">
      <div className="wrapper">
        <div className="header">
          <img src={img} alt="" />
        </div>
        <div className="main">
          <div className="hero-img">
            <img src={img1} alt="" />
          </div>
          <div className="hero-text">
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
              Create connections with your users as you engage in genuine discussion.
            </p>
            <a href="#">Register</a>
          </div>
        </div>
        <div className="social">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
   
    </div>
  )
}

export default Hero