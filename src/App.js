import React from "react";
import Contact from "./components/Contact";
import PropTypes from "prop-types";

const users = [
  {
    name: "Elaine Perez",
    avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    status: true
  },
  {
    name: "Ted Rodriquez",
    avatar: "https://randomuser.me/api/portraits/men/24.jpg",
    status: false
  },
  {
    name: "Joyce Warren",
    avatar: "https://randomuser.me/api/portraits/women/61.jpg",
    status: true
  }
];

function App() {
  return (
    <div className="App">
      {users.map(function(user) {
        return <Contact {...user} />;
      })}
      ;
    </div>
  );
}
Contact.PropTypes = {
  userName: PropTypes.string.isRequired,
  userStatus: PropTypes.bool.isRequired,
  userAvatar: PropTypes.string.isRequired
};

export default App;
