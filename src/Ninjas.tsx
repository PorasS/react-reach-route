import React from 'react';

export default class Ninjas extends React.Component {

    render() {

        console.log("soul mates for life:", this.props);
        const { name, city }: any = this.props;
        console.log("name: ", name)
        return (
            <div>
                <h1>Details</h1>
                <h2>Name: {name}</h2>
                <h2>City: {city}</h2>
            </div>
        )
    }
}