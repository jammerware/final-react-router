import React, { Component } from "react";
import './App.css';

function nav(){
  return(
     <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="/index.html"></a>
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
