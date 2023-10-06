import React from 'react'
import BasicExample from '../components/Navbar'
import back from '../assets/images/back.png'
import './Page1.css'
import Button from 'react-bootstrap/esm/Button'

const Page1 = () => {
  return (
    <div>
      <BasicExample />
      <div className='bg-image Container fluid'>
      <h1>Welcome to Codingorzo</h1>
      <h3>where coding and creativity unite</h3>
      <Button id="getstart" >Get Started</Button>
        </div>
      

    </div>
  )
}

export default Page1
