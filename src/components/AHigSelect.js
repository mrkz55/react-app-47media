import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import red from '@material-ui/core/colors/red';

const styles = (theme) => ({
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
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
  select: {
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
      borderRadius: 8,
      borderColor: '#80bdff',
      backgroundColor: '#3a487d',
      // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      boxShadow: '0 2px 40px 3px rgba(0,0,0,.5)',
    },
    '&:hover': {
      borderRadius: 8,
      borderColor: '#80bdff',
      backgroundColor: '#3a487d',
      // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      boxShadow: '0 2px 35px 3px rgba(0,0,0,.3)',
    },
  },
});

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

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

class MultipleSelect extends React.Component {
  state = {
    name: [],
  };

  handleChange = (event) => {
    this.setState({name: event.target.value});
  };

  render() {
    const {classes, theme} = this.props;

    return (
      <FormControl fullWidth={true}>
        <InputLabel htmlFor="select-multiple">{this.props.label}</InputLabel>
        <Select
          multiple={true}
          value={this.state.name}
          onChange={this.handleChange}
          input={<Input id="select-multiple" />}
          classes={{
            root: classes.root,
            select: classes.select,
          }}
          disableUnderline={true}
          InputLabelProps={{
            shrink: true,
            className: classes.formLabel,
          }}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={{
                fontWeight:
                    this.state.name.indexOf(name) === -1 ?
                      theme.typography.fontWeightRegular :
                      theme.typography.fontWeightMedium,
              }}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
}

MultipleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(MultipleSelect);
