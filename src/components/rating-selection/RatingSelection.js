import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import { bindActionCreators } from 'redux';
import InputLabel from '@material-ui/core/InputLabel';

import { filterRating } from '../../actions/movies';

export const RatingSelection = ({ rating, filterRatingAction }) => (
  <div>
    <InputLabel htmlFor="rating">Rating:</InputLabel>
    <StarRatings
      rating={rating}
      starRatedColor="yellow"
      starEmptyColor="white"
      starHoverColor="yellow"
      starDimension="25px"
      changeRating={filterRatingAction}
      numberOfStars={5}
      name="rating"
      id="rating"
    />
  </div>
);

RatingSelection.propTypes = {
  rating: PropTypes.number.isRequired,
  filterRatingAction: PropTypes.func.isRequired,
};

export const mapStateToProps = ({ movies: { filterRating: rating } }) => ({
  rating,
});

export const mapDispatchToProps = dispatch => ({
  filterRatingAction: bindActionCreators(filterRating, dispatch),
});
