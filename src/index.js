import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TV from './pages/TV';
import TVshow from './pages/TVshow'
import reportWebVitals from './reportWebVitals';
import SearchBar from './SearchBar';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Movie from './pages/Movie';
import SearchRow from './pages/SearchRow';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/tv",
    element: <TV/>,
  },
  {
    path: "/movie/:id/:name",
    element: <Movie/>,
  },
  {
    path: "/searchbar",
    element: <SearchBar/>,
  },
  {
    path: "/tvshow/:id/:name/:season/:episode",
    element: <TVshow/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
