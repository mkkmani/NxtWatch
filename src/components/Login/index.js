import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

import ThemeContext from '../../Context/ThemeContext'
import {
  LoginContainer,
  LoginCardContainer,
  WebsiteLogo,
  Label,
  LoginInput,
  Form,
  ShowPasswordLabel,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class login extends Component {
  state = {
    isError: false,
    errorMsg: '',
    showUsername: '',
    showPassword: '',
    passwordType: 'password',
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
    this.setState({isError: false})
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMsg, isError: true})
  }

  onSubmit = async e => {
    e.preventDefault()
    const {showUsername, showPassword} = this.state
    const {history} = this.props

    const userDetails = {
      username: 'rahul',
      password: 'rahul@2021',
    }
    const api = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(api, options)
    const data = await response.json()

    if (response.ok) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      history.replace('/')
    } else {
      this.setState({errorMsg: 'Invalid Credentials'})
    }

    // if (showUsername === 'mani' && showPassword === 'Mani@123') {
    //   const response = await fetch(api, options)
    //   const data = await response.json()

    //   if (response.ok) {
    //     Cookies.set('jwt_token', data.jwt_token, {expires: 30})
    //     history.replace('/')
    //   } else {
    //     this.setState({errorMsg: 'Invalid Credentials'})
    //   }
    // } else {
    //   let errorMsg = ''

    //   if (showUsername !== 'mani' && showPassword !== 'Mani@123') {
    //     errorMsg = 'Invalid Username and Password'
    //   } else if (showUsername !== 'mani') {
    //     errorMsg = 'Invalid Username'
    //   } else if (showPassword !== 'Mani@123') {
    //     errorMsg = 'Invalid Password'
    //   } else {
    //     errorMsg = 'Invalid Login Details'
    //   }
    //   this.setState({errorMsg, showError: true})
    // }
  }

  onCheckBox = event => {
    this.setState({passwordType: event.target.checked ? 'text' : 'password'})
  }

  updateUsername = event => {
    this.setState({showUsername: event.target.value})
  }

  updatePassword = event => {
    this.setState({showPassword: event.target.value})
  }

  render() {
    const {
      passwordType,
      showUsername,
      showPassword,
      isError,
      errorMsg,
    } = this.state

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const websiteLogo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const theme = isDarkTheme ? 'dark' : 'light'

          return (
            <LoginContainer theme={theme}>
              <LoginCardContainer theme={theme}>
                <WebsiteLogo src={websiteLogo} alt="website logo" />
                <Form onSubmit={this.onSubmit}>
                  <Label htmlFor="username" theme={theme}>
                    USERNAME
                  </Label>
                  <LoginInput
                    type="text"
                    id="username"
                    placeholder="Username"
                    theme={theme}
                    value={showUsername}
                    onChange={this.updateUsername}
                  />
                  <Label htmlFor="password" theme={theme}>
                    PASSWORD
                  </Label>
                  <LoginInput
                    type={passwordType}
                    id="password"
                    placeholder="Password"
                    theme={theme}
                    value={showPassword}
                    onChange={this.updatePassword}
                  />
                  <input
                    type="checkbox"
                    id="showPassword"
                    onClick={this.onCheckBox}
                  />
                  <ShowPasswordLabel theme={theme} htmlFor="showPassword">
                    Show Password
                  </ShowPasswordLabel>
                  <div>
                    <LoginButton type="sumbit">Login</LoginButton>
                    <p className="log">
                      Click on login to log without credentials
                    </p>
                  </div>
                  <ErrorMsg>{isError && `* ${errorMsg}`}</ErrorMsg>
                </Form>
              </LoginCardContainer>
            </LoginContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default login
