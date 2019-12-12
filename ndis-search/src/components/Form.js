import React from 'react';
import { Link } from "react-router-dom";

export class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <div class="container">
                <h2>Form</h2>
                <form onSubmit={this.handleSubmit}>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="Name">Name:</label>
                            <input class="form-control" type="text" name="name" placeholder="Name"/>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="Name">Email:</label>
                            <input class="form-control" type="email" name="email" placeholder="Email"/>
                        </div>   
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                </div>
            </React.Fragment>
        )
    }
}