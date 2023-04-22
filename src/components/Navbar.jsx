import React from "react";
import '../components/Navbar.css'

function Navbar(){
    return(
        <div className="navbar">
            <div>
                
                <img className="logo" src="..\src\assets\images\netflix logo.png" alt="Netflix logo" />
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <a href="#" className="underline">Home</a>
                    </li>
                    <li>
                        <a href="#" className="underline">Movies</a>
                    </li>
                    <li>
                        <a href="#" className="underline">TV Shows</a>
                    </li>
                    <li>
                        <a href="#" className="underline">My list</a>
                    </li>
                </ul>
            </div>
            <div className="avatar-search" id="toggle-switch">
                <img className="search-icon" src="..\src\assets\images\search-icon.png" alt="" />
                <img className="avatar" src="..\src\assets\images\netflix-avatar.png" alt="" />
            </div>
        </div>
    )
}
export default Navbar;