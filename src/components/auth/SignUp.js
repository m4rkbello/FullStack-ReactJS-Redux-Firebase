import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    }

    //function sa email ug password
    handleChange = (x) => {
        // console.log(x);
        this.setState({
            [x.target.id]: x.target.value
        })
    }

    //function sa button
    handleSubmit = (y) => {
       //to prevent close
        y.preventDefault();
        console.log(this.state);
    }

  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className='white'>
        <h5 className='grey-text text-darken-3'>Sign Up</h5>
        <div className='input-field'>
        <label htmlFor='text'>Firstname</label>
        <input type='text' id='firstName' onChange={this.handleChange}/>
        </div>
        <div className='input-field'>
        <label htmlFor='text'>Lastname</label>
        <input type='text' id='lastName' onChange={this.handleChange}/>
        </div>
        <div className='input-field'>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' onChange={this.handleChange}/>
        </div>
        <div className='input-field'>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' onChange={this.handleChange}/>
        </div>
        <div className='input-field'>
       <button className='btn pink ligthen-1 z-depth-0'>Sign up</button>
        </div>
        </form>
      </div>
    )
  }
}

export default SignUp;
