import React, { useState } from 'react';
import {Link,useHistory} from 'react-router-dom';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 const history =useHistory();


  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3005/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Login successful, handle accordingly (e.g., redirect)
        console.log('Login successful');
        history.push("/");
      } else {
        // Handle login failure
        console.error('Login failed');
        const data=await response.json();
        window.alert(data.error)
      }
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  return (
    <div className='loginMainBox'>
      <div className="login-box">
        <h1>Login</h1>
        <form>
          <div className="textbox">
            <i className="fas fa-user"></i>
            Email
            <input
              type="email"
              required
              name="userid"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="textbox">
            <i className="fas fa-lock"></i>
            Password
            <input
              type="password"
              name="pswrd"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input type="button" onClick={handleLogin} value="Login" />
          <input type="reset" value="Cancel" />
        </form>
      </div>
    </div>
  );
}
