# <ProjectName>

<Description>

# Dev Setup

Change your app name and

Run:

```bash
app=my_new_app

git clone git@github.com:dvingo/react-starter-pack.git "$app" &&\
cd "$app" &&\
npm i &&\
npm run dev
```

Point browser at localhost:3000

You can change the port here:
https://github.com/dvingo/react-starter-pack/blob/master/server-config.js

Add more components and routes and uncomment the RouteHandler in App:
https://github.com/dvingo/react-starter-pack/blob/master/app/components/App.js

# What's inside

## React.js
[http://facebook.github.io/react/docs/why-react.html](http://facebook.github.io/react/docs/why-react.html)

## Immutable.js
[https://facebook.github.io/immutable-js/](https://facebook.github.io/immutable-js/)

## Nuclear.js
[https://optimizely.github.io/nuclear-js/](https://optimizely.github.io/nuclear-js/)

## FastClick
[https://github.com/ftlabs/fastclick](https://github.com/ftlabs/fastclick)

## Hammer.js
[https://hammerjs.github.io/](https://hammerjs.github.io/)

## React Router
[http://rackt.github.io/react-router/](http://rackt.github.io/react-router/)

## Webpack
[https://webpack.github.io/](https://webpack.github.io/)

## Firebase
[https://www.firebase.com/](https://www.firebase.com/)

## Sass
[http://sass-lang.com/](http://sass-lang.com/)

# Project layout

1. React components live under `components`.
2. Nuclear state management is under the `app/state` directory.
3. Styles live under `app/styles`.
4. Routes are in `app/routes.js`.
5. Build runs via package.json run script:

    NODE_ENV=dev node dev-server.js

6. Express server to serve the app is under server.js.
