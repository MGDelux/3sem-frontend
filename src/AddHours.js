import React, { useState,useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import test from './getInvoice';
import addHours from './InsertHours';

import {button, Breadcrumb, Card, Form, Container, Row, Col,Table} from "react-bootstrap"
function AddHours({}) {
    const init = { name: "", hours : 0.0,  userstory: "", description: "" };
    const [DataFire, setData] = useState(init);
  
    const submitData = (evt) => {
      console.log("log in")
      evt.preventDefault();
      fire(DataFire.name, DataFire.hours, DataFire.userstory,DataFire.description);
    }
    const onChange = (evt) => {
      setData({ ...DataFire,[evt.target.id]: evt.target.value })
    }
  
    const fire = (name, hours, userstory, description) => 
    {
        addHours(name, hours, userstory, description)
      
     } 
   
  return (
    <div>
     <h3>Insert new Hours!</h3>
     <div>
   
     <div className="form-group">
                    <form classname="" onChange={onChange}>
                  <label>Project you Worked on:</label>
                  <input id="name" className="form-control" placeholder="Project Name" />
                  <label>Hours:</label>
                  <input id="hours" type="number" className="form-control" placeholder="Hours" />
                  <label>User Story:</label>
                  <input id="userstory" type="text" className="form-control" placeholder="User Story" />
              
                  <label>Description</label>
                  <input id="description" type="text" className="form-control" placeholder="Description" />
                  </form>
                  <br></br>
                  <button onClick={submitData} className="btn btn-primary btn-block">Submit Hours</button>
  
              </div>
              
     </div>
     
    </div>
  )
  
  }
  export {AddHours};