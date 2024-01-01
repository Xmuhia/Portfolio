import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contacts = () => {
  return (
    <section className='contacts-box' id='contacts-box'>
      <div class="color"></div>
      <div class="color"></div>
      <div class="color"></div>
      
      <ul>
        <li>
          <a href="https://github.com/Xmuhia" target="_blank" rel="noopener noreferrer">
            <FaGithub className='icons' />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/brendan-muhia" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='icons' />
          </a>
        </li>
        <li>
          <a href="mailto:docotcombrendan@gmail.com" target="_blank" rel="noopener noreferrer">
            <MdEmail className='icons' />
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Contacts;
