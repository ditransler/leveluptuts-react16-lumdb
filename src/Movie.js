import React, { Component } from 'react';

export default class Movie extends Component {
    render() {
        const {title} = this.props.movie;
        return (
            <div>
                {title}
            </div>
        );
    }
}
