import React, { Component } from "react";
import { Link } from "react-router-dom";
import './App.css';

function nav(){
  return(
    
     <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <link class="navbar-brand" href="/index.html">Website Name</a>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="/signup.html"
              ><span class="glyphicon glyphicon-user"></span> Sign Up</a
            >
          </li>
          <li>
            <a href="/login.html"
              ><span class="glyphicon glyphicon-log-in"></span> Login</a
            >
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default nav;
