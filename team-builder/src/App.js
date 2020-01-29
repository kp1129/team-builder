import React, { useState } from 'react';
import logo from './logo.svg';
import Member from './Member';
import './App.css';

function App() {
  const [team, setTeam] = useState([{
    name: 'Katya',
    email: 'katya@email.com',
    role: 'react developer'
  }, {
    name: 'Christina',
    email: 'christina@lambdaschool.com',
    role: 'instructor'
  }])

  return (
    <div className="App">     
      <div>
        {team.map(member => {
          return <Member data={member} />
        })}
      </div>
    </div>
  )
}

export default App;
