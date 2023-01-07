import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {ImFacebook2} from 'react-icons/im'
import {VscGithub} from 'react-icons/vsc'

const Socials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/calvin-klein-jed-andrie-ra%C3%B1a-56330920b/" target="blank"><BsLinkedin/></a>
        <a href="https://www.instagram.com/calvinkleinn_1999/" target="blank1">< BsInstagram/></a>
        <a href="https://www.facebook.com/ck.ranax44/" target="blank2"><ImFacebook2 /></a>
        <a href="https://github.com/GrimCLown" target="blank3"><VscGithub /></a>
    </div>

  )
}

export default Socials