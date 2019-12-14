import React from 'react';
import { Link } from "react-router-dom";

export class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            name: '',
            address: '',
            phone: '',
            email: '',
            value: '',
            services: [] 
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({ [name]: value });
        console.log(name + 'value is: ' + value);
        
    }

    handleSubmit = (event) => {
        console.log('A Post was submitted: ' + JSON.stringify(this.state));
        event.preventDefault();

        this.createNewPost();
        // if(!this.props.match.params.id) {
        //     this.createNewPost();
        // }
        // else {
        //     this.updatePost();
        // }
    }

    createNewPost() {
        fetch('http://localhost:4000/api/provider/new', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
                name: this.state.name,
                address: this.state.address,
                phone: this.state.phone,
                email: this.state.email,
            }),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.props.history.push('/');
            })
            .catch((e) => {
                console.log(e);
            });
    }


    // componentDidMount() {
    //     const id = this.props.match.params.id;

    //     if (id) {
    //         this.setState({
    //             isLoading: true
    //         })

    //         fetch(`http://localhost:4000/api/provider/find/${id}`)
    //             .then((res) => res.json())
    //             .then((data) => {
    //                 console.log(data);
    //                 this.setState({
    //                     name: data.title,
    //                     author: data.author,
    //                     body: data.body,
    //                     isLoading: false
    //                 })
    //             });
    //     }
    // }

    render() {
        return (
            <React.Fragment>

                <div class="container">
                <Link class="btn btn-outline-primary mt-4 mb-4 mr-3" to={`/provider/`}>Back to Providers</Link>
                    <h2>List Your Organisation</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <label for="Name">Business Name:*</label>
                                <input class="form-control" value={this.state.name} required type="text" onChange={this.handleChange} name="name" placeholder="Name" />
                            </div>
                            <div class="form-group col-md-12">
                                <label for="Name">Email:*</label>
                                <input class="form-control" value={this.state.email} type="email" name="email" onChange={this.handleChange} placeholder="Email" />
                            </div>
                            <div class="form-group col-md-12">
                                <label for="Name">Phone:*</label>
                                <input class="form-control" value={this.state.phone} type="phone" name="phone" onChange={this.handleChange} placeholder="Phone" />
                            </div>
                            <div class="form-group col-md-12">
                                <label for="Name">Address:*</label>
                                <input class="form-control" value={this.state.address} type="text" name="address" onChange={this.handleChange} placeholder="Address" />
                            </div>

                            <div class="custom-control custom-checkbox">
                                <input
                                    name="service1"
                                    type="checkbox"
                                    class="custom-control-input"
                                    id="service1"
                                    checked={this.state.isGoing}
                                    onChange={this.handleChange} />
                                <label class="custom-control-label mr-2" for="service1">Service1</label>

                            </div>

                            <div class="custom-control custom-checkbox">
                                <input
                                    name="service2"
                                    type="checkbox"
                                    class="custom-control-input"
                                    id="service2"
                                    checked={this.state.isGoing}
                                    onChange={this.handleChange} />
                                <label class="custom-control-label mr-2" for="service2">Service2</label>

                            </div>

                            <div class="custom-control custom-checkbox">
                                <input
                                    name="service3"
                                    type="checkbox"
                                    class="custom-control-input"
                                    id="service3"
                                    checked={this.state.isGoing}
                                    onChange={this.handleChange} />
                                <label class="custom-control-label mr-2" for="service3">Service3</label>

                            </div>

                            <div class="custom-control custom-checkbox">
                                <input
                                    name="service4"
                                    type="checkbox"
                                    class="custom-control-input"
                                    id="service4"
                                    checked={this.state.isGoing}
                                    onChange={this.handleChange} />
                                <label class="custom-control-label mr-2" for="service4">Service4</label>

                            </div>
                           
                    </div>
                            <button type="submit" class="btn btn-primary mt-4">Submit</button>
                </form>
                </div>
            </React.Fragment>
                )
            }
}