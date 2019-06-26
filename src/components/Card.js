/* 
**this class uses the card component from react-bootstrap
*/
import React from 'react';
import MTGImage from '../assets/card-back.jpg';
import {Card} from 'react-bootstrap';
import './Card.css'
 


/* 
**renders an individual card in card format
*/
class CardDef extends React.Component{
  render(){
      return(
/* 
**displays card information by image, card name, current type, original type, artist, and set name.  duplicates are cards from different sets.  if there is no image url, it displays a default card front image
*/
        <Card className = 'card-box'  style={{ width: '15rem'   }}>
          {this.props.card.imageUrl ? (<Card.Img variant="top" src={this.props.card.imageUrl} />
          ) : (
            <Card.Img variant="top" src={MTGImage} />
          )}
          <Card.Title className = 'card-title'>{this.props.card.name}</Card.Title>   
          <Card.Body className = 'card-body' >
            <Card.Text><b>Current Type:</b> {this.props.card.type} 
            </Card.Text> 
            <Card.Text><b>Original Type:</b> {this.props.card.originalType} 
            </Card.Text> 
            <Card.Text>{this.props.card.text} 
            </Card.Text> 
            <Card.Text><b>Artist:</b> {this.props.card.artist} 
            </Card.Text> 
            <Card.Text><b>Set Name:</b> {this.props.card.setName} 
            </Card.Text> </Card.Body>
        </Card>
      )
  }
}
export default CardDef;
