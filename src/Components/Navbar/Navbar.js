import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, Carousel, Form, FormControl, Button} from 'react-bootstrap'
import  Register  from '../Auth/Register'

class Navbarus extends Component {
  render(){
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="/">Airhorn</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#features">How to Play</Nav.Link>
        {/* <Nav.Link href="/register"><Register>Sign Up</Register></Nav.Link> */}
        {/* <Nav.Link href="#pricing">Login</Nav.Link> */}
        <Nav.Link href="/game">Play</Nav.Link>
      </Nav>
      {/* <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form> */}
    </Navbar>
  )
  }
  //   <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
  //     <div className='container'>
  //       <Link className='navbar-brand' to='/'>
  //         Bullhorn
  //       </Link>
  //       <button
  //         className='navbar-toggler'
  //         type='button'
  //         data-toggle='collapse'
  //         data-target='#navbarsExample04'
  //         aria-controls='navbarsExample04'
  //         aria-expanded='false'
  //         aria-label='Toggle navigation'
  //       >
  //         <span className='navbar-toggler-icon'></span>
  //       </button>

  //       <div className='collapse navbar-collapse' id='navbarsExample04'>
  //         <ul className='navbar-nav ml-auto'>
  //           <li className='nav-item'>
  //             <NavLink className='nav-link' exact to='/'>
  //               Home
  //             </NavLink>
  //           </li>
  //           {props.currentUser ? (
  //             <>
  //               <li className='nav-item'>
  //                 <NavLink className='nav-link' to='/profile'>
  //                   Profile
  //                 </NavLink>
  //               </li>
  //               <li onClick={props.logout} className='nav-item'>
  //                 <button className=' btn btn-danger'>Logout</button>
  //               </li>
  //             </>
  //           ) : (
  //             <>
  //               <li className='nav-item'>
  //                 <NavLink className='nav-link' to='/register'>
  //                   Register
  //                 </NavLink>
  //               </li>
  //               <li className='nav-item'>
  //                 <NavLink className='nav-link' to='/login'>
  //                   Login
  //                 </NavLink>
  //               </li>
  //             </>
  //           )}
  //         </ul>
  //       </div>
  //     </div>
  //   </nav>
  // );
};

export default Navbarus;
