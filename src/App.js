import React, { useState,useEffect, Component } from "react"
import facade from "./apiFacade";
import test, {MyComponents,getNorris} from "./test";
import {button, Breadcrumb, Card, Form, Container, Row, Col,Table} from "react-bootstrap"
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BasicExample from "./Route";

function LogIn({ login }) {
  const init = { username: "", password: "", role: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);
 
  const performLogin = (evt) => {
    console.log("log in")
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password, loginCredentials.role);
  }
  const onChange = (evt) => {
    setLoginCredentials({ ...loginCredentials,[evt.target.id]: evt.target.value })
  }
 
  return (
  <Container container-md>
    <div classname= "w-responsive text-center mx-auto p-3 mt-2">
     <Card classname="mb-3">
       <Card.Img width="70%" src="https://miro.medium.com/max/1000/1*TjDnfpnw4gI8sZ2fvaK9zg.jpeg"/>
       <Card.Body>
      <form classname="login-form" onChange={onChange}>
        <Card.Title>
                <h2>3. SEM eksamensprojekt</h2>
        </Card.Title>
        <Card.Text>
        Log ind.
      </Card.Text>
                <div className="form-group">
                
                    <label>Username</label>
                    <input id="username" className="form-control" placeholder="User Name" />
                

                
                    <label>Password</label>
                    <input id="password" type="password" className="form-control" placeholder="Password" />
                    
                </div>
                <label for="role">Choose Account Role: </label>
                <br></br>
  <select name="role" id="role">
    <option value="admin">Administrator</option>
    <option value="dev">Developer</option>
    <br></br>     <br></br>
   <hr></hr>
  </select>
                <button onClick={performLogin} className="btn btn-primary btn-block">Submit</button>
      </form>
      
      </Card.Body>
      </Card>
      </div>
    </Container>
  )
 
}
function LoggedIn() {
  const [dataFromServer, setDataFromServer] = useState("Loading...")
  useEffect(
    () => {
    facade.fetchData().then(data=> setDataFromServer(data.msg));
  },
   [])
 
  return (
    <>
    
    <div>
      <h3>{dataFromServer}</h3>
    </div>
    <BasicExample/>
</>
  )
 
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
 
  const logout = () => { 
  facade.logout()
  setLoggedIn(false)
} 
  const login = (user, pass, role) => 
  {
    facade.login(user,pass, role)
    .then(res =>setLoggedIn(true));
   } 
 
  return (
    <div>
      {!loggedIn ? (<LogIn login={login} />) :
        (<div>
          <LoggedIn />
          <button onClick={logout}>Logout</button>
        </div>)}
    </div>
  )
 
 
}
export default App;
 
