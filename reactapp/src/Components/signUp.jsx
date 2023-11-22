import React, { useState } from 'react';
import {Link,useHistory} from 'react-router-dom';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const history=useHistory();

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:3005/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password,role }),
      });

      if (response.ok) {
        // Signup successful, handle accordingly (e.g., redirect)
        console.log('Signup successful');
        history.push("/");
      } else {
        // Handle signup failure
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Error during signup:', error.message);
    }
  };

  return (
    <div>
      <div className="login-box">
        <h1>Create Account</h1>
        <form>
          <div className="textbox">
            <i className="fas fa-user"></i>
            Username
            <input
              type="text"
              name="userid"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="textbox">
            <i className="fas fa-lock"></i>
            Email
            <input
              type="email"
              name="email"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="textbox">
            <i className="fas fa-lock"></i>
            Role
            <input
              type="text"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <input type="button" onClick={handleSignup} value="Signup" />
        </form>
      </div>
    </div>
  );
}
