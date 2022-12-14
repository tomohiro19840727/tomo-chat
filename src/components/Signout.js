import React from 'react'
import { auth } from '../firebase'

function Signout() {
    
  
  return (
    <button onClick={() => auth.signOut()}>サインアウトする</button>
  )
}

export default Signout
