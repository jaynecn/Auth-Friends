import React, { useState } from 'react';
import axios from 'axios';

function Login(props) {

  const [newFriend, setNewFriend] = useState([]);

  const handleSubmit = event => {
    console.log(newFriend);
    event.preventDefault();
    axios.post('http://localhost:5000/api/login', newFriend)
      .then(res => {
        localStorage.setItem('token', res.data.payload )
        props.history.push('/friends');
      })
    }
  
  const onValueChange = event => {
    // console.log(event.target.value);
    setNewFriend({
      ...newFriend,
      [event.target.name]: event.target.value
    })  
  }
  
  return (
    <div>
      Login test.
      <div className='login'>
        <form onSubmit={handleSubmit}>
          <input type="text"
          name="username"
          placeholder="name" 
          value={newFriend.username}
          onChange={event => onValueChange(event)} />
          <br />
          <input type="text"
          name="password" placeholder="password" 
          value={newFriend.password}
          onChange={event => onValueChange(event)} />
          <button onSubmit={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login;