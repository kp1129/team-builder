import React from 'react';

const Member = (props) => (
    <div>
        <h3>member</h3>
        <p>Name: {props.data.name}</p>
        <p>Email: {props.data.email} </p>
        <p>Role: {props.data.role}</p>
    </div>
);

export default Member;