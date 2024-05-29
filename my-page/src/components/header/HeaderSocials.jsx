import React from 'react'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/jtaren" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com/Jtaren" target="_blank"><FaGithub /></a>
        <a href="https://x.com/jt_aren" target="_blank"><FaSquareXTwitter /></a>
    </div>
  )
}

export default HeaderSocials
