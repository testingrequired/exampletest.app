# Example Test App

A web app designed to be a target for test automation scripts.

[![Netlify Status](https://api.netlify.com/api/v1/badges/e809471a-a410-45c8-937d-d5969a65f174/deploy-status)](https://app.netlify.com/sites/example-test-app/deploys)

https://exampletest.app/

## The App

The web app is a mock social media site called Lemon. This will present a variety of testing scenarios around test data and automation. The app will have several configurable settings providing different environmental challenges.

The goal of the app is to teach test automation at different difficulty levels while encouraging best practices.

The develop of the app is on going.

### Logging In

You can login as `testUser` or any other user on the site with the password of `password`.

### Refresh

Refreshing the page creates a new session with fresh users and posts.

### Admin

[https://exampletest.app/_](https://exampletest.app/_)

The admin pages allow the test environment to be configured.

#### Seed

https://exampletest.app/_/seed

The seed is what powers the random data generation. Changing the seed regenerates users and posts.

#### Config

https://exampletest.app/_/config

Various configuration can be edited here.

#### Users

https://exampletest.app/_/users

Registered users are listed here.

#### Posts

https://exampletest.app/_/posts

Registered users are listed here.

#### Share (Experimental)

https://exampletest.app/_/share

Get a link to share that loads with a defined seed and config.

## Development

Run the development server.

```bash
$ npm run dev
```

## Build For Deployment

Build and export to a static site.

```bash
$ npm run deploy
```