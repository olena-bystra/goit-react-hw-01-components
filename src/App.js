import React from "react";
import Profile from "./components/Profile/Profile.js";
import user from './components/Profile/user.json';


function App() {
  return (
    <div>
      < Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
}

export default App;
