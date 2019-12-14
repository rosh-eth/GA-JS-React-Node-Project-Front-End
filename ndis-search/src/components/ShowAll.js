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
                <div class="container">
                
                    <h2 class="mt-4">Provider List</h2>
                    <Link class="btn btn-primary mb-4" to={`/provider/create`}>Create</Link>
                    <div class="card">
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                {this.state.providers.map((provider) => {
                                    return <li class="list-group-item"><Link  to={`/provider/${provider._id}`}>{provider.name}</Link></li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}