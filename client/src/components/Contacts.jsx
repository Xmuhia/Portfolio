import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Contacts = () => {
  return (
    <section className='contacts-box' id='contacts-box'>
      <div class="color"></div>
      <div class="color"></div>
      <div class="color"></div>
      
      <ul>
        <li><FaGithub className='icons'/></li>
        <li><FaLinkedin className='icons'/></li>
        <li><MdEmail className='icons'/></li>
      </ul>
    </section>
  )
}

export default Contacts;