import React, { useState,useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import test from './getInvoice';
import create from './createProject';

import {button, Breadcrumb, Card, Form, Container, Row, Col,Table} from "react-bootstrap"
const FetchDevs = ()  =>{
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const[searchterm, SetsearchTerm] = useState("dated")


    useEffect(() => {
      const search = async() => {
        const options = makeOptions("GET", true);
     await fetch("https://solidcode.xyz/3semEksame/api/dev/",options)
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
          <td className="td_image">{item.name} </td>
      
        <td > {item.phoneNr} </td>
        
          <td>{item.billingPrHour}kr.</td>
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
            <th scope="col">Name</th>
            <th scope="col">phoneNr</th>
            <th scope="col">billingPrHour</th>
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

export {FetchDevs}