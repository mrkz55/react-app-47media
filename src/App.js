import React, {Component} from 'react';

import Grow from '@material-ui/core/Grow';
import Zoom from '@material-ui/core/Zoom';
import Slide from '@material-ui/core/Slide';
import Fade from '@material-ui/core/Fade';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import AddIcon from '@material-ui/icons/Add';

import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames';

import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import pink from  '@material-ui/core/colors/pink';
import grey from  '@material-ui/core/colors/grey';
import green from '@material-ui/core/colors/green';
import orange from '@material-ui/core/colors/orange';

import AppBar from './AppBar';
import Hero from './Hero';

import {darken, lighten} from '@material-ui/core/styles/colorManipulator';

import Paper from '@material-ui/core/Paper';

import CustomTextField from './components/AHigTextField';

import MultipleSelect from './components/AHigSelect';
import MultipleSelectCheckbox from './components/AHigSelectCheckbox';
import MultipleSelectChip from './components/AHigSelectChip';
import VerticalStepper from './components/AHigVerticalStepper';
import HorizontalStepper from './components/AHigHorizontalStepper';
import AHigTable from './components/AHigTable';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import {
  Query,
  Mutation,
} from 'react-apollo';

import {
  GET_THEME_STATE,
} from './query';

import GradientBackgroundImage from './assets/img/gradient_shape_bg.png';
import StackImage from './assets/img/stack.png';
import OrganicSharingImage from './assets/img/organic-sharing-illustration.png';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const styles = (theme) => ({
  fa: {
    color: '#9c47fc',
    display: 'block',
    background: `-webkit-linear-gradient(${green[300]}, ${green[600]});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;`,
    '&:hover': {
      backgroundColor: green[100],
    },
  },
  faOutline: {
    color: '#9c47fc',
    display: 'block',
    background: `-webkit-linear-gradient(${blue[300]}, ${blue[600]});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;`,
    '&:hover': {
      backgroundColor: blue[100],
    },
  },
  root: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
    // overflow: 'hidden',
    background: `radial-gradient(${grey[50]}, ${grey[300]})`,
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '5000px',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  itemButtonRoot: {
    width: 120,
    height: 120,
    color: theme.palette.getContrastText(pink[500]),
    background: `radial-gradient(${grey[50]}, ${grey[50]})`,
    // '&:hover': {
    //  width: 140,
    //  height: 140
    // },
    boxShadow: '0px 3px 5px -1px rgba(255, 255, 255, 0.2), 0px 6px 10px 0px rgba(255, 255, 255, 0.14), 0px 1px 18px 0px rgba(255, 255, 255, 0.12)',
    /* transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    transition: theme.transitions.create('height', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      })*/
  },
  fadeIn: {
    transition: theme.transitions.create('opacity', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  top: {
    marginTop: 70,
    marginBottom: 70,
  },
  topParagraph: {
    paddingTop: 20,
  },
  belowTheFoldOffsetTop: {
    top: 1000,
    background: 'linear-gradient(0deg, #261A37 0%, #233250 50%, #261A37 100%)',
  },
  belowTheFoldBackground: {
    width: '100%',
    background: `url(${GradientBackgroundImage})`,
    backgroundPosition: 'middle center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: window.innerWidth,
    /* [theme.breakpoints.up('lg')]: {
      backgroundSize: window.innerWidth,
    },*/
  },
  belowTheFoldOffsetBackground: {
    // backgroundPosition: '0px',
  },
  item: {
    marginTop: -70,
  },
  listItem: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  supportWindow: {
    background: 'linear-gradient(180deg, #293464 0%, #1D345C 100%)',
    height: '100%',
    padding: '32px 20px',
    position: 'relative',
  },
  supportWindowCenterContent: {
    justifyContent: 'center',
  },
  supportWindowTitle: {
    marginTop: '30px',
    textAlign: 'center',
    marginBottom: '12px',
    fontSize: '15px',
    fontWeight: 600,
    letterSpacing: '2.2px',
    color: '#AABDFF',
    lineHeight: '18px',
    textTransform: 'uppercase',
  },
  supportWindowButtonRoot: {
    width: 85,
    height: 85,
    borderRadius: '50%',
    margin: '0 auto 9px',
    backgroundImage: 'linear-gradient(-180deg, #354584 0%, #18315B 100%)',
    boxShadow: '0 5px 4px 0 #172E55',
    lineHeight: '1px',
  },
  supportWindowButtonIcon: {
    color: '#9c47fc',
    display: 'block',
    background: `-webkit-linear-gradient(${blue[300]}, ${blue[600]});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;`,
    '&:hover': {
      backgroundColor: blue[100],
    },
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
  gridContainerVerticalSpacer: {
    marginTop: 256,
  },
  textGradientRed: {
    background: `linear-gradient(to right, ${red[200]}, ${red[500]}) text`,
    background: `linear-gradient(to right, ${red[200]} 0%, ${red[500]} 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;`,
  },
  textGradientBlue: {
    background: `linear-gradient(to right, ${blue[200]}, ${blue[500]}) text`,
    background: `linear-gradient(to right, ${blue[200]} 0%, ${blue[500]} 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;`,
  },
  textGradientGreen: {
    background: `linear-gradient(to right, ${green[200]}, ${green[500]}) text`,
    background: `linear-gradient(to right, ${green[200]} 0%, ${green[500]} 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;`,
  },
  textGradientPink: {
    background: `linear-gradient(to right, ${pink[200]}, ${pink[500]}) text`,
    background: `linear-gradient(to right, ${pink[200]} 0%, ${pink[500]} 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;`,
  },
  textGradientOrange: {
    background: `linear-gradient(to right, ${orange[200]}, ${orange[500]}) text`,
    background: `linear-gradient(to right, ${orange[200]} 0%, ${orange[500]} 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;`,
  },
  inlineText: {
    display: 'inline-block',
    paddingRight: 10,
  },
  textField: {
    width: '100%',
    root: {
      background: 'green',
    },
  },
  stackImage: {
    // position: 'absolute',
    top: 900,
    right: 0,
    width: '53vw',
    maxWidth: 724,
  },
  stackImageContainer: {
    height: 900,
    background: `url(${StackImage})`,
    backgroundPosition: '0px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '500px',
  },
  aHigRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
    error: {
      boxShadow: `0 2px 35px 3px ${red[500]}`,
    },
  },
  aHigInputAdornment: {
    position: 'absolute',
    top: 11,
    right: 10,
  },
  aHigInput: {
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
      // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      boxShadow: '0 2px 35px 3px rgba(0,0,0,.4)',
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

const InlineEditActions = ({classes}) => (
  <InputAdornment className={classNames(classes.aHigInputAdornment)} position="end">
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

const SupportWindow = ({classes}) => (
  <Grid item={true} className={classNames(classes.margin)}>

    <div className={classNames(classes.supportWindow)}>
    test!
    </div>

  </Grid>
);

const CustomListItem = ({classes, children}) => (
  <ListItem className={classNames(classes.listItem)}>{children}</ListItem>
);

const Item = ({position, classes, icon, title, children}) => (

  <Fade in={true} style={{transitionDelay: position * 500}} className={classNames(classes.fadeIn, classes.item)}>
    <Grid container={true} direction="column" alignItems="center">

      <Grid item={true}>
        <Button variant="fab" aria-label={title} className={classNames(classes.margin, classes.itemButtonRoot)}>
          {icon}
        </Button>
      </Grid>

      <Grid item={true}>
        <Typography variant="title">{title}</Typography>
      </Grid>

      <Grid item={true}>
        <Typography variant="body2">{children}</Typography>
      </Grid>

    </Grid>
  </Fade>
);

const BelowTheFold = ({classes, theme}) => (

  <Query query={GET_THEME_STATE}>
    {({data: {themeState}}) => (

      <div className={classNames(classes.appFrame, classes.belowTheFoldOffsetTop)} style={{opacity: themeState.scroll < 1000 ? 0 : 1}}>

        <div className={classNames(classes.belowTheFoldBackground, classes.belowTheFoldOffsetBackground)}>

          <Grid container={true} spacing={32} className={classNames(classes.gridContainerWidth)} >

            <Grid item={true} xs={12} sm={6}>

              <Paper elevation={0}>

                <Grid container={true} spacing={16} alignItems="center" justifyContent="center" className={classNames(classes.supportWindowCenterContent)}>

                  <Grid item={true} xs={12}>
                    <Typography variant="caption" className={classNames(classes.supportWindowTitle)}>Fully supported languages</Typography>
                  </Grid>

                  <Grid item={true}>
                    <Button variant="fab" aria-label="test" className={classNames(classes.margin, classes.supportWindowButtonRoot)}>
                      <i className={classNames(classes.supportWindowButtonIcon, 'fab fa-aviato fa-4x')} />
                    </Button>
                    <Typography variant="caption">aviato</Typography>
                  </Grid>

                  <Grid item={true}>
                    <Button variant="fab" aria-label="test" className={classNames(classes.margin, classes.supportWindowButtonRoot)}>
                      <i className={classNames(classes.supportWindowButtonIcon, 'fab fa-500px fa-4x')} />
                    </Button>
                    <Typography variant="caption">500px</Typography>
                  </Grid>

                  <Grid item={true}>
                    <Button variant="fab" aria-label="test" className={classNames(classes.margin, classes.supportWindowButtonRoot)}>
                      <i className={classNames(classes.supportWindowButtonIcon, 'fab fa-accessible-icon fa-4x')} />
                    </Button>
                    <Typography variant="caption">accessible</Typography>
                  </Grid>

                  <Grid item={true}>
                    <Button variant="fab" aria-label="test" className={classNames(classes.margin, classes.supportWindowButtonRoot)}>
                      <i className={classNames(classes.supportWindowButtonIcon, 'fab fa-accusoft fa-4x')} />
                    </Button>
                    <Typography variant="caption">accusoft</Typography>
                  </Grid>

                  <Grid item={true}>
                    <Button variant="fab" aria-label="test" className={classNames(classes.margin, classes.supportWindowButtonRoot)}>
                      <i className={classNames(classes.supportWindowButtonIcon, 'fab fa-adn fa-4x')} />
                    </Button>
                    <Typography variant="caption">adn</Typography>
                  </Grid>

                  <Grid item={true}>
                    <Button variant="fab" aria-label="test" className={classNames(classes.margin, classes.supportWindowButtonRoot)}>
                      <i className={classNames(classes.supportWindowButtonIcon, 'fab fa-adversal fa-4x')} />
                    </Button>
                    <Typography variant="caption">adversal</Typography>
                  </Grid>

                  <Grid item={true}>
                    <Button variant="fab" aria-label="test" className={classNames(classes.margin, classes.supportWindowButtonRoot)}>
                      <i className={classNames(classes.supportWindowButtonIcon, 'fab fa-affiliatetheme fa-4x')} />
                    </Button>
                    <Typography variant="caption">affiliate</Typography>
                  </Grid>

                  <Grid item={true}>
                    <Button variant="fab" aria-label="test" className={classNames(classes.margin, classes.supportWindowButtonRoot)}>
                      <i className={classNames(classes.supportWindowButtonIcon, 'fab fa-algolia fa-4x')} />
                    </Button>
                    <Typography variant="caption">algolia</Typography>
                  </Grid>

                  <Grid item={true}>
                    <Button variant="fab" aria-label="test" className={classNames(classes.margin, classes.supportWindowButtonRoot)}>
                      <i className={classNames(classes.supportWindowButtonIcon, 'fab fa-amazon fa-4x')} />
                    </Button>
                    <Typography variant="caption">amazon</Typography>
                  </Grid>

                  <Grid item={true}>
                    <Button variant="fab" aria-label="test" className={classNames(classes.margin, classes.supportWindowButtonRoot)}>
                      <i className={classNames(classes.supportWindowButtonIcon, 'fab fa-amazon-pay fa-4x')} />
                    </Button>
                    <Typography variant="caption">amazon pay</Typography>
                  </Grid>

                  <Grid item={true}>
                    <Button variant="fab" aria-label="test" className={classNames(classes.margin, classes.supportWindowButtonRoot)}>
                      <i className={classNames(classes.supportWindowButtonIcon, 'fab fa-amilia fa-4x')} />
                    </Button>
                    <Typography variant="caption">amilia</Typography>
                  </Grid>

                  <Grid item={true}>
                    <Button variant="fab" aria-label="test" className={classNames(classes.margin, classes.supportWindowButtonRoot)}>
                      <i className={classNames(classes.supportWindowButtonIcon, 'fab fa-android fa-4x')} />
                    </Button>
                    <Typography variant="caption">android juice</Typography>
                  </Grid>
                </Grid>

                <Grid container={true} spacing={16} alignItems="center">

                  <Grid item={true} xs={12}>
                    <Typography variant="caption" className={classNames(classes.supportWindowTitle)}>Partially supported languages</Typography>
                  </Grid>

                  <Grid item={true}>
                    <Button variant="fab" aria-label="test" className={classNames(classes.margin, classes.supportWindowButtonRoot)}>
                      <i className={classNames(classes.supportWindowButtonIcon, 'fab fa-aviato fa-4x')} />
                    </Button>
                    <Typography variant="caption">aviato</Typography>
                  </Grid>

                  <Grid item={true}>
                    <Button variant="fab" aria-label="test" className={classNames(classes.margin, classes.supportWindowButtonRoot)}>
                      <i className={classNames(classes.supportWindowButtonIcon, 'fab fa-500px fa-4x')} />
                    </Button>
                    <Typography variant="caption">500px</Typography>
                  </Grid>

                  <Grid item={true}>
                    <Button variant="fab" aria-label="test" className={classNames(classes.margin, classes.supportWindowButtonRoot)}>
                      <i className={classNames(classes.supportWindowButtonIcon, 'fab fa-accessible-icon fa-4x')} />
                    </Button>
                    <Typography variant="caption">accessible</Typography>
                  </Grid>

                  <Grid item={true}>
                    <Button variant="fab" aria-label="test" className={classNames(classes.margin, classes.supportWindowButtonRoot)}>
                      <i className={classNames(classes.supportWindowButtonIcon, 'fab fa-accusoft fa-4x')} />
                    </Button>
                    <Typography variant="caption">accusoft</Typography>
                  </Grid>

                  <Grid item={true}>
                    <Button variant="fab" aria-label="test" className={classNames(classes.margin, classes.supportWindowButtonRoot)}>
                      <i className={classNames(classes.supportWindowButtonIcon, 'fab fa-adn fa-4x')} />
                    </Button>
                    <Typography variant="caption">adn</Typography>
                  </Grid>

                  <Grid item={true}>
                    <Button variant="fab" aria-label="test" className={classNames(classes.margin, classes.supportWindowButtonRoot)}>
                      <i className={classNames(classes.supportWindowButtonIcon, 'fab fa-adversal fa-4x')} />
                    </Button>
                    <Typography variant="caption">adversal</Typography>
                  </Grid>

                  <Grid item={true}>
                    <Button variant="fab" aria-label="test" className={classNames(classes.margin, classes.supportWindowButtonRoot)}>
                      <i className={classNames(classes.supportWindowButtonIcon, 'fab fa-affiliatetheme fa-4x')} />
                    </Button>
                    <Typography variant="caption">affiliate</Typography>
                  </Grid>

                  <Grid item={true}>
                    <Button variant="fab" aria-label="test" className={classNames(classes.margin, classes.supportWindowButtonRoot)}>
                      <i className={classNames(classes.supportWindowButtonIcon, 'fab fa-algolia fa-4x')} />
                    </Button>
                    <Typography variant="caption">algolia</Typography>
                  </Grid>

                  <Grid item={true}>
                    <Button variant="fab" aria-label="test" className={classNames(classes.margin, classes.supportWindowButtonRoot)}>
                      <i className={classNames(classes.supportWindowButtonIcon, 'fab fa-amazon fa-4x')} />
                    </Button>
                    <Typography variant="caption">amazon</Typography>
                  </Grid>

                  <Grid item={true}>
                    <Button variant="fab" aria-label="test" className={classNames(classes.margin, classes.supportWindowButtonRoot)}>
                      <i className={classNames(classes.supportWindowButtonIcon, 'fab fa-amazon-pay fa-4x')} />
                    </Button>
                    <Typography variant="caption">amazon pay</Typography>
                  </Grid>

                  <Grid item={true}>
                    <Button variant="fab" aria-label="test" className={classNames(classes.margin, classes.supportWindowButtonRoot)}>
                      <i className={classNames(classes.supportWindowButtonIcon, 'fab fa-amilia fa-4x')} />
                    </Button>
                    <Typography variant="caption">amilia</Typography>
                  </Grid>

                  <Grid item={true}>
                    <Button variant="fab" aria-label="test" className={classNames(classes.margin, classes.supportWindowButtonRoot)}>
                      <i className={classNames(classes.supportWindowButtonIcon, 'fab fa-android fa-4x')} />
                    </Button>
                    <Typography variant="caption">android juice</Typography>
                  </Grid>
                </Grid>

              </Paper>

            </Grid>

            <Grid item={true} xs={12} sm={6}>
              <Grid container={true} spacing={32}>
                <Grid item={true} xs={12}>
                  <Typography variant="title" className={classNames(classes.textGradientOrange)}>Develop, without limitations!</Typography>
                  <Typography variant="body1">Develop alone or with others in 15 languages with full support - real autocomplete, syntax highlighting, linting, and go-to definition. Code, compile, test, run, or even train AI - all on your own dynamically scalable container that gives you the processing power you need, when you need it.</Typography>
                </Grid>
                <Grid item={true} sm={6}>
                  <span className="fa-stack fa-2x">
                    <i className={classNames(classes.faOutline, 'fas fa-cloud fa-stack-2x')} />
                    <i className={classNames(classes.textGradientOrange, 'fa fa-chalkboard-teacher fa-stack-1x fa-inverse')} />
                  </span>
                  <Typography variant="subheading">
                    Language Support
                  </Typography>
                  <Typography variant="body2">Whether you are a frontend engineer, mobile developer, or data scientist, Coder provides the development support you need.</Typography>
                </Grid>
                <Grid item={true} sm={6}>
                  <span className="fa-stack fa-2x">
                    <i className={classNames(classes.faOutline, 'fas fa-cloud fa-stack-2x')} />
                    <i className={classNames(classes.textGradientOrange, 'fa fa-database fa-stack-1x fa-inverse')} />
                  </span>
                  <Typography variant="subheading">
                    Root Access
                  </Typography>
                  <Typography variant="body2">On Coder, you get root access to your own Ubuntu container. The power is in your hands.</Typography>
                </Grid>
                <Grid item={true} sm={6}>
                  <span className="fa-stack fa-2x">
                    <i className={classNames(classes.faOutline, 'fas fa-cloud fa-stack-2x')} />
                    <i className={classNames(classes.textGradientOrange, 'fa fa-bullseye fa-stack-1x fa-inverse')} />
                  </span>                  <Typography variant="subheading">
                    Ease of Use
                  </Typography>
                  <Typography variant="body2">Code anywhere, at any time, and on any machine in a fully collaborative and dynamically scalable development environment.</Typography>
                </Grid>
                <Grid item={true} sm={6}>
                  <span className="fa-stack fa-2x">
                    <i className={classNames(classes.faOutline, 'fas fa-cloud fa-stack-2x')} />
                    <i className={classNames(classes.textGradientOrange, 'fa fa-share-square fa-stack-1x fa-inverse')} />
                  </span>                  <Typography variant="subheading">
                    Plugin Support
                  </Typography>
                  <Typography variant="body2">Expand the IDE with plugins. Implement any language, or completely customize your development experience.</Typography>
                </Grid>
              </Grid>
            </Grid>

          </Grid>

          <Grid container={true} spacing={32} className={classNames(classes.gridContainerWidth, classes.gridContainerVerticalSpacer)} >

            <Grid item={true} xs={6} className={classNames(classes.bottom)} /* style={{background: `radial-gradient(${pink[400]}, ${pink[500]})`}}*/>

              <Grid container={true} spacing={32}>

                <Grid item={true} xs={12}>
                  <Typography variant="title" className={classNames(classes.textGradientPink)}>Extreme Speed</Typography>
                  <Typography variant="body1">Coder gives you unrestricted access to some of the most powerful servers on earth. With Coder’s Fast Time enabled, we dynamically scale your CPU, RAM, NETWORK, and I/O—all based on whatever your process requires.</Typography>
                </Grid>
                <Grid item={true} sm={6}>
                  <i className={classNames(classes.textGradientPink, 'fa', 'fa-chalkboard-teacher', 'fa-3x')} />
                  <Typography variant="subheading">
                    Fast Time
                  </Typography>
                  <Typography variant="body2">Fast Time dynamically scales your computational resources based on your needs. Up to 96 CPU cores of power, ready for you as needed.</Typography>
                </Grid>
                <Grid item={true} sm={6}>
                  <i className={classNames(classes.textGradientPink, 'fa', 'fa-database', 'fa-3x')} />
                  <Typography variant="subheading">
                    Containers in a second
                  </Typography>
                  <Typography variant="body2">Get started faster and easier than ever before. Coder’s containers load in less than a second. No more waiting.</Typography>
                </Grid>

              </Grid>

            </Grid>


            <Grid item={true} xs={6} className={classNames(classes.stackImageContainer)} />

          </Grid>

          <Grid container={true}  className={classNames(classes.gridContainerWidth, classes.gridContainerVerticalSpacer)}>

            <Grid item={true} xs={6}>
              <img src={OrganicSharingImage} style={{maxWidth: '100%'}} />
            </Grid>

            <Grid container={true} xs={6} spacing={32}>

              <Grid item={true} xs={12}>
                <Typography variant="title" className={classNames(classes.textGradientGreen)}>Build together</Typography>
                <Typography variant="body1">Share code, collaborate in real time, and stay connected on Coder.</Typography>
              </Grid>
              <Grid item={true} sm={12}>
                <i className={classNames(classes.textGradientGreen, 'fa', 'fa-chalkboard-teacher', 'fa-3x')} />
                <Typography variant="subheading">
                    Shared Workspaces
                </Typography>
                <Typography variant="body2">Forget about struggling to replicate a coworker’s environment. With Coder’s Shared Workspaces, development environments are consistent across machines. No additional configuration is necessary.</Typography>
              </Grid>
              <Grid item={true} sm={12}>
                <i className={classNames(classes.textGradientGreen, 'fa', 'fa-database', 'fa-3x')} />
                <Typography variant="subheading">
                    Granular Permissions
                </Typography>
                <Typography variant="body2">Every aspect of your organization is under your control with our integrated granular permissions. Real-time collaboration is easily enabled, while at the same time, no one will ever have access to something they don’t need.</Typography>
              </Grid>

            </Grid>

          </Grid>

          <Grid container={true}  className={classNames(classes.gridContainerWidth, classes.gridContainerVerticalSpacer)} >

            <Paper elevation={0}>
              <Grid container={true} xs={6} spacing={32}>

                <Grid item={true} xs={12}>

                  <CustomTextField
                    id="name"
                    name="name"
                    label="Full name"
                    placeholder="Joe Spammer"
                  />


                </Grid>

                <Grid item={true} xs={12}>

                  <CustomTextField
                    id="email"
                    name="email"
                    label="Email"
                    placeholder="joe@gmail.com"
                  />

                </Grid>
                <Grid item={true} xs={12}>

                  <CustomTextField
                    id="reason"
                    name="reason"
                    label="Why are you interested?"
                    placeholder="I like to spam stuff on social.."
                    editable={true}
                  />

                </Grid>

                <Grid item={true} xs={12}>

                  <MultipleSelect label="test multiple" />

                </Grid>

                <Grid item={true} xs={12}>

                  <MultipleSelectCheckbox label="test multiple checkbox" />

                </Grid>

                <Grid item={true} xs={12}>

                  <MultipleSelectChip label="test multiple chips" />

                </Grid>

              </Grid>

            </Paper>

          </Grid>

          <Tabs
            value={0}
            indicatorColor="primary"
            textColor="primary"
            onChange={null}
          >
            <Tab label="Active" />
            <Tab label="Disabled" />
            <Tab label="Active" />
          </Tabs>

          <Grid container={true} xs={12} spacing={32} direction="column">

            <Grid item={true}>

              <Paper elevation={0}>


                <AHigTable />

              </Paper>


            </Grid>

          </Grid>

          <Grid container={true}  className={classNames(classes.gridContainerWidth, classes.gridContainerVerticalSpacer)} >

            <Paper elevation={0}>

              <Grid container={true} xs={12} spacing={32}>

                <Grid item={true} xs={6}>

                  <VerticalStepper />

                </Grid>

                <Grid item={true} xs={6}>

                  <MultipleSelect label="test multiple" />

                  <MultipleSelectCheckbox label="test multiple checkbox" />

                  <MultipleSelectChip label="test multiple chips" />

                </Grid>

              </Grid>

            </Paper>
          </Grid>

          <Grid container={true}  className={classNames(classes.gridContainerWidth, classes.gridContainerVerticalSpacer)} >

            <Paper elevation={0}>

              <Grid container={true} xs={12} spacing={32} direction="column">

                <Grid item={true}>

                  <HorizontalStepper />

                </Grid>

                <Grid item={true}>

                  <MultipleSelect label="test multiple" />

                  <MultipleSelectCheckbox label="test multiple checkbox" />

                  <MultipleSelectChip label="test multiple chips" />

                </Grid>

              </Grid>

            </Paper>
          </Grid>

        </div>

      </div>

    )}
  </Query>
);

const App = ({classes}) => (
  <div className={classNames(classes.root)} >

    <AppBar />

    <Hero />

    <BelowTheFold classes={classes} />

  </div>
);

export default withStyles(styles)(App);
