import React from 'react';

class About extends React.Component {
    render() {
        return (
            <>
                <div className="about-page">
                    <h1>Mission Statement</h1>
                    <h5>To build a community centered around educating each other on various technologies.</h5>
                </div>
                <div className="quotation">
                    <h3>Quote of the day</h3>
                    <h4>"Technology is not just a tool. It can give learners a voice that they may not have had before"</h4>
                    <h4>- George Couros</h4>
                </div>
            </>
            
        )
    }
}

export default About;