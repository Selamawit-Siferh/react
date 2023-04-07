import React, { Component } from 'react'
class BodyComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
    
            <div className='body bodyfont'>this is apencil<i className='fa fa-pencil fa-3x'></i>
            <br></br>
            <div><label>FirstName:</label>
                <input type='text' placeholder='Fname'></input></div>
                <br></br>
                <div><label>LastName:</label>
                <input type='text' placeholder='Lname'></input></div>
                <br></br>
            <div><label>email:</label>
                <input type ='text' placeholder='email'></input></div>
                <br></br>
                <div><label>password:</label>
                <input type='password' placeholder='password'></input></div>
                <br></br>
                <button type='submit'></button>
                </div>
          
        );
    }
}

export default BodyComponent;