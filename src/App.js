import React from 'react';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom'

import Home from './pages/Home.js';
import Chrono from './pages/Chrono.js';
import ToDoList from './pages/ToDoList.js';

import './App.css';
import logo from './logo.png'; // with import

const routes = [
  {
    title: 'HOME',
    path: '/',
    exact: true,
    content: <Home />
  },
  {
    title: 'Chrono',
    path: '/chrono',
    exact: true,
    content: <Chrono />
  },
  {
    title: 'ToDoList',
    path: '/todolist',
    exact: true,
    content: <ToDoList />
  }
]

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App__header">
          <div className="header__logo">
            <img src={logo} alt="logo"></img>
            <h1 className="header__logo__title">TOOLS</h1>
          </div>
          <div className="header__menu">
            <NavLink exact={routes[0].exact} to={routes[0].path}>
              <div className="header__menu__item">{routes[0].title}</div>
            </NavLink>
            <NavLink exact={routes[1].exact} to={routes[1].path}>
              <div className="header__menu__item">{routes[1].title}</div>
            </NavLink>
            <NavLink exact={routes[2].exact} to={routes[2].path}>
              <div className="header__menu__item">{routes[2].title}</div>
            </NavLink>
          </div>
        </header>
        <main className="App__main">

          <Switch>
            <Route exact={routes[0].exact} path={routes[0].path} children={routes[0].content} />
            <Route exact={routes[1].exact} path={routes[1].path} children={routes[1].content} />
            <Route exact={routes[2].exact} path={routes[2].path} children={routes[2].content} />
          </Switch>

        </main>
        <footer className="App__footer"></footer>
      </div>
    </BrowserRouter>

  );
}

export default App;
