import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import { bindActionCreators } from 'redux';
import InputLabel from '@material-ui/core/InputLabel';

import { filterRating } from '../../actions/movies';

export const RatingSelection = ({ filterRating, filterRatingAction }) => (
  <div>
    <InputLabel htmlFor="rating">Rating:</InputLabel>
    <StarRatings
      rating={filterRating}
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
)

RatingSelection.propTypes = {
  filterRating: PropTypes.number,
  filterRatingAction: PropTypes.func.isRequired,
}

export const mapStateToProps = ({ movies: { filterRating }}) => ({
  filterRating,
});

export const mapDispatchToProps = dispatch => ({
  filterRatingAction: bindActionCreators(filterRating, dispatch),
})