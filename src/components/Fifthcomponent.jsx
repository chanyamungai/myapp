import { useState } from "react"

const Fifthcomponent = () =>{
    // the useState Hook enables us to create dynamic website whereby it usually has a start/intial state followed by state that get shown when some effects happen on our website
    const[number , setnumber] = useState(10)
    return(
        <div className="Fifthcomponent">
            {/* Below we bind our value or number */}
            <h1>Welcome to my fifth component</h1>

            <h2>Current number is:{number}</h2>

            {/* Call the Setnumber function to update the number after click effect */}
            <button onClick={() =>setnumber(20)}>Click to update the number</button>
        </div>
    )
}

export default Fifthcomponent

// // Create a Sixthcomponent.jsx. Inside of it, have the useState with the initial value of weight being 50Kgs, have a button to update the weight to 55kgs when the button is clicked. Render the component on App.js.
// Research on routing in Reactjs.