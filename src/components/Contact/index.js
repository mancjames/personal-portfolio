import { useState, useEffect, useRef } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';

const Contact = () => {
    const title = "Contact me"
    const titleArray = title.split("")
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

      let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });
    
    L.Marker.prototype.options.icon = DefaultIcon;

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
            <form name="contact" ref={form} onSubmit={sendEmail} netlify>
            <input type="hidden" name="form-name" value="contact" />
            <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
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
       <div className="info-map responsive-info">
          James Hay,
          <br />
          Middleton,
          <br />
          Manchester <br />
          UK <br />
        </div>
        <div className="map-wrap responsive-map">
        <MapContainer center={[53.5459, -2.2019]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[53.55048992769389, -2.1999397964099603]}>
            <Popup>
              Welcome to Middleton! <br />
            </Popup>
          </Marker>
      </MapContainer>
        </div>
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default Contact