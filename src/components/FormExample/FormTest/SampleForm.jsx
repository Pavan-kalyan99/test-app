import React, { useState } from 'react'

const SampleForm = () => {
    const [Data, setData] = useState(
        { username: '', pass: '' });

    const { username, pass } = Data;
    const changeHandle = (e) => {
        // ---for single input you can use this 
        // setData(e.target.value)
        setData({ ...Data, [e.target.name]: [e.target.value] })
    }
    const submitForm = (e) => {
        e.preventDefault();
        console.log("my form Data::", Data);

    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <input type='text' value={username} name='username' placeholder='enter...' onChange={changeHandle} />
                <input type='password' value={pass} name='pass' placeholder='password...' onChange={changeHandle} />

                <input type='submit' value='submit' />
            </form>
            <h1>
                user Data::{Data.username}
                user Password::{Data.pass}

            </h1>
        </div>
    )
}


export default SampleForm
