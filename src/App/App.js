import React from 'react';
import { ApplicationViews } from '../components/ApplicationViews'
import { Route, Redirect} from 'react-router'
import { Login } from '../components/auth/Login'
import { NavBar } from '../components/nav/Navbar'
import { Register } from '../components/auth/Register'
import './App.css'


export const App = () => (
  <>
      <Route render={() => {
          if (localStorage.getItem("lu_token")) {
              return <>
                  <Route render={NavBar} />
                  <Route render={props => <ApplicationViews {...props} />} />
              </>
          } else {
              return <Redirect to="/login" />
          }
      }} />

      <Route path="/login" render={Login} />
      <Route path="/register" render={Register} />
  </>
)
