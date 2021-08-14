import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import ContextExample from './pages/ContextExample'
import DonationPage from './pages/DonationPage'
import GiveDonationPage from './pages/GiveDonationPage'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import RegisterPage from './pages/RegisterPage'

export default function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      {/* <Navbar /> */}
      <Switch>
        <Route path="/context-example">
          <ContextExample />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Route path="/donation">
          <DonationPage />
        </Route>
        <Route path="/give-donation">
          <GiveDonationPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
