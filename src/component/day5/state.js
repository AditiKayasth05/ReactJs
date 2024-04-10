import React from 'react';

export class MyCar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: 'Ford', // Example property in the state
        };
    }

    render() {
        return (
            <div>
                <h1>My Car</h1>
                
            </div>
        );
    }
}

