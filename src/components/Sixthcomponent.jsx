import { useState } from "react";

const Sixthcomponent =() =>{
    
    const[weight, setnumber] = useState(50)
    return(
        <div className="Sixthcomponenet">
            <h1>Welcome to my sixth component</h1>

            <h2>The weight of the person is{weight}</h2>

            <button onClick={()=>setnumber(55)}>Click here to update the number</button>

        </div>
    );
}

export default Sixthcomponent;

// Routing in react is how you mve from one componenet to another in a single page application
// React Router is a library that provides routing capabilities for React applications
// components of basic routing:
// 1.Links creats a navigaion links that update the URL
// 2.Routes component that holds all your route definitions
// 3.Route defines  a mapping between a URL path and a component 
// 4.Router usually wraps your entire routing structure

// Install the react router
// npm install react-router-dom

// import the routing
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// App component 
// // functio App(){
//     // return(
//         <Router>
//             <div>
//                 <h1>Welcome to my routing</h1>
//             </div>
//              {/* Then we create navigation links */}
//             <nav>
//                 <Link to ="/first"Go to first component <Link/>
//             </nav>
//             {/* We then create routes that will be linked  */}
//             <Route path ="/first" element ={<Firstcomponenet/>}/>
       
//         </Router>
//     // )
//  }
