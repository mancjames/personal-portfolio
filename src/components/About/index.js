import { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

    const aboutText = "About me"
    const aboutArray = aboutText.split("")

  return (
    <div className="container about-page">
        <div className="text-zone">
            <h1>
            <AnimatedLetters letterClass={letterClass} strArray={aboutArray} idx={15} />
            </h1>
            <p>
            I’m a passionate junior developer with a strong desire to keep learning and experimenting with new technologies.
          </p>
          <br />
          <p align="LEFT">
          After working a number of years in the insurance industry, I decided to challenge myself and have recently completed a degree in front-end development with Openclassrooms.
          </p>
          <br />
          <p>
          This helped me discover my love of coding, and I’m now looking for new opportunities in front-end development, to allow me to continue this passion in my daily role.
          </p>
          <br />
          <p>
            In my spare time, I enjoy roller derby, cooking, playing video games and trying out new projects to help expand my skills! 
          </p>
        </div>
    </div>
  )
}

export default About