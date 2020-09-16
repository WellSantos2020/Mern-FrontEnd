import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
//import {Form} from 'react-bootstrap';
//import {FormControl} from 'react-bootstrap';
import {getCities}  from '../store/actions/cityActions';
import {googleUser} from '../store/actions/authActions';
import {connect}    from 'react-redux';
import {Link}       from 'react-router-dom';
//import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import Navigation from './Navigation';


 class Cities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities:[],
            citiesFilter:""
        };
      }
    
    
      
    
      componentDidMount(){
        this.props.getCities()
        console.log(this.props)
       const url = this.props.location.search
       if(url !=="") { 
           const token= url.split("=")
           this.props.googleUser(token[1])
        
      
       
           
        }
 
    }
    
   
    handleChange = (e) => {
        this.setState({
          citiesFilter: e.target.value
        }) 

      }
    render() {
        console.log(this.props.location.search)
        return (
            <div>
                < Navigation />
                 <div>
                 <label htmlFor="filter" margin-top="40px" ></label>
                 <input type="text" id="filter" 
                 value={this.state.cityFilter} 
                 onChange={this.handleChange}/>
                </div>
                 
                <h1>Cities</h1>
                 
                 

                {this.props.cities.filter(city=>city.name.toLowerCase().startsWith(this.state.citiesFilter.toLowerCase())).map((city,index)=>{
                    
                    return(
                                   <Link key={index} to={{
                                    pathname: '/itineraries',
                                    state: {
                                    myCity:city
                                    }
                                    }}>
                                         <Card className="bg-dark text-white" style={{ width: '23rem',height:180,margin:5,borderRightWidth:'4px',borderLeftWidth:'2px'}}>
                                    <Card.Img style={{height:'177px',borderRightWidth:'2px'}} src= {city.img} alt="Card image" />
                                    <Card.ImgOverlay>
                                    <Card.Title>{city.name}</Card.Title>
                                        
                                        <Card.Text>{city.country}</Card.Text>
                                    </Card.ImgOverlay>
                                </Card>


                                  </Link>
                                  
    
                                
                               
                    
                    )
                })}
            </div>
        )
    }
}
const mapStateToProps = state=>({
    cities: state.cities.items
})
export default connect(mapStateToProps, {getCities,googleUser})(Cities) 







  



 
