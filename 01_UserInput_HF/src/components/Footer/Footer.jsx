import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterStyled>
        <p>I'm currently taking new projects.Would you like to discuss yours?</p>
        <div className='contact'>
          <p className='number'> +977 9829333800</p>
          <p className='email'>snilima181@gmail.com</p>
        </div>
        <div className='social-logo'>
          <ul>
            <li>facebook</li>
          </ul>
        </div>
    </FooterStyled>
  )
}

export default Footer

const FooterStyled = styled.div`


`;