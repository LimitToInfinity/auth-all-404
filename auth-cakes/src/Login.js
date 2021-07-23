import { useState } from 'react';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = event => {
    event.preventDefault();

    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: { username, password } })
    })
      .then(response => response.json())
      .then(result => {
        if (result.error) {
          console.error(result.error);
        } else {
          console.log('token', result.token);
          // route them to profile page
          localStorage.setItem('token', result.token);
        }
      });

    setUsername('');
    setPassword('');
  }

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <input type="submit" value="login" />
      </form>
    </div>
  );
}

export default Login;