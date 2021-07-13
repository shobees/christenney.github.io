import React from "react";

const Navs = () => {
  const navsItems = [
    {
      name: "HOME",
      link: "#",
    },
    {
      name: "DEMOS",
      link: "#demos",
    },
    {
      name: "ABOUT",
      link: "#about",
    },
    {
      name: "CONTACT",
      link: "#contact-us",
    },
  ];

  return (
    <ul className="navsList">
      {navsItems.map((item, index) => (
        <li key={index} className="navsItem">
          <a href={item.link}> {item.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default Navs;
