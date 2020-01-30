import React, { useState } from 'react';


const Form = (props) => {
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: ""
    });

    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(member);
        setMember({
            name: "",
            email: "",
            role: ""
        });
    }

    const handleChanges = event => {
        setMember({...member, [event.target.name]: event.target.value});
    }

    return (
    <form onSubmit={submitForm}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" onChange={handleChanges} value={member.name}/>
        
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" id="email" onChange={handleChanges} value={member.email}/>
     
        <label htmlFor="role">Role:</label>
        <input type="text" name="role" id="role" onChange={handleChanges} value={member.role}/>

        <button type="submit">add member</button>
    </form>
)};

export default Form;