import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderStyle>
          <div className='logo'>
              <p>TASK-1</p>
          </div>
          <div className='nav'>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
    </HeaderStyle>
  )
}

export default Header

const HeaderStyle = styled.div`
  height: 90px;
  /* background-color: #8f8fb5; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #737373;

  .logo{
    font-size: 30px;
    font-weight: 600;
  }
  .logo p{
    font-family: "Caveat";
  }
  .logo p::first-letter{
    font-size: 50px;
    font-weight: 300;
  }

  .nav{
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav ul{
    display: flex;
    gap: 25px;
    list-style-type: none;
    font-size: 20px;
    font-weight: 600;
  }
`;