import gql from 'graphql-tag';

import {
  GET_THEME_STATE,
  SET_THEME_STATE,
  GET_THEME_STATE_PALETTE,
  GET_THEME_STATE_SCROLL,
} from './query';

import {darken, lighten} from '@material-ui/core/styles/colorManipulator';

export const typeDefs = `
type ThemeState {
  palette: String
  scroll: Integer
  gradientIndex: Float
  gradientString: String
}

type Mutation {
  setThemeState(palette: String, scroll: Integer, gradientIndex: Float, gradientString: String): ThemeState
}

type Query {
  themeState(palette: String, scroll: Integer, gradientIndex: Float, gradientString: String): ThemeState
}
`;

window.addEventListener('scroll', () => {
  var i = (500 - window.scrollY) / 500;

  window.client.mutate({
    mutation: SET_THEME_STATE,
    variables: {
      scroll: window.scrollY,
      palette: window.scrollY < 500 ? 'light' : 'dark',
      gradientIndex: i,
      gradientString: `linear-gradient(to top, ${lighten('rgb(38, 26, 55)', i > 0 ? i : 0)}, ${lighten('rgb(35, 50, 80)', i > 0 ? i : 0)})`,
    },
  });
}, false);

export const defaults = {
  themeState: {
    __typename: 'ThemeState',
    palette: 'light',
    scroll: 0,
    gradientIndex: 0,
    gradientString: null,
  },
};

const resolvers = {
  Mutation: {
    setThemeState: (_, variables, {cache}) => {
      cache.writeData({
        data: {
          __typename: 'Mutatation',
          themeState: {
            ...variables,
            __typename: 'ThemeState',
            // ...variables
          },
        },
      });

      return null;
    },
  },
};

export default {typeDefs, resolvers, defaults};
