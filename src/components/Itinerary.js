import React, { Component,useState } from 'react'
import {getItineraries}  from '../store/actions/itineraryActions';
import {connect}    from 'react-redux';
import { Image,Collapse,Button,Card,Row,Col,Accordion,Form } from 'react-bootstrap';
import Activities from  './Activities';
import {FaHeart} from 'react-icons/fa';
import{AiFillCaretRight,AiOutlineCaretLeft} from 'react-icons/ai'
import {addFavorites,removeFavorites,getfav} from '../store/actions/userActions';
import Comments from './Comments';
import {getComments,postComments} from "../store/actions/commentActions";

class Itinerary extends Component {
     constructor(props){
       super(props);
       this.state={
       mycolor:"#3E4551",
       favsid:[],
       itineraryId:"",
       isShow:true,
       text:"",
      }
      this.submitUser=this.submitComment.bind(this)
      this.test2=this.test2.bind(this)
      this.addChange=this.addChange.bind(this)
     
     }
   
     commentId= () => {
      this.setState(state => ({ isShow: !state.isShow }));
    };
   

    addChange=(e)=>{
      this.setState({text:e.target.value})
      

    }

    submitComment=(e)=> {
      e.preventDefault()
      const text= this.state.text;
      this.props.postComments(this.state.itineraryId,text)
     
      window.location.reload(true)
      
    } 




      componentDidMount (){
         this.props.getItineraries(this.props.location.state.myCity._id)
         
       
          
     } 
     componentWillMount(){
        console.log('Willmount')
        
              
               
               if(localStorage.token){

                this.props.getfav() 
               }
                
            
         
         
     }
     handleClick =(id,itineraryId)=>{
    this.setState(state => ({itineraryId:id }));

     };
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
    testingbutton=(id)=>{
      this.setState({itineraryId:id });
    }
    render() {
     
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
            height:"470px",
            marginRight:"50px",
            
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

                  <Card style={{ width: '18rem' }}>
                   <Card.Img variant="top" src="holder.js/100px180" />
                   <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                   Some quick example text to build on the card title and make up the bulk of
                   the card's content.
                 </Card.Text>
                 <Button variant="primary">Go somewhere</Button>
                 </Card.Body>
                 </Card>
                  
                </Collapse>
              </>
            );
          }
        let itn=this.props.itineraries.map(itinerary=>{
      
      
          
          let btm;
          if(this.state.favsid.includes(itinerary._id)){
            btm=(<div style={{marginRight:"20px"}} onClick={()=>this.test1(itinerary._id,itinerary.cityId)} ><FaHeart  color="red" style={{marginRight:"30px"}} /> </div>)
          }else{
            btm=(<div style={{marginRight:"20px"}} onClick={()=>this.test2(itinerary._id,itinerary.cityId)} ><FaHeart  color={this.state.mycolor} style={{marginRight:"30px"}} /> </div>)
          }
            return(
              
                       
                              
        <div>
                          
                        <Card>
                                        
                  <Card.Body>
                 <Row>
                                   
          <Col>
          <div style={{ width: '23rem',height:100,margin:10 ,color:'light-gray'}}>
                                        <div style={{display:'flex',color:'black'}}>
                                            <Image src={itinerary.profilePicture} roundedCircle width='50px'/>
                                            <p style={{margin:'auto'}}>{itinerary.title}</p>
                                              {btm}
                                            
                                        </div>
                                        </div>
                                        <div style={{display:'flex',justifyContent:'space-around',color:'black'}}>
                                            <p>{itinerary.rating}</p>
                                            <p>{itinerary.duration}</p>
                                            <p>{itinerary.price}</p>
                                        </div>
                                        <div style={{display:'flex',justifyContent:'space-around',color:'black'}}>
                                                
                                                <p>{itinerary.hashtags}</p>
                                        </div>  
               
         </Col>
         </Row>
            

            
             

               <Accordion defaultActiveKey="0"  >
               <Card.Header>
               <Accordion.Toggle id="colapse-btn" as={Button} onClick={() => this.handleClick(itinerary._id)} variant="link"  eventKey="1">
                                
                    view More...
               </Accordion.Toggle>
                </Card.Header>
                   <Accordion.Collapse eventKey="1">
                       <Card.Body>
                          {this.state.itineraryId=== itinerary._id && <Activities myid={itinerary._id}/> }
                          
                         
                         
                         <Form onSubmit={this.submitUser} >
                          <Row>
                            <Col xs={10} md={10} > 
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label style={{marginTop: 80 ,marginRight:400,marginLeft:20}}> Comments</Form.Label>
                            <Form.Control style={{marginTop:5, width:250,height:44,marginLeft:15}} type="text" as="textarea" rows="2" onChange={this.addChange} />
                            </Form.Group>
                      
                            </Col>
                         
                        
                            <Col xs={2} md={2}>
                            <div variant="primary" type="submit" style={{height:22, paddingTop:0,marginTop:118}}>
                             <AiFillCaretRight size="40px"/>
                            </div>
                            
                            </Col>
                          </Row>
                         
                        
                     </Form>





                        
                         
                            
                      
                        
              
                          {this.state.itineraryId===itinerary._id && <Comments id={itinerary._id} />  } 
                      
                          
                      </Card.Body>
                      
                      </Accordion.Collapse>
                      
                    { <Accordion.Toggle id="closeBtn" as={Button} onClick={() => this.handleClick(itinerary._id)} variant="link"  eventKey="1">
                      Close
                    </Accordion.Toggle> }
                   
              </Accordion>



             
            
        
        
        
              
            </Card.Body>  
            
            </Card>
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
            <div>
         
         <footer style={{marginTop:"40px",marginRight:"60px"}} > <div style={{display:"flex",justifyContent:"flex-start"}}>< AiOutlineCaretLeft size="40px" marginLeft="200px"/>
         
         <img style={{marginTop:"5px",marginLeft:"140px"}} src='images/homeIcon.png' width="40px" ></img>
         </div>
           
            </footer>

         </div>


            </div>
        )
    }
}
const mapStateToProps = state=>({
    itineraries: state.itineraries.items,
    user: state.auth.item,
    favorites: state.user.favoriteItineraries
})
export default connect(mapStateToProps, {getItineraries,addFavorites,removeFavorites,getfav,postComments})(Itinerary);

 {/* <div className="flex-conteiner" style={divstyle} key={itinerary._id}>
                          
                            <div style={{ width: '23rem',height:500,margin:10 ,color:'light-gray'}}>
                                        <div style={{display:'flex',color:'black'}}>
                                            <Image src={itinerary.profilePicture} roundedCircle width='50px'/>
                                            <p style={{margin:'auto'}}>{itinerary.title}</p>
                                              {btm}
                                            
                                        </div>
                                        <div style={{display:'flex',justifyContent:'space-around',color:'black'}}>
                                            <p>{itinerary.rating}</p>
                                            <p>{itinerary.duration}</p>
                                            <p>{itinerary.price}</p>
                                        </div>
                                        <div style={{display:'flex',justifyContent:'space-around',color:'black'}}>
                                                
                                                <p>{itinerary.hashtags}</p>
                                        </div> 
                                        {this.state.itineraryId===itinerary._id && <Comments id={itinerary._id}/>}
                                        {this.state.itineraryId===itinerary._id  && <Activities id={itinerary._id}/> }
                                      
                                       <button onClick={()=>this.testingbutton(itinerary._id)} >view more</button>
                            </div>
                        </div>
                        */}
