import React, { useState } from 'react'
import './payment.css'
import {ChevronDownIcon,ChevronRightIcon } from '@chakra-ui/icons'

function DropDown() {
  return (
    <div>
        <div className='user-acc'>
              <div className='u-d-head'>
                <img src="https://accounts.practo.com/profile_picture/936407/medium_thumbnail" alt="" className="profile-pic" />
                <div className="u-name">
                  <a href="https://accounts.practo.com/edit_profile" style={{color:"black",fontWeight:700,marginLeft:10}}>Hemendra Maheta</a>
                  <div className="u-number">+91-7878157406</div>
                </div>
              </div>
            </div>
            <div className='u-d-item'>
              <a href="" className='option'>My Appointments</a>
            </div>
            <div className="u-d-item">
              <a href="" className='option'>My Tests</a>
            </div>
            <div className="u-d-item">
              <a href="" className='option'>My Medicine Orders</a>
            </div>
            <div className="u-d-item">
              <a href="" className='option'>My Medicine Records</a>
            </div>
            <div className="u-d-item">
              <a href="" className='option'>My Online Consultations</a>
            </div>
            <div className="u-d-item">
              <a href="" className='option'>My Feedback</a>
            </div>
            <div className="u-d-item">
              <a href="" className='option'>My Payments</a>
            </div>
            <div className="u-d-item">
              <a href="" className='option'>View/Update Profile</a>
            </div>
            <div className="u-d-item">
              <a href="" className='option'>Settings</a>
            </div>
            <div className="u-d-item">
              <a href="" className='option'>Logout</a>
            </div>
            <div className="u-d-item product-switch">
              <span style={{fontWeight:600}}>Switch to provider products <ChevronRightIcon w={4} h={4} mb={1}/></span>
              <div>
                <br />
              Manage your clinic, answer consult questions, write health articles and more
              </div>
            </div>
    </div>
  )
}

export default DropDown