import React from 'react'
import mix from '../../img/mix1.svg'
import cheers from '../../img/cheers.svg'
import { IoMailOpenOutline } from "react-icons/io5";
function Sendus() {
    return (
        <div className='SendUs'>
            <div className='mail-box'>
                <div className='left--img'>
                    <img src={mix} />
                </div>
                <div className='text-box'>
                    <IoMailOpenOutline className='icons' />
                    <h2>Send Us Mail</h2>
                    <p>Claritas processus dynamics sequitu ynamics Claritas processus dynamics sequitu ynamics</p>
                    <div className='inputbox'>
                        <input type="text" placeholder='your email address'/>
                        <button className='btn-secondary'>Send</button>
                    </div>
                </div>
                <div className='right--img'>
                    <img src={cheers} />
                </div>
            </div>
        </div>
    )
}

export default Sendus