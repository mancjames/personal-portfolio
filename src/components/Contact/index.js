import { useState, useEffect, useRef } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const title = "Contact me"
    const titleArray = title.split("")
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

      const form = useRef();

      const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, form.current, `${process.env.REACT_APP_PUBLIC_KEY}`)
          .then(() => {
            alert('Message successfully sent!')
            window.location.reload(false)
          }, (error) => {
            alert('Failed to send the message, please try again');
            console.log(error.text)
          });
      };

  return (
    <>
    <div className="container contact-page">
       <div className="text-zone">
       <h1>
            <AnimatedLetters 
            letterClass={letterClass}
            strArray={titleArray}
            idx={15}
            />
        </h1>
        <p>
            If you have any requests or questions, please don't hesitate to contact me using the form below.
        </p>
        <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
            <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="user_name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="user_email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
        </div>
       </div>
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default Contact