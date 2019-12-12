import React from 'react';
import {Link} from 'react-router-dom';

export class ShowAll extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            providers : []
        }
        

    }

    async fetchProviders() {
        const data = await fetch(`http://localhost:4000/api/provider/findall`);
        const providers = await data.json();
        return providers;
    }

    async componentDidMount() {
        const providers = await this.fetchProviders()
        console.log(providers);
        this.setState({
            providers
        })
    }

    render() {
        return (
            <React.Fragment>
                <ul>
                    {this.state.providers.map((provider)=> {
                        return <li><Link to={`/provider/${provider._id}`}>{provider.name}</Link></li>
                    })}
                </ul>
            </React.Fragment>
        )
    }
}