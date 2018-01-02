/* eslint import/no-extraneous-dependencies: 0 */
import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({ movie }) => (
  <div>
    <h3>{movie.title}</h3>
  </div>
);

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Movie;
