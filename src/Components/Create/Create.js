import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';

const Create = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const navigate = useNavigate();

    const postData = async () => {
        try {
            await axios.post(`https://64f5814f2b07270f705d4c29.mockapi.io/fakeData`, {
                firstName,
                lastName,
                checkbox,
            });
            navigate('/read');
        } catch (error) {
            // Handle errors here
            console.error('Error posting data:', error);
        }
    };
    return (
        <div>
            <h3>Create Page</h3>
            <Form className='create-form'>
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)} />
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default Create
