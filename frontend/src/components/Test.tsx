import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

const EXCHANGE_RATES = gql `
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`
interface Data {
  rates: Array<{ currency: string, rate: number }>
}

const ExchangeRates: React.FC = () => {
  return (
    <Query<Data> query={EXCHANGE_RATES}>
      {
        ({ loading, error, data }) => {
          if (loading) {
            return (<p>loading</p>);
          }
          if (error) {
            return (<p>error</p>);
          }
          return (
            <div>
              {
                data && data.rates.map(({currency, rate}) => (
                <p key={currency}>{currency} : {rate}</p>
                ))
              } 
            </div>
          )
        }
      }
    </Query>
  )
}

export default ExchangeRates;
