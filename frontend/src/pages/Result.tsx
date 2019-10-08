import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Location from '../components/Location';

const Result: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h6" gutterBottom>
        Address Lookup Result
      </Typography>
      <Location />
    </Container>
  )
}

export default Result;