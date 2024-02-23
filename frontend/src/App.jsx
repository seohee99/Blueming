import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers/router';
import store from './store'

function App() {

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>

    </>
  )
}

export default App
