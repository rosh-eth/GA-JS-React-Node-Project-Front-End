import React from 'react';
import {Form} from './Form';

export class Search extends React.Component {
    constructor (props) {
        super(props) 
    }

    render() {
        return (
            <React.Fragment>
                <p>Home</p>
                <Form />
            </React.Fragment>
        )
    }
}