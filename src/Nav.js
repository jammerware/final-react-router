import React, { Component } from "react";
import { Link } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav(){
  return(
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
      crossorigin="anonymous"
    />
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="/index.html">WebSiteName</a>
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

export default Nav;
