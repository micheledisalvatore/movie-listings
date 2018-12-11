import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'ramda';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

export const MovieCard = ({ classes, image, title, genreIds, genres }) => (
  <Card className={classes.card}>
    <div className={classes.details}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        className={classes.media}
        image={`https://image.tmdb.org/t/p/w500/${image}`}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <div>
        {!isEmpty(genres) && genreIds.map(genreId => {
          const { name } = genres[genreId];
          return (
            <Chip
              key={genreId}
              label={name}
              className={classes.chip}
            />
          )}
        )}
        </div>
      </CardContent>
    </div>
  </Card>
);

MovieCard.propTypes = {
  classes: PropTypes.object.isRequired,
  genreIds: PropTypes.arrayOf(PropTypes.number),
  genres: PropTypes.shape({
    name: PropTypes.string,
  }),
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

MovieCard.defaultProps = {
  genreIds: [],
  genres: {},
}

export const mapStateToProps = ({ genres: { list }}) => ({
  genres: list || {},
})