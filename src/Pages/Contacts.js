import React, { Component } from "react";
import {Container, Form, Button} from "react-bootstrap"

 
export default class Contacts extends Component {
	
	render() {
		const styles = {
			divStyle: {
				
			  color: 'dark',
		  fontSize: 20,
		  backgroundPosition: 'center',
		  flex: 1,
		  WebkitBackgroundSize:"100",
		  backgroundSize: 'cover',
		  backgroundRepeat : 'no-repeat',
		  backgroundImage: "url('https://clarionschooldubai.com/wp-content/uploads/2017/05/bg-grey.jpg')" ,
		  height: "90vh",
			}
		}
		return (
			<div style={styles.divStyle}>
         <Container style={{background:'500px'}}>
         	<h1 className="text-center">Contact us</h1>
         	<Form>
         		<Form.Group controlID="formBasicEmail">
         			<Form.Label>
         			Email adress	
         			</Form.Label>
         			<Form.Control type="email" placeholder="Enter email" />
         			<Form.Text> We'll never share your email with anyone else</Form.Text>
         		</Form.Group>
         		
         		<Form.Group controlID="formBasicPassword">
         		    <Form.Label>
                 		Example textarea		
         		    </Form.Label>
         			<Form.Control as= "textarea" rows="3" />

         		</Form.Group>
         		<Form.Group controlID="formBasicCheckbox">
         		    <Form.Check type="checkbox" label="Check me out"/>

         		</Form.Group>
         		<Button variant="primary" type="submit">Submit</Button>

         	</Form>

         </Container>	
		</div>
		);
	}
}