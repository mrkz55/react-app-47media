import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import MuiTextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

import red from '@material-ui/core/colors/red';

import classNames from 'classnames';

const styles = (theme) => ({
  root: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
    error: {
      boxShadow: `0 2px 35px 3px ${red[500]}`,
    },
  },
  inputAdornment: {
    position: 'absolute',
    top: 11,
    right: 10,
  },
  input: {
    borderRadius: 4,
    backgroundColor: '#2D3A6E',
    // border: '1px solid #ced4da',
    borderRadius: 8,
    padding: '20px 25px',
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow', 'background-color']),
    boxShadow: '0 2px 27px 3px rgba(0,0,0,.06)',
    height: 36,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      backgroundColor: '#3a487d',
      borderColor: '#80bdff',
      boxShadow: '0 2px 35px 3px rgba(0,0,0,.4)',
    },
    '&:hover': {
      borderRadius: 8,
      borderColor: '#80bdff',
      backgroundColor: '#3a487d',
      boxShadow: '0 2px 35px 3px rgba(0,0,0,.3)',
    },
  },
  formLabel: {

  },
});

const InlineEditActions = ({classes}) => (
  <InputAdornment className={classNames(classes.inputAdornment)} position="end">
    <IconButton
      color="primary"
      aria-label="Save edit"
      onClick={true}
      onMouseDown={true}
    >
      <i className="far fa-check-square" />
    </IconButton>
    <IconButton
      color="secondary"
      aria-label="Cancel edit"
      onClick={true}
      onMouseDown={true}
    >
      <i className="far fa-window-close" />
    </IconButton>
  </InputAdornment>);

const TextField = ({classes, styles, id, name, label, placeholder, value, fullWidth = true, editable = false}) => (
  <MuiTextField
    id={id}
    name={name}
    label={label}
    placeholder={placeholder}
    fullWidth={fullWidth}
    InputProps={{
      disableUnderline: true,
      classes: {
        root: classes.root,
        input: classes.input,
      },
      startAdornment: editable ? <InlineEditActions classes={classes} /> : null,
    }}
    InputLabelProps={{
      shrink: true,
      className: classes.formLabel,
    }}
  />);

TextField.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(TextField);
