import React, { Component } from 'react'
import"../common/styl/selome.css"

const SignupComponent = () => {
    return (
        <div className="main">
    
        <h1>SignUp page</h1>
        <br></br>
        <div>
       <lable>Full name:</lable><br></br>
        <input type="text"placeholder="Name"className="name"/>
          </div>
          <br></br>
          <div>
       <lable>Email:</lable><br></br>
        <input type="text"placeholder="EmailAddress"className="name"/>
          </div>
          <br></br>
          <div>
       <lable>Username:</lable><br></br>
       
        <input type="text"placeholder="Username"className="name"/>
          </div>
          <br></br>
          <div className="second-input">
          <lable>Password:</lable><br></br>
       
        <input type="password"placeholder="password"className="name"/>
          </div>
          <br></br>
          <div className="second-input">
          <lable>Repeat Password:</lable><br></br>
          
       
        <input type="password"placeholder="password"className="name"/>
          </div>
          <br></br>
          <div className="lobut"><button>SignUp</button></div>
          <div><p className="link"><a href="#">forgot eamil,password ?</a> or`` <a href="login">login Here</a></p></div>
          
           <div className="main"> 
    
    
      </div>     
        </div>
    );
}

export default SignupComponent;