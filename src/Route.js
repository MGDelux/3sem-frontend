import "./style2.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
  } from "react-router-dom";
  import {MyComponent,Created,}from "./test.js";
  import {AddHours} from "./AddHours";
  import {AssignDev} from "./AssignDev"
  import {FetchDevs} from "./FetchDevs"

  export default function BasicExample() {
    return (
        <>
      <Router>
        <div>
          <ul className="header">
            <li>
            <NavLink exact activeClassName="selected" to="/">Home</NavLink>
            </li>
            <li>
            <NavLink exact activeClassName="selected" to="/Endpoint1">All Projects</NavLink>
            </li>
            <li>
            <NavLink exact activeClassName="selected" to="/Endpoint3">Create Project</NavLink>
            </li>
            <li>
            <NavLink exact activeClassName="selected" to="/Endpoint2">Record Hours</NavLink>
            </li>
            <li>
            <NavLink exact activeClassName="selected" to="/AssignDev">AssignDev</NavLink>
            </li>
          </ul>
  
          <hr />
  
          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <div className="content"></div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Endpoint1">
              <Endpoint1 />
            </Route>
            <Route path="/Endpoint3">
              <Endpoint3 />
            </Route>
            <Route path="/Endpoint2">
              <Endpoint2 />
            </Route>
     
            <Route path="/AssignDev">
            <MyComponent/>

            <FetchDevs/>

              <AssignDev />
            </Route>
          </Switch>
        </div>
      </Router>
      </>
    );
  }
  
  // You can think of these components as "pages"
  // in your app.
  
  function Home() {
    return (
      <div>
        <h2>Home</h2>
        <p>Welcome.</p>
      </div>
    );
  }
  
  function Endpoint1() {
    return (
      <div>
        <h2>Current Projects</h2>
        <MyComponent/>
      
      </div>
    );
  }
  function Endpoint2() {
    return (
      <div>
    
       <AddHours/>
      </div>
    );
  }

  function Endpoint3() {
    return (
      <div>
        <h2>Current Projects</h2>
        <MyComponent/>
       <Created/>
      </div>
    );
  }
  
  
 
 
  
 
