import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { ApolloConsumer } from '@apollo/react-hooks';

interface AddressFormState {
  address: string;
  suburb: string;
  state: string;
  country: string;
  addressError: boolean;
  suburbError: boolean;
  stateError: boolean;
  countryError: boolean,
}

class AddressForm extends Component<{}, AddressFormState> {
  state = {
    address: '',
    suburb: '',
    state: '',
    country: '',
    addressError: false,
    suburbError: false,
    stateError: false,
    countryError: false,
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const { target: { name, value } } = event;
    this.setState({[name]: value} as Pick<AddressFormState, any>);
  }

  handleInputBlur = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    const { name, value } = event.currentTarget as HTMLInputElement;
    const stateName = `${name}Error`;
    if (!value) {
      this.setState({ [stateName]: true } as Pick<AddressFormState, any>);
    } else {
      this.setState({ [stateName]: false } as Pick<AddressFormState, any>);
    }
  }

  render() {
    const { 
      address,
      suburb,
      state,
      country,
      addressError,
      suburbError,
      stateError,
      countryError
    } = this.state;

    const fullAddress = `${address}, ${suburb}, ${state}, ${country}`

    const btnDisable: boolean = !(address && suburb && state && country);
    return (
      <ApolloConsumer>
        {client => (
          <Fragment>
            <Typography variant="h6" gutterBottom>
              Please fill in address
            </Typography>
            <Grid container spacing={3}>
              <Grid item sm={12}>
                <TextField
                  required
                  id="address"
                  name="address"
                  label="Address"
                  placeholder="70 Stephenson Street"
                  fullWidth
                  value={address}
                  onChange={this.handleInputChange}
                  onBlur={this.handleInputBlur}
                  error={addressError}
                />
              </Grid>
              <Grid item sm={4}>
                <TextField
                  required
                  id="suburb"
                  name="suburb"
                  label="Suburb"
                  placeholder="Cremorne"
                  fullWidth
                  value={suburb}
                  onChange={this.handleInputChange}
                  onBlur={this.handleInputBlur}
                  error={suburbError}
                />
              </Grid>
              <Grid item sm={4} >
                <TextField 
                  required 
                  id="state" 
                  name="state"
                  label="State"
                  placeholder="VIC"
                  fullWidth
                  value={state}
                  onChange={this.handleInputChange}
                  onBlur={this.handleInputBlur}
                  error={stateError}
                />
              </Grid>
              <Grid item sm={4}>
                <TextField
                  required
                  id="country"
                  name="country"
                  label="Country"
                  placeholder="Australia"
                  fullWidth
                  value={country}
                  onChange={this.handleInputChange}
                  onBlur={this.handleInputBlur}
                  error={countryError}
                />
              </Grid>
              <Grid item sm={12}>
                <Button 
                  variant="contained"
                  color="primary"
                  disabled={btnDisable}
                  onClick={() => client.writeData({ data: { userInput:  fullAddress } })}
                >
                  <Link to="result" style={{ textDecoration: 'none', color: 'black' }}>Submit</Link>
                </Button>
              </Grid>
            </Grid>
          </Fragment>
        )}
      </ApolloConsumer>
        
    )
  }
}

export default AddressForm;