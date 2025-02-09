import './Contact.css'
import { useState } from 'react'

export default function Contact() {

    const [contactName, setContactName] = useState('');
    const [contactEmail, setEmail] = useState('');
    const [contactMessage, setMessage] = useState('');

    const handleInputChange = (e) => {
         
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
    
        if (inputType === 'contact-name') {
          setContactName(inputValue);
        } else if (inputType === 'contact-email') {
          setEmail(inputValue);
        } else {
          setMessage(inputValue);
        }
      };


    const handleFormSubmit = (e) => {
        e.preventDefault();

        alert(`Hello ${contactName}, thank you for submitting your message!`);
        setContactName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className='contact-container'>
            <h1>
                Contact Me!
            </h1>
            <form className='form' onSubmit={handleFormSubmit}>
                <input
                    value={contactName}
                    name="contact-name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Your Name"
                />
                <input
                    value={contactEmail}
                    name="contact-email"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Your Emaill"
                />
                <textarea className='textarea'
                    value={contactMessage}
                    name="contact-message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Let me know your thoughts!"
                />
                 <button className='button'>Button</button>
            </form>
        </div>
    )
}