### Demo screencast

Please have a look at the screencast for demo: https://www.loom.com/share/6605a30f90ed4296b38d45000102f9eb

## Available Scripts

You can see two folders in the root directory i.e backend and frontend.
**backend:** We have used nodeJS technology for creating an API. We are exposing the /games(https://localhost:4000/games) API.

**frontend:** We have used typescript with react.

### Steps to start the backend and frontend servers

**Note:** As backend API is required for the frontend. So please make sure that you start backend server before frontend.

**backend:**
- Go inside the `/backend` directory.
- Use the command `yarn install` and `yarn start` to start the server.
- This will start the server on PORT 4000.
- It will expose the API i.e http://localhost:4000/games

**frontend:**
- Go inside the `/frontend` directory.
- Use the command `yarn install` and `yarn start` to start the server.
- This will start the server on PORT 3000.
- On the frontend side, we are using backend API for displaying the game's data.

### Run the API test cases
- Go inside the `/frontend` directory.
- Use the command `yarn test`.

### Notes
- On the frontend side, we are using typescript with react. For the designing, material UI library is used.
- For the responsive UI, we are using material UI grid structure.
- For persistent storing the likes count, we are using the localstorage with the respective states.

### Objectives achieved
- Create a REST API serving the above JSON file.
- Create a web site that fetches the list and displays the video games.
- The data of the games should be kept in some kind of state.
- It should be possible to "refresh" the list by clicking a button
- Add a "like" button to each video game and make it possible to "like" it.
- There should be a box that sums the number of likes somewhere. With a button to reset the likes.
- The likes should be kept when the browser is refreshed.
- There should be (at least) one test included checking the API and one for the front end, but no need to overdo it.
