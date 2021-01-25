import React from 'react';
import './Events.css';
import InfoCard from './InfoCard';

class Events extends React.Component {
    
    render() {

        const style = {
            border:"solid 1px #777"
        }

        return (                
            <div className="event_section">
                <InfoCard />
                <InfoCard />
                <InfoCard />                   
                
            </div>
        )
    }

}

export default Events;