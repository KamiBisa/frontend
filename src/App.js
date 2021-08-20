import React, {useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import ContextExample from './pages/ContextExample'
import DonationPage from './pages/DonationPage'
import GiveDonationPage from './pages/GiveDonationPage'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import RegisterPage from './pages/RegisterPage'
import {useDispatch} from 'react-redux';
import {userInfo} from './redux/actions/authActions';
import CreateDonationProgram from './pages/CreateDonationProgram'
import ProtectedRoute from './ProtectedRoute';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userInfo());
  }, [dispatch]);
  
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Navbar />
      <Switch>
        <Route path="/context-example">
          <ContextExample />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Route path="/donation">
          <DonationPage
            title="Saling membantu untuk indonesia sehat"
            fundraiserName="KamiBisa"
            donaturCount={21}
            amount={1700000}
            goal={10000000}
            imageUrl="https://redaksiindonesia.com/wp-content/uploads/2020/01/Donasi.jpg"
            desc="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe deleniti
        dicta dolorem dignissimos quaerat ad nulla, quidem nihil nam inventore
        minima velit mollitia iste numquam dolorum autem. Molestiae tempore
        commodi soluta ea quo, reprehenderit accusantium dolorum voluptatibus
        quam id totam rem ipsa iusto possimus asperiores debitis consequuntur
        quas? Voluptates veritatis, a et placeat consequuntur quis. Labore,
        tempore hic. Quod beatae sapiente eaque quibusdam nostrum odit debitis
        atque magni eum soluta delectus repudiandae fugiat quaerat a aperiam
        impedit fugit, architecto asperiores. Itaque ratione at eius ex dolore
        doloremque ad vel. Labore rerum eveniet culpa perspiciatis reiciendis
        ipsam, veniam modi! Laudantium, ad.
      "
          />
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
        <ProtectedRoute isFundraiser path='/program/create' exact component={CreateDonationProgram} />
      </Switch>
    </Router>
  )
}
