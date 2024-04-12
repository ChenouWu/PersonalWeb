import React from "react";
import'./App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "./Pages/Home/Homscreen";
import NavBar from "./Pages/Home/Navbar";

function App(){
    return(
        <div>
          <Router>
            <div>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="*" element={<div>404 NOT Found</div>}></Route>
                </Routes>
            </div>
          </Router>
        </div>
    )
}
export default App;