import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { LiaAwardSolid } from "react-icons/lia";
import { FaUsers } from "react-icons/fa6";
import { FaFolderOpen } from "react-icons/fa6";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>  
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <LiaAwardSolid className="about__icon"/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <FaUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about__card">
              <FaFolderOpen className="about__icon"/>
              <h5>Projects</h5>
              <small>13+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Doloribus asperiores facilis corporis sed aliquid facere 
            quis delectus cumque recusandae eligendi consequuntur itaque 
            repudiandae quos nihil maiores, culpa id labore molestias!
          </p>

          <a href="context" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About