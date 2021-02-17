import React, {Component} from "react";
import CarouselBox from "../Components/CarouselBox";
import {Container, CardDeck, Card , Button} from "react-bootstrap";
import './Pages.css';
import asset_1 from "../assets/asset_1.jpg";
import asset_2 from "../assets/asset_2.jpg";
import asset_3 from "../assets/asset_3.jpg";

const divStyle = {
  color: 'dark',
  /*fontSize: 20,
  backgroundPosition: 'center',
  flex: 1,
  WebkitBackgroundSize:"100",
  backgroundSize:  'cover',
  backgroundRepeat  : 'no-repeat',
  backgroundImage:"url('https://clarionschooldubai.com/wp-content/uploads/2017/05/bg-grey.jpg')" ,
  height:900,
   */      
   backgroundColor:'#93919c',      
};
const deckStyle = {
	marginTop: 40,
	paddingBottom: 40,
}
export default class Home extends Component {
	render() {
		return (
    
         <div style={divStyle}>

         <CarouselBox />
 		<Container style={divStyle}>
 			<CardDeck className="deck" style={deckStyle}>
 				<Card className="cardDeck">
 					<img 
					 variant="top"
 					 src={asset_1}
 					/>	
 					<Card.Body>
 						<Card.Title>
 							Lorem Ipsum
 						</Card.Title>
 						<Card.Text>
							Every part of Azerbaijan has many interesting historical monuments. 
							Among the masterpieces of brilliant archers - the unique palace of the Shekinakh Khans.
 						</Card.Text>
 					</Card.Body>
 				</Card>	
 				<Card className="cardDeck">
 					<Card.Body>
 						<Card.Title>
 							Lorem Ipsum
 						</Card.Title>
 						<Card.Text>
                        National traditions are well preserved in Azerbaijan. 
                        They have a long history, namely originates from the formation of the Azerbaijani people.
                         There are several traditions in Azerbaijan, 
                        some customs and traditions differ from region to region.
 						</Card.Text>
 					</Card.Body>
 					<Card.Img
 					variant="bottom"
 					src={asset_2}
 					/>	
 				</Card>	
 				<Card className="cardDeck">
 					<Card.Img
 					variant="top"
 					src={asset_3}
 					/>	
 					<Card.Body>
 						<Card.Title>
 							Lorem Ipsum
 						</Card.Title>
 						<Card.Text>
                        Azerbaijani national cuisine is one of the most ancient in the world.
                         Azerbaijani cuisine is very satisfying, nutritious and high-calorie, 
                         it is original and has its own national flavor, 
                        manifested in the specificity of culinary techniques and traditions of the Azerbaijani feast.
 						</Card.Text>
 					</Card.Body>
 				</Card>	
 			</CardDeck>	
 		</Container>
 			</div>

   		)
	}
}