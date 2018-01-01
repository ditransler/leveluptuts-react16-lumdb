import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Movie extends Component {
    static propTypes = {
        movie: PropTypes.shape({
            title: PropTypes.string.isRequired
        }),
        desc: PropTypes.string
    }

    static defaultProps = {
        desc: 'A description is not available'
    }

    render() {
        const {title} = this.props.movie;
        const {desc} = this.props;
        return (
            <div>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        );
    }
}
