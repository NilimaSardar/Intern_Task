import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import styled from 'styled-components'
import { FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";

const FormusingReactHookForm = () => {

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors, isSubmitting },
      } = useForm({mode: "onChange"});

      const [dataList, setDataList] = useState([]);

  // async function onSubmit(data){
  //   await new Promise((resolve)=> setTimeout(resolve, 5000))
  //   console.log("submitting the form",data);
  //   setDataList([...dataList, data]);
  //   reset();
  // }
  function onSubmit(data){
    console.log("submitting the form",data);
    setDataList([...dataList, data]);
    reset();
  }
  

  return(
    <>
      <FormStyled>
        <h1>Account</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className= 'input-field'>
            <label htmlFor="fname">First Name:</label>
            <div className='input'>
              <input autoComplete="off"  placeholder='enter your first name'
              {...register('fname',
                {
                  required: { value: true, message: "Required*" },
                  pattern: {
                    value:  /^[A-Za-z]+$/,
                    message: "letters only allowed!"
                  }
                })}
              
              />
              <div className='icon'><FaUser/></div>
              {errors.fname && <p className='error-msg'>{errors.fname.message}</p>}
            </div>
          </div>
          <div className='input-field'>
            <label htmlFor="lname">Last Name:</label>
            <div className='input'>
              <input autoComplete="off"  placeholder='enter your last name'
              {...register('lname',
                {
                  required: { value: true, message: "Required*" },
                  pattern: {
                    value:  /^[A-Za-z]+$/,
                    message: "letters only allowed!"
                  }
                })}
              />
              <div className='icon'><FaUser/></div>
              {errors.lname && <p className='error-msg'>{errors.lname.message}</p>}
            </div>
          </div>
          <div className='input-field'>
            <label htmlFor="email">Email:</label>
            <div className="input">
              <input autoComplete="off"  placeholder='enter your email'
              {...register('email',
                {
                  required: { value: true, message: "Required*" },
                  pattern: {
                    value:  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid Email!"
                  }
                })}
              />
              <div className='icon'><IoMdMail/></div>
              {errors.email && <p className='error-msg'>{errors.email.message}</p>}
            </div>
          </div>
          <div className='input-field'>
            <label htmlFor="number">Phone Number:</label>
            <div className="input">
              <input autoComplete="off"  placeholder='Phone Number Here'
              {...register('number',
                {
                  required: { value: true, message: "Required*" },
                  pattern: {
                    value:  /^(98|97)[0-9]{8}$/,
                    message: "Invalid Phone Number!"
                  }
                })}
              />
              <div className='icon'><FaPhoneAlt/></div>
              {errors.number && <p className='error-msg'>{errors.number.message}</p>}
            </div>
          </div>
          <div className='input-field'>
            <label htmlFor="address">Address:</label>
            <div className="input">
              <input autoComplete="off"  placeholder='Address Here'
              {...register('address',
                {
                  required: { value: true, message: "Required*" },
                })}
              />
              <div className="icon"><TiContacts/></div>
              {errors.address && <p className='error-msg'>{errors.address.message}</p>}
            </div>
          </div>
          {/* <button type='submit' disabled={isSubmitting}>{isSubmitting?"Submitting":"Submit"}</button> */}
          <button type='submit'>Submit</button>
        </form>
      </FormStyled>
      
          
      <TableStyle>
        {dataList.length === 0?(
          <>
            <h1>Fill the form first</h1>
          </>
        ):(<>
          <h1>Form Data</h1>
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
                    {dataList.map((data, index) => (
                      <tr key={index}>
                        <td>{data.fname}</td>
                        <td>{data.lname}</td>
                        <td>{data.email}</td>
                        <td>{data.number}</td>
                        <td>{data.address}</td>
                      </tr>
                    ))}
                  </tbody>
              </table>
          </div>
        </>)}

      </TableStyle>  
    </>
  
  )
}

export default FormusingReactHookForm


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
  form .input-field .error-msg{
    position: absolute;
    color: red;
    top: -27.5px;
    right: 0;
    padding: 10px;
    font-size: 14px;
  }

  button{
    background-color: #8f8fb5;
    border: none;
    height: 40px;
    border-radius: 20px;
    font-size: 18px;
    letter-spacing: 1px;
    font-weight: 500;
    cursor: pointer;
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