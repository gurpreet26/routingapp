import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Home from './home';
import Profile from './profile';
import Post from './post';
import PostDetails from './postDetails';

    const Routing = () =>{
    return (
        <BrowserRouter >
            <header>
                        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span> 
                </button>
                <a class="navbar-brand" >Routing APP</a>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav">
                    
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/profile">Profile</Link></li> 
                    <li><Link to="/post">Post</Link></li> 
                
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                    <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                </ul>
                </div>
            </div>
            </nav>
                       
            </header>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/profile" component={Profile}></Route>
                    <Route exact path="/post" component={Post}></Route>
                    <Route exact path="/post/:topic" component={PostDetails}></Route>
        </BrowserRouter>
    )

    }
    export default Routing;