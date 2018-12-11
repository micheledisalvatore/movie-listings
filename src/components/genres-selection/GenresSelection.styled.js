export const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  label: {
    display: 'inline-block',
  },
  formControl: {
    minWidth: 120,
    maxWidth: 200,

    [theme.breakpoints.up('sm')]: {
      maxWidth: 300,
    },
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
  noLabel: {
    marginTop: theme.spacing.unit * 3,
  },
});
