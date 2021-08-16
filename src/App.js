import React, { useRef } from "react";
import { FaReact, FaSyncAlt, FaSave, FaHome } from "react-icons/fa";

import { BsGraphUp } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
function ContentDisplayBox() {

  return (

    <div className="contentDisplayBox">
      <Switch>
        <Route exact path="/Stocks">
          <Stocks/>
      </Route>
      <Route exact path="/Home">
        <Home/>
      </Route>
      <Route exact path="/Login">
        <Login/>
      </Route>
      </Switch>
    </div>
    
  );
}

function App() {
  return (
    <Router>
    <div className="inner">
      <div className="leftSideBar">
        <div className="logoDiv">
          <FaReact className="circularRotation" />
        </div>
        <div className="leftInnerBar">
          <Link className="link" to = "/Home">
            <div className="outerClickableButton">
              <FaHome className="clickableButton" />
            </div>
          </Link>
          <Link className="link" to = "/Stocks">
            <div className="outerClickableButton">
              <BsGraphUp className="clickableButton" />
            </div>
          </Link>
          <Link className="link" to = "/Login">
            <div className="outerClickableButton">
              <BiLogIn className="clickableButton" />
            </div>
          </Link>
          <div className="outerClickableButton mgta">
            <FaSave className="clickableButton" />
          </div>
          <div className="outerClickableButton">
            <FaSyncAlt className="clickableButton" />
          </div>
        </div>
      </div>
      <div className="rightPanel">
        <div className="topBar noselect">Inventory</div>
        <div className="lowerPanel">
          <ContentDisplayBox />
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
function Stocks()
{
  let st = false;
  function handleClickEvent() {
    let name;
    st = !st;
    if (st) name = "shows";
    else name = "hides";
    let x = document.getElementById("inputContainer");
    // x.childNodes[0].value = "";
    // x.childNodes[1].value = "";
    x.style.animationName = name;
  }
  return(
    <>
       <h2>Stocks</h2>
      <div className="listContainer">
        <input className="itm1" placeholder="Search"></input>
        <button className="itm3" onClick={handleClickEvent}>
          Add +
        </button>
      </div>
      <div className="rowContainer" id="inputContainer"></div>
      <h2>Items</h2>
    </>
  )
}
function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
function Login(){
  return(
    <div>Login Page</div>
  );
}