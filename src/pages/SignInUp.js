import './SignInUp.css'
import image1 from '../img/image1.png'
import logo from '../img/logo.png'
import React, { useEffect } from 'react'





export const SignInUp=() =>{

    
    const inputs = document.getElementsByClassName("inputfield");
    const togglebtn = document.getElementsByClassName("toggle");
    const main = document.getElementsByClassName("main");
 
    
   
    useEffect(()=>{
        let arr = [...inputs];

     
    
        arr.forEach(inp => {
            inp.addEventListener("focus", () => {
                inp.classList.add("active");
            });
            inp.addEventListener("blur", () => {
                if(inp.value != "") return;
                inp.classList.remove("active");
            });
        });
        
        let btn=[...togglebtn]
        let mains=[...main]
        
        
        btn.forEach(btn => {
            btn.addEventListener("click", () => {
                mains[0].classList.toggle("sign-up-mode");
            });
        });
    },[])
   



    return (
        <main className="main">
        <div className="boxauth">
            <div className="innerbox">
                <div className="forms">
                    <form action="index.html" autoComplete="off" className="signin">
                        <div className="logo">
                            <img src={logo}/>
                            <h3>WEFIFE</h3>
                        </div>
                        <div className="heading">
                            <h2>Welcome Back</h2>
                            <h6>Not Registred Yet?</h6>
                            <a href="#" className="toggle">Sign Up</a>
                        </div>
                        <div className="actualform">
                            <div className="inputbox">
                                <input  type="text" minLength="4" id="mt10" className="inputfield"  autoComplete="off" required/>
                                <label className="lbl">Username An Email</label>
                            </div>
                            <div className="inputbox">
                                <input  type="password" minLength="4" id="mt10" className="inputfield" autoComplete="off" required/>
                                <label  className="lbl" >Password</label>
                            </div>
                            <input type="submit" value="Sign In" className="signbtn"/>
                        </div>
                    </form>
                    <form action="index.html" autoComplete="off" className="signup">
                        <div className="logo">
                            <img src={logo}/>
                            <h3>WEFIFE</h3>
                        </div>
                        <div className="heading">
                            <h2>Get Started</h2>
                            <h6>Already Have An Account?</h6>
                            <a href="#" className="toggle">Sign In</a>
                        </div>
                        <div className="actualform">
                            <div className="inputbox">
                                <input  type="text" minLength="4" className="inputfield"  autoComplete="off" required/>
                                <label className="lbl">Name</label>
                            </div>
                            <div className="inputbox">
                                <input  type="email" minLength="4" className="inputfield"  autoComplete="off" required/>
                                <label className="lbl">Enter Your Email</label>
                            </div>
                            <div className="inputbox">
                                <input  type="password" minLength="4" className="inputfield" autoComplete="off" required/>
                                <label className="lbl">Password</label>
                            </div>
                            <input type="submit" value="Sign Up" className="signbtn"/>
                            <p className="text">
                                By Signing Up, I Agree To The <a href="#">Terms Of Services</a> 
                                And <a href="#">Privacy Policy</a>
                            </p>
                        </div>
                    </form>
                </div>
                <div className="carousel">
                    <div className="images_slide">
                        <img src={image1} className="image img1 show"/>
                    </div>
                    <div className="textslide">
                        <div className="text-wrap">
                            <div className="textgroup">
                                <h2>Live Chat / Create Your Group</h2>
                            </div>
                        </div>
                        <div className="bullets">
                            <span className="active" data-value="1"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    

    </main>
    )
}
