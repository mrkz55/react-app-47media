import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';


import classNames from 'classnames';

import {
  Query,
  Mutation,
} from 'react-apollo';

import {
  GET_THEME_STATE,
} from './query';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    // minHeight: 114
  },
  sticky: {
    position: 'fixed',
    width: '100%',
    zIndex: 99,
  },
  menu: {
    flexGrow: 1,
  },
  menuItem: {
    paddingLeft: 30,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  button: {
    margin: theme.spacing.unit,
  },
  hideOnXs: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  minWidth: {
    [theme.breakpoints.up('sm')]: {
      width: 600,
    },
    [theme.breakpoints.up('md')]: {
      width: 900,
    },
    [theme.breakpoints.up('lg')]: {
      width: 1200,
    },
  },
  toolbarRoot: {
    marginLeft: 10,
    marginRight: 10,
    width: 'calc(100% - 20px)',
    [theme.breakpoints.up('lg')]: {
      margin: '0 auto',
      width: 1500,
    },
  },
});

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  handleChange = (event, checked) => {
    this.setState({auth: checked});
  };

  handleMenu = (event) => {
    this.setState({anchorEl: event.currentTarget});
  };

  handleClose = () => {
    this.setState({anchorEl: null});
  };

  render() {
    const {classes, scroll} = this.props;
    const {auth, anchorEl} = this.state;
    const open = Boolean(anchorEl);

    return (

      <Query query={GET_THEME_STATE}>
        {({data: {themeState}}) => (
          <div className={classNames(classes.root, classes.sticky, classes.hideOnXs)}>
            <AppBar position="sticky" color={themeState.palette == 'light' ? 'primary' : 'secondary'}>
              <Toolbar classes={{root: classes.toolbarRoot}} classNames={classNames(classes.minWidth)}>
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="body2" color="inherit" className={classNames(classes.menu)}>
                  <Button className={classNames(classes.menuItem)}>FAQ</Button>
                  <Button className={classNames(classes.menuItem)}>Blog</Button>
                  <Button className={classNames(classes.menuItem)}>Solutions</Button>
                </Typography>
                <Button variant="contained" color="secondary" className={classes.button}>Sign Up</Button>
                <Button variant="contained" color="primary" className={classes.button}>Log In</Button>
              </Toolbar>
            </AppBar>
          </div>
        )}
      </Query>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);
