import React, { Suspense, lazy} from 'react';

import { Route, BrowserRouter, Switch } from 'react-router-dom';

const Homepage = lazy(() => import('./pages/homepage/homepage'));

const App: React.FC = () => {
  
    return (
      <Suspense fallback={<div />}>
        <BrowserRouter>
          <Switch>
            <Route path="/"><Homepage /></Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
    );
}

export default App;
