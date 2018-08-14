My Notes:

In this version, the MVP, I completed it in one full work day. I stuck with React because I was most familiar with it. I chose not to use redux because it is such a simple app and the main app component could hold all the state data. The biggest difficulty I had was dealing with the "type of each performer" criteria. I wanted to finish this task in one day and decided to skip over having a nested array of objects in my state. That would require more special handling of data, so for the sake of time I simply left one string field for the performer's name. I spent the weekend attempting to complete this task with a full-stack architecture, but I had some difficulties. Look at the README in the other github repo for more details.

## Usage

"npm i" to install all dependencies

## Folder Structure

```
idagio-final/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    components/
      AddTrack.js
      Track.js
      TrackList.js
    App.js
    index.js
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

If you use a Node server, you can even share the route matching logic between the client and the server. However duplicating it also works fine in simple cases.


