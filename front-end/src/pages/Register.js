import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from '../styles/Register.module.scss'
import lottie from 'lottie-web'
import axios from 'axios'

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

  const handleFormChange = (event) => {
    const { name, value } = event.target
    setData({
      ...data,
      [name]: value,
    })
  }

  const handleError = (error) => {
    if (error) {
      setIsError(true)
      setErrorInfo(error.response.data)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const res = await axios.post('/api/register', data)
      console.log(res.data)
      handleSuccessfulRegister()
    } catch (err) {
      handleError(err)
    }
  }

  const handleSuccessfulRegister = () => {
    setIsError(false)
    navigate('/login')
  }

  return (
    <div className={styles.registerWrapper}>
      <div className={styles.formWrapper}>
        <form className={styles.registerForm} onSubmit={handleSubmit}>
          <div className={styles.inputDiv}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              onChange={handleFormChange}
            />
            <label className={styles.formLabel} htmlFor="email"></label>
          </div>
          <div className={styles.inputDiv}>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Your Username"
              onChange={handleFormChange}
            />
            <label className={styles.formLabel} htmlFor="username"></label>
          </div>
          <div className={styles.inputDiv}>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={handleFormChange}
            />
            <label className={styles.formLabel} htmlFor="password"></label>
          </div>
          <div className={styles.inputDiv}>
            <input
              type="password"
              id="passwordConfirmation"
              name="passwordConfirmation"
              placeholder="Password Again"
              onChange={handleFormChange}
            />
            <label
              className={styles.formLabel}
              htmlFor="passwordConfirmation"
            ></label>
          </div>
          <div className={styles.inputDiv}>
            <input type="submit" id="submit" value="Register" />
            <label className={styles.formLabel} htmlFor="submit"></label>
          </div>
          <div>
            <p className={styles.notRegYet}>
              <Link to="/login">Already registered? Sign in here.</Link>
            </p>
          </div>
          {isError ? (
            <div className={styles.errorDiv}>
              <p>
                <strong>Something went wrong registering:</strong>
              </p>
              <p>{errorInfo.message}</p>
            </div>
          ) : null}
        </form>
      </div>
      <div>
        <div className={styles.lotContainer} ref={lotContainer}></div>
      </div>
    </div>
  )
}

export default Register
