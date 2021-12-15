import React from 'react'
import { useHistory } from 'react-router'

export default function Signout() {
  const history = useHistory();
  const handleClick = () => {
    localStorage.clear();
    history.push('/');
  }
  return (
    <div className="signout">
      <button onClick={handleClick()}>Sign out</button>
    </div>
  )
}
