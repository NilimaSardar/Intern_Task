import React, { useState } from 'react'
import styled from 'styled-components'
import { FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";

const Form = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit =(event)=>{
    event.preventDefault();

    if (
      !event.target[0].value.trim() ||
      !event.target[1].value.trim() ||
      !event.target[2].value.trim() ||
      !event.target[3].value.trim() ||
      !event.target[4].value.trim()
    ) {
      alert("All fields are required!");
      return;
    }

    setFirstName(event.target[0].value);
    setLastName(event.target[1].value);
    setEmail(event.target[2].value);
    setNumber(event.target[3].value);
    setAddress(event.target[4].value);

    setIsSubmitted(true);
  }

  return(
    <>
    
        {isSubmitted?(

          <TableStyle>
              <h1>Display Data</h1>
              <div className='table'>
                  <table>
                      <thead>
                          <tr>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Email</th>
                              <th>Phone no</th>
                              <th>Address</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>{firstName}</td>
                              <td>{lastName}</td>
                              <td>{email}</td>
                              <td>{number}</td>
                              <td>{address}</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </TableStyle>

          ):(

          <FormStyled>
            <h1>Account</h1>
            <form action="" onSubmit={onSubmit}>
              <div className='input-field'>
                <label htmlFor="fname">First Name:</label>
                <div className='input'>
                  <input type="text" name="fname" autoComplete="off" placeholder='enter your first name' />
                  <div className='icon'><FaUser/></div>
                </div>
              </div>
              <div className='input-field'>
                <label htmlFor="lname">Last Name:</label>
                <div className='input'>
                  <input type="text" name="lname" autoComplete="off" placeholder='enter your last name' />
                  <div className='icon'><FaUser/></div>
                </div>
              </div>
              <div className='input-field'>
                <label htmlFor="email">Email:</label>
                <div className="input">
                  <input type="text" name="email" autoComplete="off" placeholder='enter your email' />
                  <div className='icon'><IoMdMail/></div>
                </div>
              </div>
              <div className='input-field'>
                <label htmlFor="number">Phone Number:</label>
                <div className="input">
                  <input type="text"  name="number" autoComplete="off" placeholder='Phone Number Here' />
                  <div className='icon'><FaPhoneAlt/></div>
                </div>
              </div>
              <div className='input-field'>
                <label htmlFor="address">Address:</label>
                <div className="input">
                  <input type="text" name="address" autoComplete="off" placeholder='Address Here' />
                  <div className="icon"><TiContacts/></div>
                </div>
              </div>
              <button type='submit'>Submit</button>
            </form>
          </FormStyled>

        )}
    
    </>
  
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
  form .input-field .input input:hover{
  background-color: #cfcbcbc4;
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


const TableStyle = styled.div`

      /* background-color: #c4969e; */
  height: calc(100vh - 90px - 200px);
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
  .table{
    /* background-color: #e86d82; */
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 40px 0;
    padding: 40px;
    gap: 40px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    
  }
  .table table{
    border-collapse: collapse;
    text-align: center;
  }

  th, td {
  padding: 12px;
  border-bottom: 2px solid #ddd;
}

th {
    background-color: #8f8fb5;
    color: white;
}

tr:hover {
  background-color: #f5f5f5;
}
  
`;