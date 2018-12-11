import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { values } from 'ramda';

import Grid from '@material-ui/core/Grid';

import MovieCard from '../movie-card';
import { getMovies } from '../../actions/movies';

export class MoviesList extends Component {
  constructor(props) {
    super(props);

    props.getMoviesAction();
  }

  render() {
    const { classes, movies } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          { movies.map(({
            id, poster_path: image, title, genre_ids: genreIds,
          }) => (
            <Grid item xs={12} sm={6} md={3} key={id} className={classes.item}>
              <MovieCard image={image} title={title} genreIds={genreIds} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

MoviesList.propTypes = {
  classes: PropTypes.object.isRequired,
  getMoviesAction: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      genre_ids: PropTypes.arrayOf(PropTypes.number),
      poster_path: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
};

MoviesList.defaultProps = {
  movies: [],
};

const filterMovies = (filterRating, filterGenres) => ({
  vote_average: voteAverage,
  genre_ids: genreIds,
}) => {
  const isMatchingRating = voteAverage >= (filterRating * 2);
  const hasSelectedCategory = filterGenres.every(filterGenre => genreIds.indexOf(filterGenre) > -1);

  return isMatchingRating && (filterGenres.length === 0 || hasSelectedCategory);
};

const sortByPopularity = (a, b) => b.popularity - a.popularity;

export const mapStateToProps = ({ movies: { list, filterRating }, genres: { filters } }) => ({
  movies: values(list).filter(filterMovies(filterRating, filters)).sort(sortByPopularity) || [],
});

export const mapDispatchToProps = dispatch => ({
  getMoviesAction: bindActionCreators(getMovies, dispatch),
});
