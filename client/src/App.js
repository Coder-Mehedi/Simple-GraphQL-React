import React from 'react';
import Launches from './components/Launches'
import Launch from './components/Launch'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import logo from './logo.png'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App container">
          <img src={logo} alt="SpaceX Logo" className="logo"/>
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number"  component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
