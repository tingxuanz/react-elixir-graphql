import React from 'react';
import Container from '@material-ui/core/Container';

import AddressForm from '../components/AddressForm';

const Home = () => {
  return (
    <Container maxWidth="md">
      <AddressForm />
    </Container>
  )
}

export default Home;