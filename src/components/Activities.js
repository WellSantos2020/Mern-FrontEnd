import React, { Component } from 'react'
import {connect}    from 'react-redux';
import {get_activities} from '../store/actions/activityActions';




class Activities extends Component {
    
    componentDidMount(){
        this.props.get_activities("5e615f0d1c9d44000056c330")
        
    }

    render() {
        console.log(this.props.activities)
        return (

            <div>
              <h3>Activities Test</h3>  
            </div>
        )
    }
}

const mapStateToProps = state=>({
    activities: state.activities.items
})



export default connect(mapStateToProps,{get_activities}) (Activities)