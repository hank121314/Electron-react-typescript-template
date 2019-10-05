// src/main.tsx
import React, { ReactElement } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Dashboard } from './views/Dashboard/Dashboard';
import { Splash } from './views/Splash/Splash';
import routes from './views/routes';

export const App = (): ReactElement => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path={routes.Splash} component={Splash} />
        <Route path={routes.Dashboard} component={Dashboard} />
      </Switch>
    </HashRouter>
  );
};
