import React from "react";
import {
  FaLinkedin,
  FaGithubSquare,
  FaInstagramSquare,
  FaStackOverflow
} from "react-icons/fa";

const data = [
  {
    id: 1,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/rishabh0211",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/rishabh-rastogi-955868103/",
  },
  {
    id: 3,
    icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
    url: "https://www.instagram.com/rishabh0211/",
  },
  {
    id: 4,
    icon: <FaStackOverflow className="social-icon"></FaStackOverflow>,
    url: "https://stackoverflow.com/users/9658693/rishabh0211?tab=profile",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} target="_blank" rel="nofollow noopener noreferrer" className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
};