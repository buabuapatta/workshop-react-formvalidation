import './FormComponent.css'
import { useState } from "react"

const FormComponent = () => {
  const [UserName, setUserName] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [Repassword, setRepassword] = useState('')

  const [errorUserName, setErrorUserName] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [errorRePassword, setErrorRePassword] = useState('')

  const [UserNameColor, setUserNameColor] = useState('')
  const [EmailColor, setEmailColor] = useState('')
  const [PasswordColor, setPasswordColor] = useState('')
  const [RepasswordColor, setRepasswordColor] = useState('')

  const validateForm = (e) => {
    e.preventDefault()

    if (UserName.length > 8) {
      setErrorUserName('')
      setUserNameColor('#ADD495')
    } else {
      setErrorUserName('Please enter more than 8 character.')
      setUserNameColor('red')
    }

    if (Email.includes("@") && Email.includes(".com")) {
      setErrorEmail('')
      setEmailColor('#ADD495')
    } else {
      setErrorEmail('Invalid email format.')
      setEmailColor('red')
    }

    if (Password.length > 8) {
      setErrorPassword('')
      setPasswordColor('#ADD495')
    } else {
      setErrorPassword('Please enter more than 8 character.')
      setPasswordColor('red')
    }

    if (Repassword === Password && Repassword !== "") {
      setErrorRePassword('')
      setRepasswordColor('#ADD495')
    } else {
      setErrorRePassword('Password Do not match.')
      setRepasswordColor('red')
    }
  }

  return (
    <div className="container">
      <form className="form" onSubmit={validateForm}>
        <h2>Sign up</h2>
        <div className="form-control">
          <label>Username</label>
          <input type="text" value={UserName} onChange={(e) => setUserName(e.target.value)} style={{ borderColor: UserNameColor }}></input>
          <small>{errorUserName}</small>
        </div>
        <div className="form-control">
          <label>Email</label>
          <input type="text" value={Email} onChange={(e) => setEmail(e.target.value)} style={{ borderColor: EmailColor }}></input>
          <small>{errorEmail}</small>
        </div>
        <div className="form-control">
          <label>Password</label>
          <input type="password" value={Password} onChange={(e) => setPassword(e.target.value)} style={{ borderColor: PasswordColor }}></input>
          <small>{errorPassword}</small>
        </div >
        <div className="form-control">
          <label>Confirm Password</label>
          <input type="password" value={Repassword} onChange={(e) => setRepassword(e.target.value)} style={{ borderColor: RepasswordColor }}></input>
          <small>{errorRePassword}</small>
        </div >
        <button type="submit">Register</button>
      </form >
    </div >
  )
}

export default FormComponent