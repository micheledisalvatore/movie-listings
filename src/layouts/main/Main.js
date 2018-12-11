import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import MoviesList from '../../components/movies-list';
import GenresSelection from '../../components/genres-selection';
import RatingSelection from '../../components/rating-selection';

export const Main = ({ classes }) =>  (
  <div className={classes.root}>
    <AppBar position="fixed" color="default" className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <GenresSelection />
        <RatingSelection />
      </Toolbar>
    </AppBar>
    <MoviesList />
  </div>
);

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};
