import React, { Component,useState } from 'react'
import {getItineraries}  from '../store/actions/itineraryActions';
import {connect}    from 'react-redux';
import { Image,Collapse,Button } from 'react-bootstrap';
import Activities from  './Activities';

 class Itinerary extends Component {

     componentDidMount (){
         this.props.getItineraries(this.props.location.state.myCity._id)
       console.log(this.props)  
     }
     handelclick =()=>{
       console.log(test)
     }
       
     
    render() {
        const divstyle = {
            backgroundColor:"lightyellow",
            border: "1px solid blue",
            borderRadius: "15px",
            height:"170px"
        }
        function Example() {
            const [open, setOpen] = useState(false);
            
          
            return (
              <>
                <Button
                  onClick={() => setOpen(!open)}

                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                >
                  View All
                </Button>
                <Collapse in={open}>
                  <div id="example-collapse-text" style={{color:'black',backgroundColor:'darkgray'}}>
                    <Activities/>
                 
                  </div>
                </Collapse>
              </>
            );
          }
        
        return (
            <div>
                <div style={{backgroundImage:`url(${this.props.location.state.myCity.img})`,width:"100%",height:"220px",backgroundSize:"cover"}}>

                <h2>{this.props.location.state.myCity.name}</h2>
                </div>
                <h1>Itinerary</h1>


                
                {this.props.itineraries.map(itinerary=>{
                    
                      
                    
                    return(
                        
                                <div class="flex-conteiner" style={divstyle} >
                                   

                                    <div style={{ width: '23rem',height:200,margin:10 ,color:'light-gray'}}>
                                                <div style={{display:'flex',color:'black'}}>
                                                    <Image src={itinerary.profilePicture} roundedCircle width='50px'/>
                                                    <p style={{margin:'auto'}}>{itinerary.title}</p>
                                                </div>
                                                <div style={{display:'flex',justifyContent:'space-around',color:'black'}}>
                                                    <p>{itinerary.rating}</p>
                                                    <p>{itinerary.duration}</p>
                                                    <p>{itinerary.price}</p>
                                                </div>
                                                <div style={{display:'flex',justifyContent:'space-around',color:'black'}}>
                                                        
                                                        <p>{itinerary.hashtags}</p>
                                                </div> 
                                                <Example />
                                    </div>

                                


                                 
                               
                              
                             
                                    
                                    
                                    
                                    
                                
                                    
                                </div>
                               
                    
                    )
                })}



            </div>
        )
    }
}

const mapStateToProps = state=>({
    itineraries: state.itineraries.items
})
export default connect(mapStateToProps, {getItineraries})(Itinerary ) 
