import './SignInUp.css'
import image1 from '../img/image1.png'
import logo from '../img/logo.png'
import React, { Component, useEffect } from 'react'
import ReactDOM from "react-dom";




export const SignInUp=() =>{

    
    const inputs = document.getElementsByClassName("inputfield");
    const togglebtn = document.getElementsByClassName("toggle");
    const main = document.getElementsByClassName("main");
    const bullets = document.getElementsByClassName("bullets span");
    const images = document.getElementsByClassName("image");
    
   
    useEffect(()=>{
        var arr = [...inputs];

        // arr.map(item=>{console.log(item)})
    
        arr.forEach(inp => {
            inp.addEventListener("focus", () => {
                inp.classList.add("active");
            });
            inp.addEventListener("blur", () => {
                if(inp.value != "") return;
                inp.classList.remove("active");
            });
        });
        
        var btn=[...togglebtn]
        const mains=[...main]
        console.log(arr)
        console.log(mains)
        
        btn.forEach(btn => {
            btn.addEventListener("click", () => {
                mains[0].classList.toggle("sign-up-mode");
            });
        });
    },[])
   

//    const doc=document.getElementsByClassName('inputfield')
//    console.log(doc)
//         React.useEffect(() => {
//           window.addEventListener('keydown', () => {
//             console.log('event')
//           });
//         });
      

    return (
        <main className="main">
        <div class="box">
            <div class="innerbox">
                <div class="forms">
                    <form action="index.html" autocomplete="off" class="signin">
                        <div class="logo">
                            <img src={logo}/>
                            <h3>WEFIFE</h3>
                        </div>
                        <div class="heading">
                            <h2>Welcome Back</h2>
                            <h6>Not Registred Yet?</h6>
                            <a href="#" class="toggle">Sign Up</a>
                        </div>
                        <div class="actualform">
                            <div class="inputbox">
                                <input  type="text" minlength="4" class="inputfield"  autocomplete="off" required/>
                                <label>Username An Email</label>
                            </div>
                            <div class="inputbox">
                                <input  type="password" minlength="4" class="inputfield" autocomplete="off" required/>
                                <label>Password</label>
                            </div>
                            <input type="submit" value="Sign In" class="signbtn"/>
                        </div>
                    </form>
                    <form action="index.html" autocomplete="off" class="signup">
                        <div class="logo">
                            <img src={logo}/>
                            <h3>WEFIFE</h3>
                        </div>
                        <div class="heading">
                            <h2>Get Started</h2>
                            <h6>Already Have An Account?</h6>
                            <a href="#" class="toggle">Sign In</a>
                        </div>
                        <div class="actualform">
                            <div class="inputbox">
                                <input  type="text" minlength="4" class="inputfield"  autocomplete="off" required/>
                                <label>Name</label>
                            </div>
                            <div class="inputbox">
                                <input  type="email" minlength="4" class="inputfield"  autocomplete="off" required/>
                                <label>Enter Your Email</label>
                            </div>
                            <div class="inputbox">
                                <input  type="password" minlength="4" class="inputfield" autocomplete="off" required/>
                                <label>Password</label>
                            </div>
                            <input type="submit" value="Sign Up" class="signbtn"/>
                            <p class="text">
                                By Signing Up, I Agree To The <a href="#">Terms Of Services</a> 
                                And <a href="#">Privacy Policy</a>
                            </p>
                        </div>
                    </form>
                </div>
                <div class="carousel">
                    <div class="images_slide">
                        <img src={image1} class="image img1 show"/>
                    </div>
                    <div class="textslide">
                        <div class="text-wrap">
                            <div class="textgroup">
                                <h2>Live Chat / Create Your Group</h2>
                            </div>
                        </div>
                        <div class="bullets">
                            <span class="active" data-value="1"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    

    </main>
    )
}
