import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

import './index.scss'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const name="James"
    const nameArray = name.split("")

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

  return (
    <>
    <div className="container home-page">
        <div className="text-zone">
            <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <span> <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/></span>
            </h1>
            <h2> Frontend Developer / React Enthusiast</h2>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div>
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default Home