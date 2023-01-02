import React from 'react'
import './row.css'

export default function Row(props) {
  return (
    <div className='row'>
        <div className='orderid'>
            <div className='id'>
                123456
            </div>
            <div className='timestamp'>
                1:50 PM 9 Sep'22
            </div>
        </div>
        <div className='store'>
            {props.text}
        </div>
        <div className='add'>
            1014, Tower 6, Sai Poorna Premier Kudlu, Bengaluru - 560068
        </div>
        <div className='dis'>
            2 KM
        </div>
        <div className='pickup'>
            <div className='timing'>
                1:50 PM
            </div>
            <div className='date'>
                9 Sep'22
            </div>
        </div>
        <div className='delivery'>
            <div className='timing'>
                1:50 PM
            </div>
            <div className='date'>
                9 Sep'22
            </div>
        </div>
        <div className='charges'>
            ₹50
        </div>
        <div className='partner'>
            {props.partner}
        </div>
    </div>
  )
}
