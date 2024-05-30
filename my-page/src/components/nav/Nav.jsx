import React from 'react'
import './nav.css'
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdMessage } from "react-icons/md";

const Nav = () => {
  return (
    <nav>
      <a href="#home"className='active' ><FaHome /></a>
      <a href="#about"><FaUser /></a>
      <a href="#experience"><FaBook /></a>
      <a href="#services"><MdMiscellaneousServices /></a>
      <a href="#contact"><MdMessage /></a>
    </nav>
  )
}

export default Nav