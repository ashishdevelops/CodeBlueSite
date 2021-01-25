import React from 'react';
import {Card, Button} from 'react-bootstrap'
import './InfoCard.css'
import image from "../../images/img_test.png"

class InfoCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {displayStyle: "none"};

        this.showTextHandler = this.showTextHandler.bind(this);
        this.hideTextHandler = this.hideTextHandler.bind(this);
    }

    showTextHandler() {
        this.setState({displayStyle: "block"});
    }

    hideTextHandler() {
        this.setState({displayStyle: "none"});
    }

    
    render() {

        return (
            <Card className="card" onMouseEnter={this.showTextHandler} onMouseLeave={this.hideTextHandler} >
                <Card.Img variant="top" src={image} />
                <Card.Body >
                    <Card.Title >Card Title</Card.Title>
                    <Card.Text style={{display: this.state.displayStyle}} >
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button style={{display: this.state.displayStyle }} variant="primary" >Go somewhere</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default InfoCard;