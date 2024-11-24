import { useState } from 'react'
import './App.css'

function App() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    if (userName === "user" && password === "password") {
      setIsError(false);
      setIsLoggedIn(true);
    } else {
      setIsError(true)
    }
  }
  return (
    <>
      <h3>Login Page</h3>
      <form className='main'>
        <div className="username">
          {isError && <p>Invalid username or password</p>}
          {isLoggedIn && <p>Welcome, user!</p>}
          <label htmlFor="userName">Username:</label>
          <input id='userName' value={userName} onChange={(e) => setUserName(e.target.value)} type="text" required />
        </div>
        <div className="password">

          <label htmlFor="password">Password:</label>
          <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type='submit'  onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
    </>
  )
}

export default App
