import React from "react";

const Exercise4 = () => {
    return(
    <>
        <h1 style={{color: "red", backgroundColor: "lightblue"}}>This is a header</h1>
        <p>This is a paragraph</p>
        <a>This is a link</a>
        <form>This is a form:
            <input type="text" placeholder="Enter your name"/>
            <input type="submit" value="Submit" />
        </form>
        <img src="https://thenewstack.io/learn-react-start-of-a-frontend-dev-journey/"></img>
        <ul>This is a list
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
        </ul>
    </>
    );
}

export default Exercise4;