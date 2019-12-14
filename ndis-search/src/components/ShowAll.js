import React from 'react';
import { Link } from 'react-router-dom';

export class ShowAll extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            providers: []
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
                <div className="container">
                
                    <h2 className="mt-4">Provider List</h2>
                    <Link className="btn btn-primary mb-4" to={`/provider/create`}>Create</Link>
                    <div className="card">
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                {this.state.providers.map((provider) => {
                                    return <li className="list-group-item" key={provider._id}><Link  to={`/provider/${provider._id}`}>{provider.name}</Link></li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}