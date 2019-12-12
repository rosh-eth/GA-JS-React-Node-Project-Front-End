import React from 'react';

export class View extends React.Component {
    constructor (props) {
        super(props) 
    }

    async componentDidMount() {
        const provider = await fetch(`http://localhost:4000/api/provider/find/${this.props.match.params.id}`)
        const providerDetail = await provider.json();
        console.log(providerDetail)
    }

    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                <p>View Works</p>
            
            </React.Fragment>
        )
    }
}