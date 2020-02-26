import React from 'react'
import {Link} from 'react-router-dom'

export default function Landing() {
    const style1={
        width: "100%",
        paddingTop:"40px"
       
    }
    const style2={
        width: "100%",
        height: "210px",
        marginTop: "25px",
        

        
    }
    return(
       
       
       <div style={style1}>
          <div style={style2}> 
              <img src='images/MytineraryLogo.png' width="375px" ></img>
              <p>Find your perfect trip,designed by who know and love their cities.</p>
         </div>
           
        
         <div style={style2}>
         <h3>Start browsing</h3>   
         <Link to="/cities"><img src='images/circled-right-2.png' width="100px" ></img></Link> 
         </div>
         
         <div>
             <p>Want to build your own Mytinerary?</p>
             <a href="url" style={{marginRight:"100px"}} >Login</a> 
             <a href="url">Create Account</a>
            
            </div>
         <div>
         <footer style={{marginTop:"40px"}} ><img src='images/homeIcon.png' width="40px" ></img> </footer>
         </div>
         </div> 
         
               
         
         
    )
}
