import React from 'react';
import {BsLinkedin } from 'react-icons/bs' 
import {AiFillGithub } from 'react-icons/ai' 

const SocialMedia = () => {
  return (
    <div className='app__social'>
       <a href="https://www.linkedin.com/in/yotamde" target="_blank" rel="noreferrer noopener">
        <div>
            <BsLinkedin />
        </div>
       </a>
      <a href="https://github.com/Yotam-D" target="_blank" rel="noreferrer noopener">
        <div>
          <AiFillGithub />
        </div>
      </a> 
    </div>
  )
}

export default SocialMedia