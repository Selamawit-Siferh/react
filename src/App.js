
import './App.css';
import'../src/styles/selam.css';

import profile from"./image/p.png"
import email from"./image/email.png"
 import password from"./image/pass.png"
import LogoComponent from './components/common/LogoComponent';
import NavComponent from './components/common/NavComponent';
import HomeComponent from"./components/page/HomeComponent";
import ContactusComponent from"./components/page/ContactusComponent";
import AboutusComponent from"./components/page/AboutusComponent";
import HistoryComponent from"./components/page/HistoryComponent"
import SignupComponent from './components/page/SignupComponent';
import {BrowserRouter as Router,Route,Routes}from 'react-router-dom';
import BodyComponent from './components/common/BodyComponent';
import FooterComponent from'./components/common/FooterComponent'


function App() {
  return ( <div className="main">
 

<LogoComponent></LogoComponent>
<NavComponent></NavComponent>
 

<Router>  
    <div className='container'>
     
      <Routes> 
        <Route path='/' element = {<HomeComponent/>} />
        <Route path='/About Us' element = {<AboutusComponent/>} />
        <Route path='/Contact Us' element = {<ContactusComponent/>} />
        <Route path='/History' element = {<HistoryComponent/>} />
        <Route path='/Home' element = {<HomeComponent />} />
        <Route path='/Home' element = {<AboutusComponent />} />
        <Route path='/SignUP' element = {<SignupComponent />} />
      </Routes>
    </div>
    </Router>



   

    <div className="class">
  <div class="sub-class">
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
          <div><p className="link"><a href="login page">forgot password</a> or <a href="SignUP">not registered?d</a></p></div>     
        </div>
        </div> 
    </div>
    <FooterComponent></FooterComponent>
  </div>



  
  );
}

export default App;
