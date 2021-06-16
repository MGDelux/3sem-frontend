import React from 'react'
import { useAlert } from 'react-alert'
const URL = "https://solidcode.xyz/3semEksame";

 
function handleHttpErrors(res) {
 if (!res.ok) {
   return Promise.reject({ status: res.status, fullError: res.json() })
 }
 return res.json();
}

const setToken = (token) => {
    localStorage.setItem('jwtToken', token)
  }
const getToken = () => {
  return localStorage.getItem('jwtToken')
}
const loggedIn = () => {
  const loggedIn = getToken() != null;
  return loggedIn;
}
const logout = () => {
  localStorage.removeItem("jwtToken");
}

 var isadmin = " ";
function apiFacade() {
 /* Insert utility-methods from a latter step (d) here (REMEMBER to uncomment in the returned object when you do)*/
const login = (user, password, role) => {
  isadmin = role;
    const options = makeOptions("POST", true,{username: user, password: password });
    return fetch(URL + "/api/login", options)
      .then(handleHttpErrors)
      .then(res => {setToken(res.token) })

  }
const fetchData = () => { const options = makeOptions("GET",true); //True add's the token
if(isadmin == "dev"){
  console.log(isadmin)
  return fetch(URL + "/api/info/user", options).then(handleHttpErrors);
}else{
  console.log(isadmin)
  return fetch(URL + "/api/info/admin", options).then(handleHttpErrors);

}
}
const makeOptions= (method,addToken,body) =>{
   var opts = {
     method: method,
     headers: {
       "Content-type": "application/json",
       'Accept': 'application/json',
     }
   }
   if (addToken && loggedIn()) {
     opts.headers["x-access-token"] = getToken();
   }
   if (body) {
     opts.body = JSON.stringify(body);
   }
   return opts;
 }
 return {
     makeOptions,
     setToken,
     getToken,
     loggedIn,
     login,
     logout,
     fetchData
 }

}
const facade = apiFacade();
export default facade;
