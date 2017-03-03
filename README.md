# React Boilerplate
### For Full Stack Projects with Auth0 authorization

- This boilerplate is to help get up and running with full stack projects using React.
- This is bootstrapped for use with Auth0 authorization
- The server (Express) and client (React) run in parallel via `concurrently` to allow for easy API calls.
- Express handles the API routes, and React-Router handles the client routes.
- MongoDB and Mongoose are used for the database.
- The project contains React-Bootstrap for styling and grid layouts.

### Setup
1. Clone repo

`git clone https://github.com/bhefty/react-boilerplate-fullstack.git $APP_NAME`

2. Change into directory and install dependencies

*Replace `$APP_NAME` with a name for your unique app.*
```
cd $APP_NAME
npm install
```

### Auth0 Setup
1. [Create an account](https://auth0.com/)
2. Create a new Client and choosing client type Single Page Web Application
3. Under Allowed Callback URLs add `http://localhost:3000` and any other callback URL for the production site.
4. Under Allows Origins (CORS) add `http://localhost:3000' and any other production site domain.
5. Save Changes
6. Go to Connections > Social on the left navigation pane to select two (for free) social login methods that can be used with the app.
7. Within your newly cloned directory, add a `.env` file to the root of the project.
8. Add the following variables, gathering the information from the Settings page of your Client you created in Auth0. *Note: Prefix variables with `REACT_APP_` for easy `.env` loading from the backbone of create-react-app*
```
REACT_APP_AUTH0_CLIENT_ID='CLIENT_ID_HERE_bisdafli2r4r4532'
REACT_APP_AUTH0_CLIENT_SECRET='CLIENT_SECRET_HERE_elfi34fl'
REACT_APP_AUTH0_DOMAIN='your_account.auth0.com'
```

#### Commands
- **Run in development mode**

`npm run dev`

- **Run in production mode**

`npm start`

- **Start only server**

`node server`

- **Start only client**

`npm run client:start`

- **Run tests**

`npm test`

- **Build for production**

`npm run build`



### Deploy to Heroku
This buildback is from [Heroku Buildpack for create-react-app](https://github.com/mars/create-react-app-buildpack). Check it out for additional details.

*Replace `$APP_NAME` with a name for your unique app.*

```bash
heroku create $APP_NAME --buildpack https://github.com/mars/create-react-app-buildpack.git
git add .
git commit -m "Start with create-react-app"
git push heroku master
heroku open
```


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
