import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from '../styles/Register.module.scss'
import lottie from 'lottie-web'
import axios from 'axios'
import { setToken, setUserId, setUsername } from '../helpers/auth'

const Login = ({ setIsLoggedIn }) => {
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
    password: '',
  })
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
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const res = await axios.post('/api/login', data)
      console.log(res.data)
      handleSuccessfulLogin(res.data)
    } catch (err) {
      console.log(err)
      handleError(err)
    }
  }

  const handleSuccessfulLogin = ({ token, id, username }) => {
    console.log(id)
    setIsError(false)
    setToken(token)
    setUserId(id)
    setUsername(username)
    setIsLoggedIn(true)
    navigate('/')
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
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={handleFormChange}
            />
            <label className={styles.formLabel} htmlFor="password"></label>
          </div>

          <div className={styles.inputDiv}>
            <input type="submit" id="submit" value="Login" />
            <label className={styles.formLabel} htmlFor="submit"></label>
          </div>
          <div>
            <p className={styles.notRegYet}>
              <Link to="/register">Not registered yet? Sign up here.</Link>
            </p>
          </div>
          {isError ? (
            <div className={styles.errorDiv}>
              <p>Your credentials were invalid. Please try again.</p>
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

export default Login
