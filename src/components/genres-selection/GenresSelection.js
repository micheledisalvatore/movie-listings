import React from 'react';
import PropTypes from 'prop-types';
import { values } from 'ramda';
import { bindActionCreators } from 'redux';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { setFilterGenres } from '../../actions/genres';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const GenresSelection  = ({
  setFilterGenresAction,
  classes,
  genres,
  filters,
}) => {
  const handleChange = event => {
    const { target: { value } } = event;

    setFilterGenresAction(value);
  };

  return (
    <div className={classes.root}>
      <InputLabel htmlFor="select-multiple" className={classes.label}>Genres:</InputLabel>
      <FormControl className={classes.formControl}>
        <Select
          multiple
          value={filters}
          onChange={handleChange}
          input={<Input id="select-multiple" />}
          MenuProps={MenuProps}
        >
          <MenuItem disabled value="">
            <em>All</em>
          </MenuItem>
          {genres.map(({ id, name }) => (
            <MenuItem key={id} value={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

GenresSelection.propTypes = {
  classes: PropTypes.object.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
  filters: PropTypes.arrayOf(PropTypes.number).isRequired,
  setFilterGenresAction: PropTypes.func.isRequired,
};

export const mapStateToProps = ({ genres: { list, filters }}) => ({
  genres: values(list).sort((a, b) => a.name.localeCompare(b.name)) || [],
  filters,
});

export const mapDispatchToProps = dispatch => ({
  setFilterGenresAction: bindActionCreators(setFilterGenres, dispatch),
});
