import React
 from "react";

 const Page=()=>{


    return<>
    <img width="80px" src="logo192.png"/>
    <h1>fun fact about React</h1>
    <ul>
        <li>
             was first release in 2013
        </li>
        <li>
             was was originally created by john walker
        </li>
        <li>
             was first release in 2013
        </li>
        <li>
             was first release in 2013
        </li>
    </ul>
    </>
 }
 export default Page

 const Page2=()=>{
     return<>
     <header>
         <nav className="main" >
             <img className="logo"src="logo192.png" width="30px"/>
            <ul className="list">
             <li>price</li>
             <li>about</li>
             <li>contact</li>
             </ul>
         </nav>
     </header>
     <h1>REASON I AM EXCITED TO LEARN REACT </h1>
     <ul className="maincontent">
         <li>
             scd dhgfugf fhjhfhfnf 
         </li>
         <li>
             scd dhgfugf fhjhfhfnf 
         </li>
         <li>
             scd dhgfugf fhjhfhfnf 
         </li>
     </ul>
     </>
 }
 const Page3=()=>{
     return<>
     <footer className="footer">
         &copy; 2022 Geena production. All right reserved
     </footer>
     </>
 }
 export const Page4=()=>{
     return<div className="div">
     <Page2/>
     <Page3/>
     </div>
 }