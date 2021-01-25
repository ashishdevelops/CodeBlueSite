import React from 'react';
import './Home.css'
import {Button} from 'react-bootstrap'

class Home extends React.Component {
    render() {
        return (
            <div className="homepage">
                <div className="row">
                    <div className="neons">
                        <h1><em>TECH DRIVEN COLLECTIVE STUDENT LEARNING COMMUNITY</em></h1>
                    </div>
                </div>
                <Button className="join-button" variant="outline-success">JOIN NOW</Button>{' '}
            </div>
        )
    }
}

export default Home;