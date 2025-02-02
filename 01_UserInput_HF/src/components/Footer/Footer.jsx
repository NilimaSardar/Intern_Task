import React from 'react'
import styled from 'styled-components'
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterStyled>
        <p className='desc'>I'm currently taking new projects.Would you like to discuss yours?</p>
        <div className='contact'>
          <p className='number'> +977 9829333800</p>
          <p className='email'>snilima181@gmail.com</p>
        </div>
        <div className='social-logo'>
          <ul>
            <li><FaFacebook/></li>
            <li><FaSquareXTwitter/></li>
            <li><FaGithub/></li>
            <li><FaSquareInstagram/></li>
            <li><FaLinkedin/></li>
          </ul>
        </div>
    </FooterStyled>
  )
}

export default Footer

const FooterStyled = styled.div`
  background-color: #8f8fb5;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  padding: 20px 0;

  .desc{
    font-size: 22px;
    font-weight: 400;
  }

  .contact{
    font-weight: 400;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

.social-logo ul{
  display: flex;
  gap: 20px;
  font-size: 28px;
  list-style: none;
  color: white;
}
`;