import { updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { authContext } from '../../../Providers/AuthProvider/AuthProvider';

const Register = () => {
    const [acceptTerms, setAcceptTerms] = useState(false);
    const {createUser} = useContext(authContext);

    function handleRegister (e) {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const img_url = form.img_url.value;
        createUser(email,password)
        .then((result) => {
            toast.success('Successful');
            updateProfile(result.user, {displayName: name, photoURL: img_url});
            form.reset();
        })
        .catch(err => toast.error(err.message.slice(22,-2).replace(/-/g,' ')));
    }
    return (
        <Container className='mx-auto w-25'>
            <Form className='border p-3 rounded' onSubmit={handleRegister}>
            <h3 className='text-center'>Register</h3>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name='email'required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicImage">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="text" name='img_url'required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" onClick={(e) => setAcceptTerms(e.target.checked)} label="Accept Terms & Conditions" />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!acceptTerms}>
                    Register
                </Button>
                <br />
                <Form.Text>Already have an account? <Link to={'/login'}>Login</Link></Form.Text>
            </Form>
        </Container>
    );
};

export default Register;