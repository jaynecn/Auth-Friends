import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './axios/axiosAuth';


export function FriendsList() {

  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth().get('/api/friends')
      .then(res => {
        setFriends(res.data);        
      })
  }, [])


  return (
    <div>
    {
      friends.map((info) => (
        <p key={info.id}>{info.name}</p>
      ))
    }
    </div>
    );
}
