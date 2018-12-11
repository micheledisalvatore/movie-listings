# Movie listings challenge

[![Part of Zone Frontend][zone-fe-image]][zone-fe-url]

> This is not a test! Seriously, try and have fun with it, make it your own!

## Introduction

- 😍 Be sure to write comments and a README. Provide instructions on how to run the project and any notes about your solution.
- 🤩 Feel free to use a JavaScript framework. We use React, Vue and plain JavaScript here but use what you’re most comfortable with.
- 🤨 You can also use a starter kit like [Create React App][create-react-app] or [Vue CLI][vue-cli] to save time.
- 🤗 We love clean, responsive interfaces. Pick your favourite [Google font][google-fonts] and layout the movies in a grid, adjusting the number of columns as the device width allows.
- 🧐 We’re most interested to see problem solving and your approach… also ES6 please.
- 😇 Keep it simple, keep it DRY, but don’t over complicate or over engineer, comment and test as much as possible.
- 🤓 Commit your code to a public Git repository and provide us with the URL.

## Brief

Using the TMDb API display a list of now showing movies allowing the user to filter by genre and rating.

> Note: [You’ll need an TMDb account][tmdb-signup] to request an API key. Once you are registered, go to account settings and click 'API' in sidebar.

## Input

- [TMDb Movies Now Playing API][tmdb-now-playing]
- [TMDb Movie genres API][tmdb-genres]
- [TMDb Image API][tmdb-images]
- Minimum rating input with a range between 0 and 10, increments of 0.5 and a default set to 3.
- Multiple genres input (checkboxes). Must only contain genres from the TMDb API that are in the returned movie result set.

## Output

- Display a list of movies, each showing their title, genres and poster image.
- The movies should be ordered by popularity (most popular first - `popularity` property).
- Movies should be filterable by multiple genres, the user should have the ability to toggle movies depending on all of its assigned genres. For example if 'Action' and 'Drama' genres are selected listed movies must have **both** 'Action' and 'Drama' genres.
- Movies should also be filterable by their rating (`vote_average` property). i.e If rating was set to 5, you would expect to see all movies with a rating of 5 or higher.
- The input API's should only be called once.

[zone-fe-image]: https://img.shields.io/badge/-frontend-lightgrey.svg?logo=data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTMgMTQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgIDxwb2x5Z29uIGlkPSJTaGFwZSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIiBwb2ludHM9IjYuMjc3NjY4NzEgMTAuNzU0MjMzMSAxMi45OTU5NTA5IDAgMi43MzMwMDYxMyAwIDAuNzMwMDYxMzUgMy4xOTc2Njg3MSA2LjcxOTE0MTEgMy4xOTc2Njg3MSAwIDEzLjk1MTA0MjkgMTAuMjU5NTA5MiAxMy45NTEwNDI5IDEyLjI2MzMxMjkgMTAuNzUxNjU2NCI+PC9wb2x5Z29uPjwvc3ZnPg==&longCache=true&style=flat-square&colorA=2C2B39&colorB=1010E5
[zone-fe-url]: https://github.com/zone/frontend
[create-react-app]: https://github.com/facebook/create-react-app#readme
[vue-cli]: https://vuejs.org/v2/guide/installation.html#CLI
[tmdb-now-playing]: https://developers.themoviedb.org/3/movies/get-now-playing
[tmdb-genres]: https://developers.themoviedb.org/3/genres/get-movie-list
[tmdb-signup]: https://www.themoviedb.org/account/signup
[tmdb-images]: https://developers.themoviedb.org/3/getting-started/images
[google-fonts]: https://fonts.google.com/

## Notes
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Styling
This project is using Material UI in order to be focused more on the logic of the JS application, on the side of Material UI is used JSS that I've used to customize the CSS for specific cases.

### Comments
I don't like to write comments into the code, I prefer having self explaining code, then you won't find any comment (except the linting comments)

### Testing
I wrote unit tests in a BDD way covering the most important parts of the project.

### Over engineering
When you're showcasing what you know, it's hard to stay in the borders of not over engineering. Here I decided to use redux with redux-saga to handle the async calls. For example I could have achieved just using async/await into the specific components, or sending more parameters to the API, or managing better all the info retrieved by the APIs.

### Deployed version
I've deployed this project on [Netlify](https://movie-listings-demo.netlify.com/) if you don't want to run it locally 🙂

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

### `yarn lint`

Parses the `src` directory for linting.<br>