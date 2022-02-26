import React, { useState } from 'react';
import { ATMCard } from 'atm-card-react';
import { Button, ButtonGroup } from '@chakra-ui/react'

function Mycards({scale,system}) {
    const [number, setNumber] = useState('');
    const [month, setMonth] = useState(2);
    const [year, setYear] = useState(22);
    const [holder, setHolder] = useState('');
    const [cvv, setCvv] = useState('');

    return (
        <>
        <div>
            <div className='credit-head'>
                Amount To Pay: ₹600
            </div>
        <ATMCard
              year={year}
              month={month}
              cvv={cvv}
              number={number}
              holderName={holder}
              bgColor="grey"
              className='atmcard'
              bankLogo={
                <h1 style={{ 
                  fontFamily: 'sans-serif', 
                  fontSize: 20 * scale, 
                  color: 'white'
                }}>Practo</h1>
              }
              lifted
              system={system}
              scale={scale}
              onChange={(data) => {
                setNumber(data.number);
                setCvv(data.cvv);
                setMonth(data.month);
                setYear(data.year);
                setHolder(data.holder);
              }}/>
        </div>
        <br />
        <div>
            {/* <button className='paydebit'>Pay Now</button> */}
        </div>
            
        </>
    );
}
export default Mycards;