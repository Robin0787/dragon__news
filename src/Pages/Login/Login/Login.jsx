import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../../Providers/AuthProvider/AuthProvider';

const Login = () => {
  const {signInUser} = useContext(authContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || '/';

    function loginSubmit (e) {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
        .then((res) => {
          toast.success('Successful');
          form.reset();
          navigate(from, {replace: true});
        })
        .catch(err => {
          console.log(err.message);
          toast.error(err.message.slice(22,-2).replace(/-/g,' '));
        })
    }
    return (
       <Container className='mx-auto w-25'>
         <Form className='border p-3 rounded' onSubmit={loginSubmit}>
         <h3 className='text-center'>Login</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' required/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password'  required/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
      <br />
      <Form.Text>Don't have an account? <Link to={'/register'}>Register</Link></Form.Text>
    </Form>
       </Container>
    );
};

export default Login;