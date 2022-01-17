import React from "react"
import ReactDOM from "react-dom"

function ProfileBio(){
    return (
        <main className="main-bio">
            <h1>Rishi Patel</h1>
            <p className="designation">Web Developer</p>
            <p ><a href="https://patelrishi.com" className="website-url" target="_blank">patelrishi.com</a></p>
            <div className="btn-content">
                <button className="btn email-btn"><i className="fas fa-envelope"></i> Email</button>
                <button className="btn linkedin-btn"><i className="fab fa-linkedin-in"></i> LinkedIn</button>
            </div>
            <div className="bio-container">
                <div className="about-me">
                    <h3 className="heading">About</h3>
                    <p>I am a Web Developer with a degree in Computer Science from York University, Canada. I work a a Junior Developer for Propel Holdings Inc. which is a fintech company based in Toronto, Ontario. I am an avid learner and quite enthusiatic about learning new things happening in the world of tech. </p>
                
                </div>
                <div className="interests"> 
                    <h3 className="heading">Interests</h3>
                    <p>Movies, Code, Front End Development, reading, photography. </p>
                </div>
            </div>
            
            <footer className="footer">
                <div className="footer-list">
                    <button><i className="fab fa fa-twitter"></i></button>
                    <button><i className="fab fa fa-facebook"></i></button>
                    <button><i className="fab fa fa-instagram"></i></button>
                    <button><i className="fab fa fa-github"></i></button>
                </div>
            </footer>
            
            
       
        </main>
    )    
}

export default ProfileBio;