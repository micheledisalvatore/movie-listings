import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { MoviesList, mapStateToProps, mapDispatchToProps } from './MoviesList';
import { styles } from './MoviesList.styled';

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(MoviesList);
