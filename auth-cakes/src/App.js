import './App.css';
import Signup from './Signup';
import Login from './Login';

function App() {

  const getProfile = _ => {
    fetch('http://localhost:3000/profile', {
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
      .then(response => response.json())
      .then(result => {
        if (result.error) {
          console.error(result.error);
        } else {
          console.log(result);
        }
      });
  }

  return (
    <div className="App">
      <Signup />
      <Login />
      <button onClick={getProfile}>Get profile</button>
    </div>
  );
}

export default App;
