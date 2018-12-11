export const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: 64,
  },
  toolBar: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'left',

    [theme.breakpoints.up('sm')]: {
      justifyContent: 'space-around',
    },
  },
});
