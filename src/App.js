import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

import DonationPage from './pages/DonationPage'
import GiveDonationPage from './pages/GiveDonationPage'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import RegisterPage from './pages/RegisterPage'
import AdminDashboard from './pages/AdminDashboard'
import AdminPage from './pages/AdminPage'

import ProtectedRoute from './components/Utilities/ProtectedRoute'
import GuestRoute from './components/Utilities/GuestRoute'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <ProtectedRoute path="/profile" component={ProfilePage} />
        <Route path="/admin/:type" component={AdminDashboard} />
        <Route path="/admin" component={AdminPage} exact />
        <Route path="/donation/:id" component={DonationPage} />
        <Route path="/give-donation" component={GiveDonationPage} />
        <GuestRoute path="/login" component={LoginPage} />
        <GuestRoute path="/register" component={RegisterPage} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  )
}
