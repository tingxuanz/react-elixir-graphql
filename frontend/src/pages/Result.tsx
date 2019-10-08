import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useApolloClient, useQuery } from '@apollo/react-hooks';

import Location from '../components/Location';
import { GET_USERINPUT } from '../queries';

interface UserInputData {
  userInput: string;
}

const Result: React.FC = () => {
  const client = useApolloClient();
  const { data } = useQuery<UserInputData>(GET_USERINPUT);
  return (
    <Container maxWidth="md">
      <Typography variant="h6" gutterBottom>
        Address Lookup Result
      </Typography>
      {(data && data.userInput) ? <Location address={data.userInput} /> : <p>No address provided yet</p>}
      <Button 
        variant="contained"
        color="primary"
        onClick={() => client.writeData({ data: { userInput:  '' } })}
      >
        <Link to="" style={{ textDecoration: 'none', color: 'black' }}>Go Back</Link>
      </Button>
    </Container>
  )
}

export default Result;