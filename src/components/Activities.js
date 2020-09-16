/* import React, { Component,useState} from 'react'
import {connect}    from 'react-redux';
import {get_activities} from '../store/actions/activityActions';
import {Carousel,Item,Image} from 'react-bootstrap';




class Activities extends Component {
    
    componentDidMount(){
        this.props.get_activities(this.props.myid)
        
    }
     





    render() {
        console.log(this.props)
        let  slides=this.props.activities.map((item)=>{
          console.log(item)
         if(item.pictures.length>0){
           return item.pictures.map((pic)=>{
             
             return(
     
               <Carousel.Item>
               <img
                 className="d-block w-100"
                 src={pic}
                 alt="Third slide"
               />
               <Carousel.Caption>
                {item.title}
               </Carousel.Caption>
             </Carousel.Item>
   
   
   
             );
   

           })
           

          }

         
       }
       
       )

        function ControlledCarousel() {
            const [index, setIndex] = useState(0);
          
            const handleSelect = (selectedIndex, e) => {
              setIndex(selectedIndex);
            };
          
            return (
              <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=373940"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=282c34"
                    alt="Second slide"
                  />
          
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                  />
          
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            );
          }

        console.log(slides)
        return (
           
        <div>
        
          <Carousel>
              {slides}
          </Carousel>
          </div>

        )
    }
}

const mapStateToProps = state=>({
    activities: state.activities.items
})



export default connect(mapStateToProps,{get_activities}) (Activities) */

import React, { Component } from 'react'
import {connect} from 'react-redux'
import {get_activities} from '../store/actions/activityActions';
import {Carousel} from 'react-bootstrap'


class Activities extends Component {
    constructor(props) {
        super(props);
        this.state = {
       
        };
    }

    componentDidMount(){
        this.props.get_activities(this.props.myid)
    }
    
    render() {
        console.log(this.props)
       
        const pics = this.props.activities.map( acts => {
            
                
                    return (
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={acts.pictures}
                                alt={acts.title}
                            />
                            <Carousel.Caption>
                                {acts.title}
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })
       
        return (
            <div>  
                <div style={{ marginTop: "20px", marginBottom: "30px", height:0}}>
                    <Carousel> 
                        {pics}
                    </Carousel>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    activities: state.activities.items 
})
export default connect(mapStateToProps, {get_activities})( Activities)