import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import {  HOME_PATH } from '../constants/routes'
import user from '../img/user.png'

import styles from './Home.module.css'
import './group.css'


export const Home=() =>{

   
    return (
        <div className={`container ${styles[`mt50`]}`}>
        <div className={styles.properties}>
            <div className={styles.content}>
           

            <div className={styles.blockwrapper}>
           
                
    
                <div className={styles.messagesblock}>
                 
               <div className={` ${styles[`adjust`]}`}>
                   <div className={styles.insideblock}>
                       <strong className={styles.usernamecolor}>username </strong>
                       <p className={styles.textmessagecolor}>text message</p>
                   </div>
                   <div className={styles.iconwrapper}>
                      
                       <img className={styles.usericon} src={user} width="30px" height="30px"  />
                   </div>
                   
               </div>
               <div className={styles.adjustsecond}>
                   <div className={styles.insideblock}>
                       <strong className={styles.usernamecolor}>username </strong>
                       <p className={styles.textmessagecolor}>text message</p>
                   </div>
                   <div className={styles.iconwrapper}>
                      
                       <img className={styles.usericon}  src={user} width="30px" height="30px" />
                   </div>
                   
               </div>
               <div className={styles.adjust}>
                   <div className={styles.insideblock}>
                       <strong className={styles.usernamecolor}>username </strong>
                       <p className={styles.textmessagecolor}>text message</p>
                   </div>
                   <div className={styles.iconwrapper}>
                      
                       <img className={styles.usericon} src={user} width="30px" height="30px" />
                   </div>
                   
               </div>
               
               </div>
               <div className={styles.inputwrapper}>
                 <input placeholder="Type your message here..." className={styles.input}/>
             </div>
                
                </div>  
                
                
                <div className={`box ${styles[`groupwrapper`]}`}> 
                <div className={styles.creategroup}>Create your group</div>
                <div>
                    <div>
                        <input placeholder="Group name" className={styles.groupname}/>
                      
                    </div>
                    <div>
                        <input placeholder=" Description" className={styles.groupdescription}/>
                    </div>
                    <div className={styles.createbtnwrapper}>
                        <button className={styles.createbtn}  ><Link className={styles.btnlink} to={HOME_PATH}>Create</Link></button>
                    </div>
                </div>
                <div className={styles.wefife}>WEFIFE</div>
               
                </div>
            </div>
        </div>
        </div>
    )
}