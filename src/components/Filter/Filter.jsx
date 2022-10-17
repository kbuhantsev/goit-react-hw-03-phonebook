import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

function Filter({ onInput }) {
  const handleInput = event => {
    const value = event.target.value;
    onInput({ value });
  };

  return (
    <TextField
      id="search"
      name="search"
      label="Find contacts by name"
      variant="standard"
      sx={{ marginBottom: '10px' }}
      onChange={handleInput}
    />
  );
}

Filter.propTypes = {
  onInput: PropTypes.func,
};

export default Filter;
