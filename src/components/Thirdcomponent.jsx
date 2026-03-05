const Thirdcomponent = () =>{
    // Variable enables us to create dynamic websites. (It means the contents of the website will be changing over time.)
    // Below we declare some varibles. Note: variables are usually declared just before the return statement in Reactjs.

    let name ="Chanya"
    let age =18
    let message="I love programming "
    return(
        <div className="Thirdcomponenet">
            {/* Below we bind our variables We use the variable names that we use */}
            <h1>Welcome to my third componenet</h1>
            <h5>My name is :{name}</h5>
            <h5>My age is{age}</h5>
            <h5>And{message}</h5>
        </div>
    );
}

export default Thirdcomponent;