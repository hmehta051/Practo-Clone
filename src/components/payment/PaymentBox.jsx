import React, { useState } from 'react'
import './paymentbox.css'
import {} from '@chakra-ui/icons'
import { useEffect } from 'react'
import Mycards from './Mycards'
import razorlogo from '../imagespayment/razorpay.png'
import qrcode from '../imagespayment/qrcode.PNG'
import Googlepay from './components/googlepay/Googlepay'
import Amazonpay from './components/amazonpay/Amazonpay'
import Phonepay from './components/phonepay/Phonepay'
import Netbank from './components/netbank/Netbank'
import Other from './components/other/Other'
import Paylater from './components/paylater/Paylater'
import {useNavigate} from 'react-router-dom'

function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

const __DEV__ = document.domain === 'localhost'

function PaymentBox() {
    const [active,setActive]=useState("")
    const [btnactive,setBtnactive]=useState(false)
    const [gpay,setGpay]=useState(false)
    const [apay,setApay]=useState(false)
    const [phonepay,setPhonepay]=useState(false)
    const [netbank,setNetbank]=useState(false)
    const [paylater,setPaylater]=useState(false)
    const [other,setOther]=useState(false)
    const [debit1,setDebit1]=useState(true)

    useEffect(()=>{
        setActive("debit")
    },[])


    // const [name, setName] = useState('Hemendra')

	async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		const data = await fetch('http://localhost:9000/razorpay', { method: 'POST' }).then((t) =>
			t.json()
		)

		console.log(data)

		const options = {
			key: __DEV__ ? 'rzp_test_9vxvaS7bgzC98i' : 'PRODUCTION_KEY',
			currency: data.currency,
			amount: data.amount.toString(),
			order_id: data.id,
			name: 'Practo',
			description: 'Thank you for visiting us',
			image: 'http://localhost:9000/logo.svg',
			handler: function (response) {
				alert("Order successful")
                window.location.replace("http://localhost:3000");
			},
			prefill: {
				name:"Hemendra",
				email: 'hmehta051@gmail.com',
				phone_number: '9899999999'
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}

  return (
    <div className='bodycolor'>
        <div className="bodypayment">
            <div className="payment-option">
                <div className="u-d-height">
                    <span>Payment Options</span>
                </div>
                <div className={active=="debit"?"u-d-payment active-payment":"u-d-payment"} onClick={(e)=>setActive("debit")}>
                    <div onClick={(e)=>setDebit1(debit1)}>Debit/Credit Card </div>
                </div>
                <div className={active=="googlepay"?"u-d-payment active-payment":"u-d-payment"} onClick={(e)=>setActive("googlepay")}>
                <div onClick={(e)=>setGpay(!gpay)}>Google Pay</div>
                </div>
                <div className={active=="razorpay"?"u-d-payment active-payment":"u-d-payment"} onClick={(e)=>setActive("razorpay")} >
                <div onClick={(e)=>setBtnactive(!btnactive)}>RazorPay</div>
                </div>
                <div className={active=="amazonpay"?"u-d-payment active-payment":"u-d-payment"} onClick={(e)=>setActive("amazonpay")}>
                    <div onClick={(e)=>setApay(!apay)}>Amazon Pay</div>
                </div>
                <div className={active=="phonepe"?"u-d-payment active-payment":"u-d-payment"} onClick={(e)=>setActive("phonepe")}>
                    <div onClick={(e)=>setPhonepay(!phonepay)}>PhonePe/BHIM UPI</div>
                </div>
                <div className={active=="netbanking"?"u-d-payment active-payment":"u-d-payment"} onClick={(e)=>setActive("netbanking")}>
                    <div onClick={(e)=>setNetbank(!netbank)}>Net Banking</div>  
                </div>
                <div className={active=="paylater"?"u-d-payment active-payment":"u-d-payment"} onClick={(e)=>setActive("paylater")}>
                <div onClick={(e)=>setPaylater(!paylater)}>Pay Later</div>
                </div>
                <div className={active=="others"?"u-d-payment active-payment":"u-d-payment"} onClick={(e)=>setActive("others")}>
                <div onClick={(e)=>setOther(!other)}>Others</div>
                </div>
            </div>
            <div className="payment-gui">
                {
                    active==="debit"?(<Mycards/>):null
               }
               {
                   active==="googlepay"?(<Googlepay/>):null
               }
               {
                   active==="amazonpay"?(<Amazonpay/>):null
               }
               {
                   active==="phonepe"?(<Phonepay/>):null
               }
               {
                   active==="netbanking"?(<Netbank/>):null
               }
               {
                   active==="others"?(<Other/>):null
               }
               {
                   active==="paylater"?(<Paylater/>):null
               }
               {
                    active==="razorpay"?(
                        <div className="payment-gui">
                        <div className='razorpay-logo'>
                            <img src={razorlogo} alt="logo" className='razorlogo' />
                        </div>
                        <div className='barcodepay'>
                       <img src={qrcode} alt="" className='scanbarcode' />
                        </div>
                        <div className='paywithrazor'>
                            <button className="payBtn" onClick={displayRazorpay}>Pay With RazorPay</button>
                        </div>
                    </div>
                    ):null
               }
            </div>
            
        </div>
    </div>
  )
}

export default PaymentBox