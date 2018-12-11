import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { MovieCard, mapStateToProps } from './MovieCard';
import { styles } from './MovieCard.styled';

export default compose(
  withStyles(styles),
  connect(mapStateToProps),
)(MovieCard);
