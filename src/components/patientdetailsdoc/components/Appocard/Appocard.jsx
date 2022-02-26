import React from 'react'
import './Appocard.css'
import { } from '@chakra-ui/icons'
import { MdHome,MdAccessTime } from "react-icons/md";
import DateAnd from '../../../imagespayment/d&t.PNG'



function Appocard() {
  return (
    <div className='a-left-side'>
        <div className='a-left-head'>
            <div>
            <MdHome size={"1.5rem"} color={"deepskyblue"} />
            </div>
            <div>
                <span className='appoclinic'>In-clinic Appointment</span>
            </div>
        </div>
        <hr />
        <div>
            <div>
                <div>
                    <div className='dateflex'>
                        <img src={DateAnd} alt="" className='Dateand' />
                    </div>
                    <div className='date11'>
                        <span>On <b style={{fontSize:"14px"}}>Feb 26, 2022</b></span>
                    </div>
                </div>
                <div className="changedt">
                Change Date & Time
                </div>
            </div>
            <div className='leftmid'>
                <div>
                   <MdAccessTime size={20}/>
                </div>
                <div className='leftlast'>
                At <b>7:15 PM</b> 
                </div>
            </div>
        </div>
        <hr />
        <div className='thirdblock'>
            <div>
                <div>
                    <img src='https://images1-fabric.practo.com/doctor/677630/dr-archana-trivedi-603def6d27569.jpg/thumbnail' className='drarchanaimg'/>
                </div>
            </div>
            <div>
                <div>
                    <div className='gridname' style={{color:"black"}}>Dr. Archana Trivedi</div>
                    <div className='gridname'>MBBS, DGO, MRCOG(UK)</div>
                    <div className='gridname'>Gynecologist, Obstetrician, Laparoscopic</div>
                    <div className='gridname'>Surgeon (Obs & Gyn)</div>
                </div>
            </div>
        </div>
        <hr />
        <div>
            <div>
                <div>
                    <img src='https://images1-fabric.practo.com/practices/1264094/dr-archana-trivedi-s-clinic-kanpur-6100df9c7872a.jpeg' className='kanpurimg'/>
                </div>
            </div>
            <div>
                <div className='archdetail'>
                    <div className='name1'>Dr. Archana Trivedi's Clinic</div>
                    <div className='name2'>C-38, Model Town, Kanpur</div>
                    <div className='name2'>Get Directions</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Appocard