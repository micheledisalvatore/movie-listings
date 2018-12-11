import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { GenresSelection, mapStateToProps, mapDispatchToProps } from './GenresSelection';
import { styles } from './GenresSelection.styled';

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(GenresSelection);
