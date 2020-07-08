import React, { Component,useState } from 'react'
import {getItineraries}  from '../store/actions/itineraryActions';
import {connect}    from 'react-redux';
import { Image,Collapse,Button } from 'react-bootstrap';
//import Activities from  './Activities';
import {FaHeart} from 'react-icons/fa';
import {addFavorites,removeFavorites,getfav} from '../store/actions/userActions';
import Comments from './Comments';
 

class Itinerary extends Component {
     constructor(props){
       super(props);
       this.state={
       mycolor:"#3E4551",
       favsid:[],
      }
      this.test2=this.test2.bind(this)
     }
   
     componentDidMount (){
         this.props.getItineraries(this.props.location.state.myCity._id)
         
       
          
     }
     componentWillMount(){
        console.log('Willmount')
        
               
                this.props.getfav() 
            
         
         
     }
     handelclick =()=>{
       console.log(test)
     }
     handelfavorites=(id,cityId)=>{
         
         if(this.props.user!==undefined || this.props.user!==null){
            console.log("clicking")
            let result=this.props.user.favorites.filter(favorite=>favorite.itineraryId===id); 
           if (result.length!==0){
             this.test1(id)
           }else {
              this.test2(id,cityId)
           }
             
         }
    }
       
     test1=(id)=>{
         console.log("test 1")
        this.props.removeFavorites(id)
        let myindex= this.state.favsid.indexOf(id)
        this.state.favsid.splice(myindex,1)
     }
     test2=(id,cityId)=>{
        console.log("test 2")
      this.props.addFavorites(id,cityId)
      console.log(this.props.user.favorites)
    }
    render() {
        console.log(this.props)
       const favorites= this.props.favorites
        if(this.props.user!== undefined ) {
            
          for(var i=0;i< favorites.length;i++){
            if(!this.state.favsid.includes(favorites[i].itineraryId)){
            
                 this.state.favsid.push(favorites[i].itineraryId)
                 console.log(this.state.favsid)
                }
          }
          
     
    } 
        const divstyle = {
            backgroundColor:"lightyellow",
            border: "1px solid blue",
            borderRadius: "15px",
            height:"170px",
            
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
                    {/* <Activities/> */}
                 
                  </div>
                </Collapse>
              </>
            );
          }
        let itn=this.props.itineraries.map(itinerary=>{
      
      
          
          let btm;
          if(this.state.favsid.includes(itinerary._id)){
            btm=(<div style={{marginRight:"20px"}} onClick={()=>this.test1(itinerary._id,itinerary.cityId)} ><FaHeart  color="red" /> </div>)
          }else{
            btm=(<div style={{marginRight:"20px"}} onClick={()=>this.test2(itinerary._id,itinerary.cityId)} ><FaHeart  color={this.state.mycolor} /> </div>)
          }
            return(
              
                        <div className="flex-conteiner" style={divstyle} key={itinerary._id}>
                          
                            <div style={{ width: '23rem',height:200,margin:10 ,color:'light-gray'}}>
                                        <div style={{display:'flex',color:'black'}}>
                                            <Image src={itinerary.profilePicture} roundedCircle width='50px'/>
                                            <p style={{margin:'auto'}}>{itinerary.title}</p>
                                              {btm}
                                            {/* {this.state.favsid.includes(itinerary._id)?myColor=<AiFillHeart  color="red" onClick={()=>this.handelfavorites(itinerary._id,itinerary.cityId)}/>:myColor=<AiFillHeart  color="gray" onClick={()=>this.handelfavorites(itinerary._id,itinerary.cityId)}/>} */}
                                        </div>
                                        <div style={{display:'flex',justifyContent:'space-around',color:'black'}}>
                                            <p>{itinerary.rating}</p>
                                            <p>{itinerary.duration}</p>
                                            <p>{itinerary.price}</p>
                                        </div>
                                        <div style={{display:'flex',justifyContent:'space-around',color:'black'}}>
                                                
                                                <p>{itinerary.hashtags}</p>
                                        </div> 
                                       
                                       {/*  <Example /> */}
                            </div>
                        </div>
                       
            
            )
        })
        return (
            <div>
               
            <div style={{backgroundImage:`url(${this.props.location.state.myCity.img})`,width:"100%",height:"220px",backgroundSize:"cover"}}>
           <h2>{this.props.location.state.myCity.name}</h2>
           </div>
<h1>Itinerary</h1>
            {itn}
            <Comments/>
            </div>
        )
    }
}
const mapStateToProps = state=>({
    itineraries: state.itineraries.items,
    user: state.auth.item,
    favorites: state.user.favoriteItineraries
})
export default connect(mapStateToProps, {getItineraries,addFavorites,removeFavorites,getfav})(Itinerary);

