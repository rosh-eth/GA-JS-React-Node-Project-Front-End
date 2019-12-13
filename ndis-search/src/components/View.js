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

                    <button class="btn btn-outline-primary mt-4 mb-4"><Link to={`/provider/create`}>Create</Link></button>
                    <div class="card">
                        <div class="card-body">
                            
                            {/* <h5 class="card-title d-inline">{this.state.providerDetail.name}</h5><Link to={`/provider/${providerDetail._id}/edit`}>Edit</Link> */}
                            
                            <h6 class="card-subtitle">{this.state.providerDetail.address}</h6>
                            <p>{this.state.providerDetail.email}</p>
                            <p>{this.state.providerDetail.phone}</p>

                            <ul>
                                {this.state.providerDetail.services.map((service) => {
                                    return <li>{service}</li>
                                })}
                            </ul>



                            {/* <button class="btn btn-danger float-right"><Link to={`/provider/${providerDetail._id}/delete`}>Delete</Link></button> */}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}