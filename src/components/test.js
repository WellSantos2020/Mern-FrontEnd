import React, { Component } from 'react'
import { connect } from 'react-redux'

export class test extends Component {
    render() {
        return (
            <div>
               <h1>Test</h1> 

               <Card>
            <Card.Header>Barcelona Skyline</Card.Header>
            <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Image src={itinerary.profilePicture} roundedCircle width='25px'/> 
              <Card.Text>
                                   {itinerary.rating}
                                   {itinerary.duration}
                                    {itinerary.price}
                                    {itinerary.hashtag}
              </Card.Text>
            
            </Card.Body>
             </Card>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(test)



