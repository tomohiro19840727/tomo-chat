import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import Sign from './Sign'
import Signout from './Signout';

function Line() {
  const [messages, setMessages] = useState([]);

    useEffect(() => {
      db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      })
    }, []);
    console.log(messages)
  return (
    <div>
      <Sign />
      <div>
      {messages.map(({ id, text, }) => (
        <div key={id}>
          <p>{text}</p>
          
        </div>
      ))}
      </div>
    </div>
  )
}

export default Line
