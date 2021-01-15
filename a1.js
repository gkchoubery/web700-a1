/**********************************************************************************  
 * WEB700–Assignment1
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy. 
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students
 * 
 * Name: Geet Kumar Choubey Student ID: 155876196 Date: 15-Jan-2021
 * 
 ********************************************************************************/

 // Step 3
 let serverVerbs = ['GET', 'GET', 'GET', 'POST', 'GET', 'POST'];
 let serverPaths = ['/', '/about', '/contact', '/login', '/panel', '/logout'];
 let serverResponses = ['Welcome to WEB700 Assignment 1', 'This assignment was prepared by Geet Kumar Choubey',
 'Geet Kumar Choubey: gkchoubery@myseneca.ca', 'Login Complete', 'Main Panel', 'Logout Complete'];

 /**
  * Step 4: Web server simulator to simulate requests and responses
  * @param {string} httpVerb as HTTP method
  * @param {string} path for a request 
  * @returns {string} response of the simulator
  */
 const handleRequest = (httpVerb, path) => {
     for (let i = 0; i < serverPaths.length; i++) {
         if (httpVerb === serverVerbs[i] && path === serverPaths[i]) {
             return `200: ${serverResponses[i]}`;
         }
     }
     return `404: Unable to process ${httpVerb} request for ${path}`;
 };

 /**
  * Returns a random number between 0 and specified range
  * @param {number} range 
  */
 const utility = (range) => {
    return Math.floor(Math.random() * Math.floor(range));
 }

 /**
  * Step 6: Automatic testing
  * Runs test cases at intervals
  */
const beginTesting = () => {
    const testVerbs = ['GET', 'POST'];
    const testPaths = ['/', '/about', '/contact', '/login', '/panel', '/logout', '/notFound1', '/notFound2'];
    const randomRequest = () => {
        let randVerb = testVerbs[utility(testVerbs.length)], 
            randPath = testPaths[utility(testPaths.length)];
        console.log(handleRequest(randVerb, randPath));
    }
    setInterval(randomRequest, 1000);
};

beginTesting();

// Gracefully stopping service
process.on('SIGINT', () => {
    console.log('\n\nGracefully stopping service\n\n');
    process.exit(0);
});