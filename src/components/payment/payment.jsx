import React, { useState } from 'react'
import './payment.css'
import {ChevronDownIcon,ChevronRightIcon } from '@chakra-ui/icons'
import DropDown from './DropDown'
import PaymentBox from './PaymentBox'

function Payment() {
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
      <PaymentBox/>
    </div>
  )
}

export default Payment