import React from 'react';
import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from 'apollo-client';
import {HttpLink, createHttpLink} from 'apollo-link-http';
// import {setContext} from 'apollo-link-context';
// import {RetryLink} from 'apollo-link-retry';
import {withClientState} from 'apollo-link-state';
import {onError} from 'apollo-link-error';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloLink, concat} from 'apollo-link';

import * as glob from './*.resolver.js';

import {
  get,
  merge,
} from 'lodash';

const API_URL = 'http://localhost:8000/graphql';
// const HISTORY = createHistory();
const cache = new InMemoryCache();

window.cache = cache;

/**
 * Log the user out
 *
 * @return void
 */
const createResolvers = () => {
  var typeDefs = '', resolvers = {}, defaults = {};

  for (let [k, v] of Object.entries({...glob})) {
    if (typeof v.typeDefs !== 'undefined')
      typeDefs = `${typeDefs} ${v.typeDefs}`;

    if (typeof v.resolvers !== 'undefined') {
      resolvers = merge(resolvers, v.resolvers);
    }

    if (typeof v.defaults !== 'undefined')
      defaults = {...v.defaults, ...defaults};
  }

  return {typeDefs, defaults, resolvers};
};

/**
 * Log the user out
 *
 * @return void
 */
const logout = () => {
 	cache.clear();
};


/**
 * Log the user in
 *
 * @return void
 */
const login = () => {
 	localStorage.removeItem('token');
 	window.location.pathname = '/login';
};


/**
 * Lock the users screen
 *
 * @return void
 */
const lock = () => {
 	localStorage.removeItem('token');
 	window.location.pathname = '/login';
};


/**
 * Set the Authorization header
 *
 * @param {object} operation - The ApolloJS operation
 * @param {object} forward - The next ApolloJS operation
 *
 * @return {object}
 */
const setAuthorizationHeader = (operation, forward) => {
 	const token = localStorage.getItem('token');

 	operation.setContext((context) => ({
 		...context,
 		headers: {
 			...operation.headers,
 			Authorization: token ? `Bearer: ${token}` : '',
 		},
 	}));

 	return forward(operation);
};


/**
 * Set the Authorization header
 *
 * @param {object} operation - The ApolloJS operation
 * @param {object} forward - The next ApolloJS operation
 *
 * @return {object}
 */
const getTokenFromResponse = (operation, forward) =>
  forward(operation).map((response) => {
 	const token = get(response, 'data.Authenticate.token');
 	token && localStorage.setItem('token', token);
 	return response;
  });


/**
 * Set the Authorization header
 *
 * @param {object} operation - The ApolloJS operation
 * @param {object} forward - The next ApolloJS operation
 *
 * @return {object}
 */
const logLocalState = (operation, forward) => {
 	console.log(operation);
 	return forward(operation);
};


/**
 * Set the Authorization header
 *
 * @param {object} operation - The ApolloJS operation
 * @param {object} forward - The next ApolloJS operation
 *
 * @return {object}
 */
const errorLink = onError((request) => {
  if (get(request, 'networkError.result.error') == 'token_invalid') {
    login();
  } else if (get(request, 'networkError.result.error') == 'token_expired') {
    lock();
  }

  return request;
});

const httpLink = new HttpLink({
  uri: API_URL,
});

const stateLinkConfig = createResolvers();

const stateLink = withClientState({
  ...stateLinkConfig,
  cache,
});

const client = new ApolloClient({
  link: ApolloLink.from([
    logLocalState,
    errorLink,
    stateLink,
    setAuthorizationHeader,
    getTokenFromResponse,
    httpLink,
  ]),
  cache,
});

window.client = client;

class ApolloClientWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ApolloProvider client={client}>
        {this.props.children}
      </ApolloProvider>);
  }
}

export default ApolloClientWrapper;
