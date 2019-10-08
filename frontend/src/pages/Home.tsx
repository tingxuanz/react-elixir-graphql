import React from 'react';
import { Link } from 'react-router-dom';
import { useApolloClient } from '@apollo/react-hooks';

const Home = () => {
  const client = useApolloClient();
  return (
    <Link to="location">
      <button onClick={() => client.writeData({ data: { userInput: '112 Mimosa Rd, Carnegie, VIC' }})}>Search</button>
    </Link>
  )
}

export default Home;