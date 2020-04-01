import React from "react";
import Contact from "./Contact";

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
  },
  {
    name: "Lawrence Shelton",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
    status: false
  },
  {
    name: "Gwendolyn Robinson",
    avatar: "https://randomuser.me/api/portraits/women/80.jpg",
    status: true
  }
];

const ContactList = () => (
  <div>
    {users.map(item => (
      <Contact name={item.name} avatar={item.avatar} status={item.status} />
    ))}
  </div>
);

export default ContactList;
