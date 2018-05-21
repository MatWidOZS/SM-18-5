import React from 'react';
import ReactDOM from 'react-dom';
// import App from './containers/App'

// ReactDOM.render(<App />, document.getElementById('root'))

// dlaczego nie hot?

import {AppContainer} from 'react-hot-loader';

import App from './App';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NewApp = require('./App').default;
    render(NewApp)
  });
}