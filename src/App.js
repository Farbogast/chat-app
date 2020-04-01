import React from "react";
import ContactList from "./components/ContactList";
import PropTypes from "prop-types";

function App() {
  return (
    <div className="App">
      <ContactList />
    </div>
  );
}
ContactList.PropTypes = {
  userName: PropTypes.string.isRequired,
  userOnline: PropTypes.bool.isRequired,
  userAvatar: PropTypes.string.isRequired
};

export default App;
