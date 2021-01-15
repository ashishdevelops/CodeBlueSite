import React from 'react';
import './HomePage.css';

class HomePage extends React.Component {
    render() {
        return (
            <div className="homepage">
                <div className="statements">
                    <h1>Mission Statement</h1>
                    <h5>To build a community centered around educating each other on various technologies.</h5>
                    <br />
                    <br />
                    <br />
                    <h1>Quote of the day</h1>
                    <h5>"Technology is not just a tool. It can give learners a voice that they may not have had before"</h5>
                    <h5>- George Couros</h5>
                </div>

                <div className="google-calendar">
                    Hello
                </div>

            </div>
        )
    }

}

export default HomePage;