import React, { useState } from 'react'
import './Paymentdetail.css'
import {ChevronDownIcon,ChevronRightIcon } from '@chakra-ui/icons'
import DropDown from './DropDown'
import Appocard from './components/Appocard/Appocard'
import Appodetail from './components/Appodetail/Appodetail'

function Paymentdetail() {
  const [counter,setCounter]=useState(false)
  return (
    <div className='bcolor'>
      <div className="navHead">
        <div className="navLeft">
          <span className="practo-logo">
            <a href="http://localhost:3000/"></a>
            <img src="https://iconape.com/wp-content/files/hq/349833/svg/349833.svg" alt="" />
          </span>
        </div>
        <div className="navRight">
          <span className='userName'>Hemend...</span>
          <span className='arrowDown'>
          <ChevronDownIcon w={6} h={6} onClick={(e)=>setCounter(!counter)}/>
          </span>
          <div className='userSideBar'>
            {
              counter && (
                <DropDown/>
              )
            }
          </div>
        </div>
      </div>
      <>
      <Appocard/>
      <Appodetail/>
      </>
    </div>
  )
}

export default Paymentdetail