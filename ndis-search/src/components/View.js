import React from 'react';
import {Link} from 'react-router-dom';

export class View extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            providerDetail: {
                _id : '',
                services: []
            }

        }
    }

    async componentDidMount() {
        const provider = await fetch(`http://localhost:4000/api/provider/find/${this.props.match.params.id}`)
        const providerDetail = await provider.json();
        console.log(providerDetail._id)
        this.setState({
            providerDetail
        })
    }


    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                <div class="container">
                    <Link class="btn btn-outline-primary mt-4 mb-4 mr-3" to={`/provider/`}>Back to Providers</Link>
                    <Link class="btn btn-primary mt-4 mb-4" to={`/provider/create`}>Create</Link>
                    <div class="card">
                        <div class="card-body">
                            
                            <h5 class="card-title d-inline">{this.state.providerDetail.name}</h5><Link class="float-right" to={`/provider/${this.state.providerDetail._id}/edit`}>Edit</Link>
                            <hr />
                            <h6 class="card-subtitle">Company Details</h6>
                            <div class="card-body">
                            <p class="card-text">Address: {this.state.providerDetail.address}</p>
                            <p class="card-text">Email: {this.state.providerDetail.email}</p>
                            <p class="card-text">Phone: {this.state.providerDetail.phone}</p>
                            <hr />
                            <h6 class="card-subtitle">Services</h6>
                            <ul>
                                {this.state.providerDetail.services.map((service) => {
                                    return <li>{service}</li>
                                })}

                            </ul>
                            </div>


                            <Link class="btn btn-danger float-right" to={`/provider/${this.state.providerDetail._id}/delete`}>Delete</Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}