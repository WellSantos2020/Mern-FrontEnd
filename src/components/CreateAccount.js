import React, { Component } from 'react'
import {Form,Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import {registerUser} from '../store/actions/userActions'

 class CreateAccount extends Component {
    constructor(props){
        super(props)     
        this.state={
            name:"",
            email:"",
            password:"",
            image:""


    }
    this.submitUser=this.submitUser.bind(this)
    this.addChange=this.addChange.bind(this)
    }
   
    addChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
        

    }
     submitUser(e) {
       e.preventDefault()
       const name =this.state.name;
       const email= this.state.email;
       const password=this.state.password;
       const image=this.state.image;
       
       this.props.registerUser(name,email,password,image)
      
    }
    render() {
      
        return (
            <div>
  {/*          <Form>
  <Form.Group controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="enter name" name="name" value={this.state.name} onChange={this.addChange}/>
    <Form.Text className="text-muted">
   
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
 
  <Form.Group controlId="formBasicImage">
    <Form.Label>Image</Form.Label>
    <Form.Control type="text" placeholder="Image url" />
  </Form.Group>


  <Button variant="primary" type="submit">
    Submit
  </Button>
  
</Form> */}
<form onSubmit={this.submitUser} style={{marginLeft: 30, padding:10}}>
                    <div> 
                        <label htmlFor="name"><b>Name</b></label>
                        <input 
                            type="text" 
                            placeholder="Enter your name" 
                            name="name" required 
                            vaule={this.state.name}
                            onChange={this.addChange}>
                        </input>
                        <label htmlFor="name"><b>Email</b></label>
                        <input 
                            type="text" 
                            placeholder="Enter your email" 
                            name="email" required
                            vaule={this.state.email}
                            onChange={this.addChange}>
                        </input>
                        <label htmlFor="psw"><b>Password</b></label>
                        <input 
                            type="password" 
                            placeholder="Enter your Password" 
                            name="password" required
                            value={this.state.password}
                            onChange={this.addChange}>
                        </input>
                        
                        <label htmlFor="img"><b>ImageUrl</b></label>
                        <input 
                            type="text" 
                            placeholder="Enter your ImageUrl" 
                            name="image" 
                            value={this.state.image}
                            onChange={this.addChange}>
                        </input>
                        <button type="submit" className="login-button" style={{borderRadius: "10px"}}>Send</button>
                    </div>
                </form>

            </div>
        )
    }
}
export default connect(null,{registerUser}) (CreateAccount) 