import React, { useState } from 'react';

function Login() {

  const [newFriend, setNewFriend] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    console.log(newFriend);
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
        <form onSubmit={event => handleSubmit(event)}>
          <input type="text"
          name="name"
          placeholder="name" 
          value={newFriend.name}
          onChange={event => onValueChange(event)} />
          <br />
          <input type="text"
          name="password" placeholder="password" 
          value={newFriend.password}
          onChange={event => onValueChange(event)} />
          <button onSubmit={event => handleSubmit(event)}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login;