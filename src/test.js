import React, { useState,useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import test from './getInvoice';
import create from './createProject';

import {button, Breadcrumb, Card, Form, Container, Row, Col,Table} from "react-bootstrap"



function Created({}) {
  const init = { name: "", description: ""};
  const [DataFire, setData] = useState(init);

  const submitData = (evt) => {
    console.log("log in")
    evt.preventDefault();
    fire(DataFire.name, DataFire.description);
  }
  const onChange = (evt) => {
    setData({ ...DataFire,[evt.target.id]: evt.target.value })
  }

  const fire = (username, description) => 
  {
    create(username,description)
    
   } 
 
return (
  <div>
   <h3>CREATE NEW PROJECT:</h3>
   <div>
 
   <div className="form-group">
                  <form classname="" onChange={onChange}>
                <label>Project Name</label>
                <input id="name" className="form-control" placeholder="Project Name" />
            

            
                <label>Description</label>
                <input id="description" type="text" className="form-control" placeholder="Description" />
                </form>
                <button onClick={submitData} className="btn btn-primary btn-block">Add project</button>

            </div>
            
   </div>
   
  </div>
)

}





  const MyComponent = ()  =>{
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const[searchterm, SetsearchTerm] = useState("Sia")


    useEffect(() => {
      const search = async() => {
        const options = makeOptions("GET", true);
     await fetch("http://localhost:8080/SolidCode-BackEnd/api/projects/all",options)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
            console.log(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
          
        )
      }
      if(searchterm){
        search()
    }
      
    }, [searchterm])
    const resultMap = items.map(item => {
      return(
          <>
          <tr>  
          <td className="td_image">
            <img className="td_image" src = {item.header_image_thumbnail_url} ></img>
               {item.projectName}

          </td>
      
        <td > {item.projectDescription} 
        </td>
          <td > 
            {item.devs.map(opt =>
            <> [{opt.name}]</>
              
              )} 
          </td>
          <td> <button onClick={test.bind(this,item.projectName)} className="btn btn-primary btn-block">Get Invoice</button></td>
          </tr>
          </>

          
      )
      })
      return (

        <> 
          
         <br></br>
   
         <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th scope="col">ProjectName</th>
            <th scope="col">Description</th>
            <th scope="col">Devs assigned</th>
            <th scope="col">Options:</th>
          </tr>
        </thead>
        <tbody>

           {resultMap}
           </tbody>
          </Table>
         <div id="root"></div>
         
      </>
   )
   }

  


  const getToken = () => {
    return localStorage.getItem('jwtToken')
  }
const makeOptions= (method,addToken) =>{
    var opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        'Accept': 'application/json',
      }
    }
    if (addToken) {
      opts.headers["x-access-token"] = getToken();
    }
    return opts;
  }


  export {MyComponent , Created};


