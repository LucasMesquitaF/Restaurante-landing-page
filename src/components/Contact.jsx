import React from 'react'
import './Contact.css'
import Button from './Button'
function Contact() {
    return (
        <div id='Contact' className='contact-container'>
            <h1>Have Question In Mind?
                Let Us Help You</h1>
            <form action="" className='contact-form'>
                <input type="email" className="email" name="fname" placeholder='yourmail@gmail.com'></input>
                <Button buttonStyle='order-btn'>Submit</Button>
            </form>
        </div>
    )
}

export default Contact