import React from 'react';
import {
  BrowserRouter,
  Switch
} from 'react-router-dom';
import AppRoute from './AppRoute';
import AppLayout from './AppLayout';
import LandingPage from './LandingPage';
import TodoApp from './Todo/App';
import NewsApp from './News/App';

const App = () => (
  <BrowserRouter>
    <Switch>
      <AppRoute exact path="/" layout={AppLayout} component={LandingPage} />
      <AppRoute exact path="/todoapp" layout={AppLayout} component={TodoApp} />
      <AppRoute exact path="/newsapp" layout={AppLayout} component={NewsApp} />
    </Switch>
  </BrowserRouter>
);

export default App;
