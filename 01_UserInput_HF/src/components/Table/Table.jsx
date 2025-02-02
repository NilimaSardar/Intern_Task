import React from 'react'
import styled from 'styled-components'

const Table = () => {
  return (
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
                        <td>Nilima</td>
                        <td>Sardar</td>
                        <td>snilima181@gmail.com</td>
                        <td>98293333800</td>
                        <td>Biratnagar</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </TableStyle>
  )
}

export default Table

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