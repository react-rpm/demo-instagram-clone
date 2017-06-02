import React from 'react';

import { render } from 'react-dom';

//import CSS
import css from './styles/style.styl';

//Import Components
import App from './components/App';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

//import react router deps
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
import Perf from 'react-addons-perf';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

Window.Perf = Perf;
Perf.start();
render(router, document.getElementById('root'));
Perf.stop();

const measurements = Perf.getLastMeasurements();

Perf.printInclusive(measurements);
Perf.printWasted(measurements);