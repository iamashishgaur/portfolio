import React from 'react'
import About from '../About/About'
import ContactMe from '../ContactMe/ContactMe'
import Project from '../Project/Project'
import Skill from '../Skill/Skill'
import './Home.scss'
import Profile from './Profile/Profile'
const Home = () => {
  return (
    <div className='home' id='home'>
      <Profile/> 
      <About/>
      <Skill/>
      <Project/>
      <ContactMe/>
    </div>
  )
}

export default Home;