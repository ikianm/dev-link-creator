import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import routes from './routes';
import Topbar from './Components/Topbar/Topbar';

export default function App() {
  const router = useRoutes(routes);

  return (
    <>
    <Provider store={store}>
      <Topbar />
      {router}
    </Provider>
    </>
  )
}
