import { useState } from 'react';

const Signup = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = event => {
    event.preventDefault();

    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({  user: { username, password } })
    })
      .then(response => response.json())
      .then(newUser => console.log(newUser));

    setUsername('');
    setPassword('');
  }

  return (
    <div className="signup">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
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
        <input type="submit" value="signup" />
      </form>
    </div>
  );
}

export default Signup;