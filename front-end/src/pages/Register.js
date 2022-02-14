import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../styles/Register.module.scss'
import lottie from 'lottie-web'

const Register = () => {
  const lotContainer = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: lotContainer.current,
      renderer: 'svg',
      autoplay: true,
      loop: 0,
      animationData: require('../assets/peacock.json'),
    })
  }, [])

  const [data, setData] = useState({
    email: '',
    username: '',
    password: '',
    passwordConfirmation: '',
  })
  const [errorInfo, setErrorInfo] = useState({})
  const [isError, setIsError] = useState(false)
  const navigate = useNavigate()

  return (
    <div className={styles.registerWrapper}>
      <div className={styles.formWrapper}>
        <form className={styles.registerForm}>
          <div className={styles.inputDiv}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
            />
            <label className={styles.formLabel} htmlFor="email"></label>
          </div>
          <div className={styles.inputDiv}>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Your Username"
            />
            <label className={styles.formLabel} htmlFor="username"></label>
          </div>
          <div className={styles.inputDiv}>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
            <label className={styles.formLabel} htmlFor="password"></label>
          </div>
          <div className={styles.inputDiv}>
            <input
              type="password"
              id="passwordConfirmation"
              name="passwordConfirmation"
              placeholder="Repeat your password"
            />
            <label
              className={styles.formLabel}
              htmlFor="passwordConfirmation"
            ></label>
          </div>
        </form>
      </div>
      <div>
        <div className={styles.lotContainer} ref={lotContainer}></div>
      </div>
    </div>
  )
}

export default Register
