import React, { useState,useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import test from './getInvoice';
import AddDev from './insetDev';

import {button, Breadcrumb, Card, Form, Container, Row, Col,Table} from "react-bootstrap"
function AssignDev({}) {
    const init = { name: "", project: "" };
    const [DataFire, setData] = useState(init);
  
    const submitData = (evt) => {
      evt.preventDefault();
      fire(DataFire.name, DataFire.project,);
    }
    const onChange = (evt) => {
      setData({ ...DataFire,[evt.target.id]: evt.target.value })
    }
  
    const fire = (name, project,) => 
    {
        AddDev(name, project)
      
     } 
   
  return (
    <div>
     <h3>Add dev to a new Project!</h3>
     <div>
   
     <div className="form-group">
                    <form classname="" onChange={onChange}>
                  <label>Devs username</label>
                  <input id="name" className="form-control" placeholder="Devs username" />
            
                  <label>Project to be assigned</label>
                  <input id="project" type="text" className="form-control" placeholder="Project to be assigned" />
                  </form>
                  <br></br>
                  <button onClick={submitData} className="btn btn-primary btn-block">Add to project </button>
  
              </div>
              
     </div>
     
    </div>
  )
  
  }
  export {AssignDev};