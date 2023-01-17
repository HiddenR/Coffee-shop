import React from "react";
import { Link } from "react-router-dom";

import Classes from "./about.module.css";
const About = () => {
  const socialMedia = [
    {
      social: "Facebook: ",
      socialAccount: "@Café au Lait",
    },
    {
      social: "Twitter: ",
      socialAccount: "@Café au Lait",
    },
    {
      social: "Instagram: ",
      socialAccount: "@Café au Lait",
    },
    {
      social: "Email: ",
      socialAccount: "@Café au Lait",
    },
  ];

  const SocialMEdia = socialMedia.map((account, index) => {
    const site = <span>{account.social}</span>;
    const Account = <Link id={Classes.Link}>{account.socialAccount}</Link>;
    return (
      <li key={index}>
        {site}
        {Account}
      </li>
    );
  });
  return (
    <div className={Classes.aboutWrapper}>
      <span id={Classes.spanId}>Phone: 555-555-1234</span>
      <span id={Classes.spanId}>Visit us on:</span>
      <ul id={Classes.spanId}>{SocialMEdia}</ul>
    </div>
  );
};

export default About;
