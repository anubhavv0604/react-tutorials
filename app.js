import React from "react";
import ReactDOM from "react-dom";


const parent = React.createElement("div", {id: "parent"} , [
    React.createElement("div" , {id: "child"} , [
        React.createElement("h1" , {} , "iam an h1 tag"),
        React.createElement("h2" , {} , "iam an h2 tag"),
    ]), 
    React.createElement("div" , {id: "child2"} , [
        React.createElement("h1", {} , "i am h1 tag"),
        React.createElement("h2", {} , "iam an h2 tag"),
    ]),
    React.createElement("div" , {id: "child3"} , [
        React.createElement("h3" , {} , "iam h3 tag"),
        React.createElement("h4" , {} , "iam an h4 tag"),
    ]),
])

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);