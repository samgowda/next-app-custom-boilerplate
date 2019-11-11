# Spiffy Next Boilerplate App

## General

This is a TypeScript React/Redux Next.js application scaffold to get started with server side React. The boilerplate allows you to experiment with Next.js without spending time on config and component structure.

## Tech Stack

1. Next 4.2.1
2. React 16.2.0
3. Redux 4
4. Next-Redux-Saga 1.0.1
5. Next-Redux-Wrapper 1.3.5
6. Next-Routes 1.2.0
7. TypeScript 2.8.3
8. Create Next App 
9. Styled-Components 2.4.0

## Installation

0. Install [`Yarn`](https://yarnpkg.com/en/), [`TypeScript`](https://www.typescriptlang.org), and [`Node v8.11.3`](https://nodejs.org/en/download/)

1. Install the project dependencies:

    `$ yarn install`

2. Start the development server:

    `$ yarn start`


## Project Organization

All Components are sorted into 3 directories:

- Components that represent "Pages" (i.e. base component for a route) are stored in the `/pages` directory. Routing in Next.js is based on the file system, so `./pages/index.ts` maps to the `/` route and `./pages/favorites.ts` would map to `/favorites`.

The `./static` directory maps to `/static` in the `next` server, so you can put all your static resources like images in there.

- Components that serve as wrappers/Higher Order components (HOCs) are stored in the `redux/[resource]` directory under the `hawk.tsx` filename. These `hawks` are connected to redux state and wrap page components. These parent containers pass redux state as props down to child components, in order to keep ui presentational components as "dumb" and reusable as possible.

- Components that can be used throughout the app as global components are stored in the `/components` directory.


## Data Flow

For large React/Redux applications the data flow can become increasingly complex and convoluted. Here is a diagram of the client side data flow for this project:

![data flow diagram](./static/img/app_data_flow_diagram.png)

All actions that require some type of asynchronous code (e.g. network requests) are intercepted by [Redux Sagas](https://github.com/redux-saga/redux-saga). These sagas are generators that listen for actions and yield a new action once the async process has completed. Sagas let you express debouncing, cancellation, routing, and API calls in a single place.


## Unit Tests

This project makes use of unit testing to verify code is properly used. 

For unit testing use [Jest](https://facebook.github.io/jest/docs/en/tutorial-react.html). To run unit tests,
run jest from the root of the project.  Tests live in the `test/` directory of every feature folder.


## Styling

`Next` supports universal styles with [styled-components](https://www.styled-components.com/). Styles are "mobile-first."
The required styles for the first render are served within the HTML and the rest are loaded in the client to avoid any FOUCs. For this purpose I am extending the `<_document />` and injecting the server side rendered styles into the <head>. 
  

## Bootstrap Skeleton

This project was bootstrapped with [Create Next App](https://github.com/segmentio/create-next-app).

Find the most recent version of this guide at [here](https://github.com/segmentio/create-next-app/blob/master/lib/templates/default/README.md). And check out [Next.js repo](https://github.com/zeit/next.js) for the most up-to-date info.

