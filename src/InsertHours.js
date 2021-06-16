const URL = "https://solidcode.xyz/3semEksame/api/";
 


function addHours(part1, part2, part3,part4) {
  const token = localStorage.getItem('jwtToken')
  const options = makeOptions("POST", true,{Project: part1, Hours: part2, UserStory: part3, Description: part4 });
  return fetch(URL+"projects/AddProjectHours",options).then(res => res.json())
  .then(
    (result) => {
     console.log(result)
     if(result.code == 500){
      alert(result.message)
     }else{
      alert(result)
     }
      
    
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

  
  export default addHours;


  