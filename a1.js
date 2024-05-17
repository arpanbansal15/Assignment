/*********************************************************************************
* WEB700 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Arpan Bansal      Student ID: 133554238      Date: 16/05/2024
*
********************************************************************************/



function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }
  

const serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
const serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
const serverResponses = [
  "Welcome to WEB700 Assignment 1",
  "This assignment was prepared by Arpan Bansal",
  "Arpan Bansal: abansal34@myseneca.ca",
  "User Logged In",
  "Main Panel",
  "Logout Complete"
];


function webServerSimulator(verb, path) {
  
  const index = serverVerbs.findIndex((v, i) => v === verb && serverPaths[i] === path);

  
  if (index !== -1) {
    return serverResponses[index];
  } else {
    return "404 Not Found";
  }
}


console.log(webServerSimulator("GET", "/")); 
console.log(webServerSimulator("GET", "/about")); 
console.log(webServerSimulator("POST", "/login")); 
console.log(webServerSimulator("GET", "/invalid"));

function httpRequest(httpVerb, path) {
    
    for (let i = 0; i < serverPaths.length; i++) {
      
      if (serverVerbs[i] === httpVerb && serverPaths[i] === path) {
        
        return `200: ${serverResponses[i]}`;
      }
    }
  

    return `404: Unable to process ${httpVerb} request for ${path}`;
  }
  
  // Testing the httpRequest functon
  console.log(httpRequest("GET", "/")); 
  console.log(httpRequest("GET", "/about")); 
  console.log(httpRequest("PUT", "/"));

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }
  
 
  const testVerbs = ["GET", "POST"];
  const testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];
  
 
  function automateTests() {
    function randomRequest() {
      const randVerbIndex = getRandomInt(testVerbs.length - 1);
      const randPathIndex = getRandomInt(testPaths.length - 1);
      const randVerb = testVerbs[randVerbIndex];
      const randPath = testPaths[randPathIndex];
      console.log(httpRequest(randVerb, randPath));
    }
    

    setInterval(randomRequest, 1000);
  }
  
  
  automateTests();
  