import React, { Component } from 'react'
import { Button, Modal, Form, } from 'react-bootstrap';
import axios from 'axios'
// import { render } from '@testing-library/react';



class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: '',
    show: false
  };
  // [show, setShow] = useState(false);

  // handleClose = () => setShow(false);
  // handleShow = () => setShow(true);

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }; // makes the form fillable

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state)
    axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, this.state)
      .then(res => {
        console.log(res);
        this.close()
        this.props.history.push('/login');
      }).catch(err => {
        console.log(err.response);
      }); // on submit
  };

  open = () => {
    this.setState({ show: true })
  }

  close = () => {
    this.setState({ show: false })
  }

  render() {
    return (
      <>
        <Button onClick={this.open}> Sign Up!</Button>
        <Modal open={this.state.show} onClose={this.close}>
          <Modal.Header>Register!</Modal.Header>
          <Modal.Content Form>
            <Modal.Description>
              <p>Sign Up!</p>
            </Modal.Description>
            <div className="container mt-4">
              <div className="row">
                <div className="col-md-4 offset-md-4">
                  <h4 className="mb-3">Register</h4>
                  <Form>
                    <Form.Group controlId="name">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="text" placeholder="Enter Name" />
                      <Form.Text className="text-muted">
                        Enter Name
                      </Form.Text>
                    </Form.Group>
                    
                    <Form.Group controlId="email">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    
                    <Form.Group controlId="password2">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Agree to Terms and Conditions" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
                  {/* <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                      <label htmlFor='name'>Name</label>
                      <input
                        onChange={this.handleChange}
                        className='form-control form-control-lg'
                        type='text'
                        id='name'
                        name='name'
                        value={this.state.name}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label htmlFor='name'>Email</label>
                      <input
                        onChange={this.handleChange}
                        className='form-control form-control-lg'
                        type='email'
                        id='email'
                        name='email'
                        value={this.state.email}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label htmlFor='name'>Password</label>
                      <input
                        onChange={this.handleChange}
                        className='form-control form-control-lg'
                        type='password'
                        id='password'
                        name='password'
                        value={this.state.password}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label htmlFor='password2'>Confirm Password</label>
                      <input
                        onChange={this.handleChange}
                        className='form-control form-control-lg'
                        type='password'
                        id='password2'
                        name='password2'
                        value={this.state.password2}
                      />
                    </Form.Field>
                  </Form> */}
                </div>
              </div>
            </div>
          </Modal.Content>
          <Modal.Actions>
            <button
              className="btn btn-primary float-right"
              onClick={this.handleSubmit}
            >
              Register
            </button>
          </Modal.Actions>
        </Modal>
      </>
    );
  }
}




export default Register;