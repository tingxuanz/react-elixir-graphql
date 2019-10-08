# Frontend
cd into frontend directory

## Install dependencies
`yarn install` or simply `yarn`

## Run
`yarn start`

## Test
`yarn test`

# Backend
cd into backend directory

## Install dependencies
`mix deps.get`

## Start server
`mix phx.server`

## Test
`mix test`

# Note
* backend only enable cors for localhost:3000, so please DO NOT serve frontend with other ports

* In frontend, some tests are written with Enzyme and some are written with React-Testing-Library. This is because tests were first written with Enzyme. Then when writing tests for components using Apollo, I encountered issues with Enzyme, so I switched to React-Testing-Library. 