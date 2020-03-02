import React from 'react';
import Launches from './components/Launches'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import './App.css'
import logo from './logo.png'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App container">
        <img src={logo} alt="SpaceX Logo" className="logo"/>
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
