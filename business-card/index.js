import React from "react"
import ReactDOM from "react-dom"
import ProfileImage from "./components/ProfileImage"
import ProfileBio from "./components/ProfileBio"
function App(){
    return (
        <div className="container-main">
            <ProfileImage />
            <ProfileBio />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root")); 

