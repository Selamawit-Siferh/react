import React, { PureComponent } from 'react'
import profile from"./photo/p.png"
import email from"./photo/email.png"
import password from"./photo/pass.png"
import "../common/styl/haile.css";
const login = () => {
    return (<div>
         <div className="main">
  <div class="sub-main">
      <div>
      <div className="imgs">
      <div className="container-image">
      <img src={profile}alt="profile" className="profile"/>
      </div> 
      </div>
      <div><h1>login page</h1></div>
        
        <div>
        <img src={email}alt="email" className="email"/>
        <input type="text"placeholder="username"className="name"/>
          </div>
        <div className="second-input">
        <img src={password}alt="password" className="email"/>
        <input type="password"placeholder="password"className="name"/>
          </div>
          <div className="lobut"><button>login</button></div>
          <div><p className="link"><a href="#">forgot password</a> or <a href="#">signup</a></p></div>     
        </div>
        </div> 
    </div>
    </div>
        
    );
}

export default login;