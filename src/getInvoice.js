const URL = "https://solidcode.xyz/3semEksame/api/";
 


function test(message) {
    
    

var value = "";

  const token = localStorage.getItem('jwtToken')
  const options = makeOptions("POST", true,{Project: message });
  return fetch(URL+"projects/GetInvoice",options).then(res => res.json())
  .then(
    (result) => {
      value = result;
      console.log(result);
      alert("Project: " + result.projectName + "\n ''" + result.projectDescription+ "'' \n  total time spendt on project: "+result.totalTime + "hours \n  total Cost: " + result.totalPrice + "kr.")
    
    },
    
  )
}
 

const getToken = () => {
  return localStorage.getItem('jwtToken')
}
  
  const makeOptions= (method,addToken,body) =>{
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
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  }

  
  export default test;


  