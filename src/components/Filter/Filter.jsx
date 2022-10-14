import React from 'react';
import PropTypes from 'prop-types';
// import { LabelStyled, InputStyled } from './Filter.styled';
import TextField from '@mui/material/TextField';

function Filter({ onInput }) {
  const handleInput = event => {
    const value = event.target.value;
    onInput({ value });
  };

  return (
    // <LabelStyled>
    //   Find contacts by name
    //   <InputStyled name="search" onChange={handleInput}></InputStyled>
    // </LabelStyled>
    <TextField
      id="standard-basic"
      name="search"
      label="Find contacts by name"
      variant="standard"
      margin="normal"
      onChange={handleInput}
    />
  );
}

Filter.propTypes = {
  onInput: PropTypes.func,
};

export default Filter;
