import React from 'react'
import styled from 'styled-components'
import { FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";

const Form = () => {
  return (
    <FormStyled>
      <h1>Account</h1>
      <form action="">
        <div className='input-field'>
          <label htmlFor="">First Name:</label>
          <div className='input'>
            <input type="text" placeholder='enter your first name' />
            <div className='icon'><FaUser/></div>
          </div>
        </div>
        <div className='input-field'>
          <label htmlFor="">Last Name:</label>
          <div className='input'>
            <input type="text" placeholder='enter your last name' />
            <div className='icon'><FaUser/></div>
          </div>
        </div>
        <div className='input-field'>
          <label htmlFor="">Email:</label>
          <div className="input">
            <input type="text" placeholder='enter your email' />
            <div className='icon'><IoMdMail/></div>
          </div>
        </div>
        <div className='input-field'>
          <label htmlFor="">Phone Number:</label>
          <div className="input">
            <input type="text" placeholder='Phone Number Here' />
            <div className='icon'><FaPhoneAlt/></div>
          </div>
        </div>
        <div className='input-field'>
          <label htmlFor="">Address:</label>
          <div className="input">
            <input type="text" placeholder='Address Here' />
            <div className="icon"><TiContacts/></div>
          </div>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </FormStyled>
  )
}

export default Form

const FormStyled = styled.div`
  /* background-color: #c4969e; */
  height: auto;
  padding: 20px 0;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1{
    font-size: 36px;
    font-weight: 500;
    font-family: "Roboto",sans-serif;
    letter-spacing: 2px;
  }

  form{
    /* background-color: #e86d82; */
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 40px 0;
    padding: 40px;
    gap: 40px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  form .input-field{
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  form .input-field label{
    font-size: 20px;
  }
  form .input-field .input{
    position: relative;
    /* background-color: green; */
    display: flex;
  }
  form .input-field .input input{
    border:2px solid #8f8fb5;
    width: 100%;
    height: 40px;
    border-radius: 20px;
    padding: 10px;
  }

  form .input-field .icon{
    position: absolute;
    right: 10px;
    bottom: 6px;
    color: #9b7e83;
    font-size: 18px;
  }

  button{
    background-color: #8f8fb5;
    border: none;
    height: 40px;
    border-radius: 20px;
    font-size: 18px;
    letter-spacing: 1px;
    font-weight: 500;
  }
`;