import React, { useState } from 'react';
import logo from './logo.svg';
import Member from './Member';
import Form from './Form';
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
  }]);

  const addNewMember = member => {
    const newMember = {
      name: member.name,
      email: member.email,
      role: member.role
    };

    setTeam([...team, newMember]);
  }

  return (
    <div className="App">     
      <div>
        {team.map(member => {
          return <Member data={member} />
        })}
      </div>
      <Form addNewMember={addNewMember}/>
    </div>
  )
}

export default App;
