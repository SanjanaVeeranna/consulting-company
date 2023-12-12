import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('abc@gmail.com');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Email:', email);
    console.log('Password:', password);
   
    setEmail('');
    setPassword('');
   
    setShowAlert(true);
  
    // setTimeout(() => {
    //   setShowAlert(false);
    // }, 3000);
    alert('loggin successful')
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <p>LogIn</p>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      
     
    </div>
  );
};

export default Login;
