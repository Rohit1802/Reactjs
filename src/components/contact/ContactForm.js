import React from 'react'
import Contact from '../../img/imgContact/ContactBack.svg'

const ContactForm = () => {
  return (
    <div className="ContactForm">
        <div className='container'>
            <div className='ContactForm__main'>
                <div className="ContactForm__background">
                    <img src={Contact} />
                </div>
                <div className='form__wrapper'>
                    <h3>Get in Touch</h3>
                    <form className='form__contact'>
                        <div className='Name__field'>
                            <input type='text' placeholder='First Name' required></input>
                            <input type='text' placeholder='Last Name' required></input>
                        </div>
                        <div className='info__field'>
                            <input type='text' placeholder='Mobile Number' required></input>
                            <input type='email' placeholder='Email' required></input>
                        </div>
                        <div className='message__field'>
                            <textarea className="no-resize" placeholder='Enter your message'></textarea>
                        </div>
                        <div className='button__field'>
                            <button className='button__primary'>
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactForm