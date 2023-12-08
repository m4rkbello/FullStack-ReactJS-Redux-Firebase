import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../store/actions/projectActions';



class CreateProject extends Component {
    state = {
        title: '',
        content: ''
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
        // console.log(this.state);
        this.props.createProject(this.state)
    }

  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className='white'>
        <h5 className='grey-text text-darken-3'>Create a Project</h5>
 
        <div className='input-field'>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' onChange={this.handleChange}/>
        </div>
        <div className='input-field'>
        <label htmlFor='content'>Project Content</label>
        <textarea id='content' onChange={this.handleChange}> </textarea>
        </div>
        <div className='input-field'>
       <button className='btn pink ligthen-1 z-depth-0'>Create</button>
        </div>
        </form>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return{
    createProject: (project) => dispatch(createProject(project)) 
  }
}

export default connect(null, mapDispatchToProps)(CreateProject)
