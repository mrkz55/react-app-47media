import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import classNames from 'classnames';
import Button from '@material-ui/core/Button';

import OnScroll from 'react-on-scroll';
import {darken, lighten} from '@material-ui/core/styles/colorManipulator';

import {
  Query,
  Mutation,
} from 'react-apollo';

import {
  GET_THEME_STATE,
} from './query';

const styles = (theme) => ({
  container: {
    height: 2000,
  },
  header: {
    color: 'rgb(64, 79, 119)',
  },
  span: {
    background: 'linear-gradient(to right, rgb(29, 212, 202), rgb(97, 100, 250)) text',
    background: `linear-gradient(to right, #30CFD0 0%, #330867 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;`,
    font: {
      size: '20vw',
    },
  },
  gridContainerBackground: {
    width: '100%',
  },
  gridContainerWidth: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    width: `calc(100% - ${theme.spacing.unit * 4}px)`,
    [theme.breakpoints.up('lg')]: {
      margin: '0 auto',
      width: 1200,
    },
  },
  inlineText: {
    display: 'inline-block',
    paddingRight: 10,
  },
});

const Hero = ({classes}) => (

  <Query query={GET_THEME_STATE}>
    {({data: {themeState}}) => (
      <div className={classNames(classes.gridContainerBackground)} style={{height: `${window.innerHeight}px`, position: themeState.scroll < 1000 ? 'fixed' : 'relative', top: themeState.scroll < 1000 ? 0 : 1000, background: themeState.gradientString}}>
        <Grid container={true} direction="row" justify="flex-start" alignItems="center" className={classNames(classes.container, classes.gridContainerWidth)}>
          <Grid item={true}>
            <div>
              <Typography className={classNames(classes.inlineText)} variant="display1" component="span">Corperate </Typography>
              <Typography className={classNames(classes.inlineText)} variant="display2" component="span">Social Strategy,</Typography>
              <Typography className={classNames(classes.inlineText)} variant="display1" component="span">Solved!</Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    )}
  </Query>

);

export default withStyles(styles)(Hero);
