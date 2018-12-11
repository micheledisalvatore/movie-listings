import { connect } from 'react-redux';

import { RatingSelection, mapStateToProps, mapDispatchToProps } from './RatingSelection';

export default connect(mapStateToProps, mapDispatchToProps)(RatingSelection);
